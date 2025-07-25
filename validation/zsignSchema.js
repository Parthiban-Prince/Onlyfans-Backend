import z from 'zod'

export const signUpSchema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export const signInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters")
})

export default {
  signInSchema,
  signUpSchema
}
