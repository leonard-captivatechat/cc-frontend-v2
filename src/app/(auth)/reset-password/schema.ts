import * as z from 'zod'

const passwordLength = 6

export const resetPasswordSchema = z
  .object({
    newPassword: z
      .string()
      .regex(new RegExp(`^(?=.*[a-zA-Z])(?=.*\\d).{${passwordLength},}$`), {
        message: `Password must contain at least ${passwordLength} characters and include both letters and numbers.`,
      }),
    confirmPassword: z
      .string()
      .regex(new RegExp(`^(?=.*[a-zA-Z])(?=.*\\d).{${passwordLength},}$`), {
        message: `Password must contain at least ${passwordLength} characters and include both letters and numbers.`,
      }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  })

export type FormData = z.infer<typeof resetPasswordSchema>
