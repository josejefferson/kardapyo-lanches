from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404
from django.contrib.auth.views import LoginView
from .models import Product
from .forms import ProductForm

class HomeView(ListView):
  model = Product
  context_object_name = 'products'
  template_name = 'home.html'

class SearchView(ListView):
  template_name = 'search.html'
  context_object_name = 'products'
  
  def get_context_data(self, **kwargs):
    context = super().get_context_data(**kwargs)
    search = self.request.GET.get('q')
    context['search'] = search
    return context

  def get_queryset(self):
    search = self.request.GET.get('q')
    products = Product.objects.filter(name__icontains=search)
    return products

class ProductView(ListView):
  template_name = 'product.html'
  context_object_name = 'product'

  def get_queryset(self):
    return get_object_or_404(Product, id=self.kwargs['pk'])

class ProductListView(LoginRequiredMixin, ListView):
  model = Product
  context_object_name = 'products'
  template_name = 'products.html'

class ProductCreateView(LoginRequiredMixin, CreateView):
  model = Product
  form_class = ProductForm
  template_name = 'product-edit.html'
  success_url = '/adm/products'

class ProductEditView(LoginRequiredMixin, UpdateView):
  model = Product
  form_class = ProductForm
  template_name = 'product-edit.html'
  context_object_name = 'product'
  success_url = '/adm/products'

class ProductDeleteView(LoginRequiredMixin, DeleteView):
  model = Product
  success_url = '/adm/products'

class LoginView(LoginView):
  def get_context_data(self, **kwargs):
    context = super().get_context_data(**kwargs)
    products = Product.objects.all()
    context['products'] = products
    return context
