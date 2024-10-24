from django import forms
from django.contrib.auth.forms import AuthenticationForm, UsernameField
from .models import Product

class ProductForm(forms.ModelForm):
  class Meta:
    model = Product
    fields = '__all__'
    widgets = {
      'name': forms.TextInput(attrs={'class': 'input input-bordered w-full', 'autofocus': True}),
      'description': forms.Textarea(attrs={'class': 'textarea textarea-bordered w-full'}),
      'price': forms.NumberInput(attrs={'class': 'input input-bordered w-full'}),
      'image': forms.URLInput(attrs={'class': 'input input-bordered w-full'}),
    }
