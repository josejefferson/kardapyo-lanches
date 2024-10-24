from django.urls import path
from django.contrib.auth import views as auth_views
from django.views.generic.base import RedirectView
from .views import HomeView, SearchView, ProductView, ProductListView, ProductCreateView, ProductEditView, ProductDeleteView, LoginView
from django.urls import include, path

urlpatterns = [
  path('', HomeView.as_view(), name='home'),
  path('search', SearchView.as_view(), name='search'),
  path('product/<int:pk>', ProductView.as_view(), name='product'),
  path('logout', auth_views.logout_then_login, name='logout'),
  path('adm', RedirectView.as_view(pattern_name='product_admin', permanent=True), name='admin'),
  path('adm/products', ProductListView.as_view(), name='product_admin'),
  path('adm/products/create', ProductCreateView.as_view(), name='product_create'),
  path('adm/products/edit/<int:pk>', ProductEditView.as_view(), name='product_edit'),
  path('adm/products/delete/<int:pk>', ProductDeleteView.as_view(), name='product_delete'),
  path('accounts/login/', LoginView.as_view(), name='login'),
]
