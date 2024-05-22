import { object, string } from 'zod'

export const loginSchema = object({
  email: string().trim().min(1),
  password: string().min(1)
})
