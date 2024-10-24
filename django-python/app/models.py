from django.db import models
from django.utils import timezone

class Product(models.Model):
  name = models.CharField(max_length=200, verbose_name="Nome")
  description = models.TextField(verbose_name="Descrição")
  price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Preço")
  image = models.URLField(max_length=200, verbose_name="Imagem")
  created_at = models.DateTimeField(auto_now_add=True, verbose_name="Criado em")
  updated_at = models.DateTimeField(auto_now=True, verbose_name="Atualizado em")

  def is_new(self):
    return (timezone.now() - self.created_at).total_seconds() < 86400

  def __str__(self):
    return self.name
  
  class Meta:
    verbose_name = 'Produto'
    verbose_name_plural = 'Produtos'
    ordering = ['-updated_at']
