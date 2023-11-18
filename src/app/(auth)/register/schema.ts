import * as z from 'zod'

const passwordLength = 6

export const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  password: z
    .string()
    .regex(new RegExp(`^(?=.*[a-zA-Z])(?=.*\\d).{${passwordLength},}$`), {
      message: `Password must contain at least ${passwordLength} characters and include both letters and numbers.`,
    }),
})

export type FormData = z.infer<typeof registerSchema>
