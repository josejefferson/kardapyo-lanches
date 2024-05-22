import { NextFunction, Request, Response } from 'express'

export const authenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    next()
  } else {
    req.flash('warning', 'Faça login antes de continuar')
    res.redirect('/login')
  }
}
