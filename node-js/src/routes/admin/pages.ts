import { Router } from 'express'
import { prisma } from '../../config/database'

export const adminPageRoutes = Router()

// Redireciona o /admin para /admin/products
adminPageRoutes.get('/', (req, res) => {
  res.redirect('/admin/products')
})

// Administração de produtos
adminPageRoutes.get('/products', async (req, res) => {
  const products = await prisma.product.findMany({ orderBy: { updatedAt: 'desc' } })
  res.render('products', { products })
})

// Página de criar produto
adminPageRoutes.get('/products/create', async (req, res) => {
  res.render('product-edit')
})

// Página de editar produto
adminPageRoutes.get('/products/edit/:id', async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } })
  if (!product) {
    req.flash('error', 'Este produto não existe!')
    res.redirect('/admin/products')
    return
  }
  res.render('product-edit', { product })
})
