import { coerce, object, string } from 'zod'

export const productSchema = object({
  name: string().trim().min(1),
  description: string().trim().min(1),
  price: coerce.number().min(0),
  image: string().trim().min(1)
})
