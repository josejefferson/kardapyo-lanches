import { Router } from 'express'
import { authenticated } from '../middleware/authenticated'
import { adminActionRoutes } from './admin/actions'
import { adminPageRoutes } from './admin/pages'
import { publicActionRoutes } from './public/actions'
import { publicPageRoutes } from './public/pages'

export const routes = Router()

routes.use(publicPageRoutes)
routes.use(publicActionRoutes)
routes.use('/admin', authenticated, adminPageRoutes)
routes.use('/admin', authenticated, adminActionRoutes)
