import { Router } from 'express'
import { prisma } from '../../config/database'
import bcryptjs from 'bcryptjs'
import { productSchema } from '../../validators/product'
import { validate } from '../../middleware/validate'

export const adminActionRoutes = Router()

// Criar produto
adminActionRoutes.post('/products/create', validate(productSchema), async (req, res) => {
  await prisma.product.create({ data: req.body })
  req.flash('success', `Produto "${req.body.name}" criado com sucesso!`)
  res.redirect('/admin/products')
})

// Editar produto
adminActionRoutes.post('/products/edit/:id', validate(productSchema), async (req, res) => {
  const product = await prisma.product.findFirst({ where: { id: req.params.id } })
  if (!product) {
    req.flash('error', 'Não foi possível editar pois o produto não existe!')
  } else {
    await prisma.product.update({ where: { id: product.id }, data: req.body })
    req.flash('success', `Produto "${req.body.name}" editado com sucesso!`)
  }
  res.redirect('/admin/products')
})

// Excluir produto
adminActionRoutes.post('/products/delete/:id', async (req, res) => {
  const product = await prisma.product.findFirst({ where: { id: req.params.id } })
  if (product) {
    await prisma.product.delete({ where: { id: product.id } })
    req.flash('success', `Produto "${product.name}" excluído com sucesso!`)
  } else {
    req.flash('warning', 'O produto não existe!')
  }
  res.redirect('/admin/products')
})

// Redefinir banco de dados (apenas para testes)
adminActionRoutes.get('/seed', async (req, res) => {
  await prisma.product.deleteMany()

  await prisma.user.deleteMany()

  await prisma.product.create({
    data: {
      name: 'Coca-Cola',
      description: 'Para acompanhar o seu lanche',
      price: 3.99,
      image: 'https://files.sunoresearch.com.br/n/uploads/2023/04/coca-cola-resultados-1t23.jpg'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Coxinha de Frango',
      description: 'A melhor da região',
      price: 2.99,
      image: 'https://kyodai.com.br/wp-content/uploads/2018/07/cox_grande_kyodai_2-1.jpeg'
    }
  })

  await prisma.product.create({
    data: {
      name: 'Pastel de Carne',
      description: 'Um delicioso e crocante pastel de carne',
      price: 4.49,
      image:
        'https://www.estadao.com.br/resizer/v2/OYMESDUUBVJJDBXTFC4YD253O4.jpg?quality=80&auth=288974b5d339d197eb843c3578f77fbd34d131698ef6c702cab28d092c61658a&width=720&height=503&smart=true'
    }
  })

  await prisma.user.create({
    data: {
      name: 'Administrador',
      email: 'admin@admin.com',
      password: await bcryptjs.hash('admin', 12)
    }
  })

  req.flash('success', 'Banco de dados resetado com sucesso!')
  res.redirect('/admin/products')
})
