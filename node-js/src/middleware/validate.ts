import { badRequest } from '@hapi/boom'
import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodType } from 'zod'

// Valida a requisição
export const validate = (schema: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.parse(req.body)
      req.body = result
      next()
    } catch (err: any) {
      let message = 'Erro de validação:'
      if (err instanceof ZodError) {
        for (const issue of err.issues) {
          message += `\n[${issue.path.join('.')}] ${issue.message}`
        }
      } else {
        message += `\n${err.message}`
      }
      throw badRequest(message)
    }
  }
}
