import { Router } from 'express'
import passport from 'passport'
import { validate } from '../../middleware/validate'
import { loginSchema } from '../../validators/login'

export const publicActionRoutes = Router()

// Login
publicActionRoutes.post(
  '/login',
  validate(loginSchema),
  passport.authenticate('local', {
    successRedirect: '/admin/products',
    failureRedirect: '/login',
    failureFlash: true,
    successFlash: true
  })
)

// Logout
publicActionRoutes.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err)
    req.flash('info', 'Você saiu da sua conta')
    res.redirect('/')
  })
})
