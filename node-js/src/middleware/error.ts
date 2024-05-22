import { boomify, internal, isBoom } from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'

export const errorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  if (!isBoom(error)) {
    if (error?.statusCode) {
      error = boomify(error, { statusCode: error?.statusCode })
    } else {
      error = internal(error?.message)
    }
  }

  res.status(error.output.statusCode)

  res.render('error', {
    title: `${error?.output?.payload?.statusCode || ''} ${error?.output?.payload?.error || ''}`,
    message: error.output.payload.error === error.message ? '' : error.message
  })
}
