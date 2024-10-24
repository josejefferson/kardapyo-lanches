from django.contrib import admin
from django.utils.html import format_html
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
  list_display = ['name', 'price_display', 'image_display', 'created_at', 'updated_at']
  search_fields = ['name', 'description', 'price']

  def view_on_site(self, obj):
    return f'/product/{obj.id}'

  @admin.display(description='Preço',ordering='price')
  def price_display(self, obj):
    return f'R$ {obj.price:.2f}'.replace('.', ',')

  @admin.display(description='Imagem')
  def image_display(self, obj):
    return format_html('<img src="{}" width="32px" />', obj.image)
