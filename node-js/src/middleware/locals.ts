import { NextFunction, Request, Response } from 'express'

export const localsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.locals.user = req.user
  res.locals.csrf = req.csrfToken()
  next()
}
