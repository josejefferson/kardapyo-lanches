import { notFound } from '@hapi/boom'
import { Router } from 'express'
import { prisma } from '../../config/database'

export const publicPageRoutes = Router()

// Homepage
publicPageRoutes.get('/', async (req, res) => {
  const products = await prisma.product.findMany({ orderBy: { updatedAt: 'desc' } })
  res.render('home', { products })
})

// Resultados da pesquisa
publicPageRoutes.get('/search', async (req, res) => {
  const search = req.query.q as string
  const products = await prisma.product.findMany({
    where: { name: { contains: search } },
    orderBy: { updatedAt: 'desc' }
  })
  res.render('search', { products, search })
})

// Página do produto
publicPageRoutes.get('/product/:id', async (req, res) => {
  const product = await prisma.product.findUnique({ where: { id: req.params.id } })
  if (!product) throw notFound('Este produto não existe')
  res.render('product', { product, title: product.name })
})

// Login
publicPageRoutes.get('/login', async (req, res) => {
  try {
    const products = await prisma.product.findMany({ orderBy: { updatedAt: 'desc' } })
    res.render('login', { products })
  } catch (error) {
    res.render('login', { products: [] })
  }
})
