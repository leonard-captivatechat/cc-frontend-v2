'use client'

import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { forgotPasswordSchema, FormData } from './schema'

export default function ForgotPassword() {
  const form = useForm<FormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })
  const [isEmailSent, setIsEmailSent] = useState(false)

  const onSubmit = (values: FormData) => {
    setIsEmailSent(true)
    console.log(values)
  }

  return isEmailSent ? (
    <div className="w-full space-y-6">
      <p className="text-2xl font-semibold">Password Reset</p>
      <p className="text-sm font-medium">
        We&apos;ve sent you an email. Just follow the instructions to reset your
        password.
      </p>
      <Link href="/login" className="block">
        <Button className="h-14 w-full shadow-md shadow-black/25">
          Go back to login page
        </Button>
      </Link>
    </div>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <p className="text-2xl font-semibold">Password Reset</p>
        <p className="text-sm font-medium">
          Enter the email address that you used to register. We&apos;ll send you
          an email with a link to reset your password.
        </p>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute -top-2 left-4 bg-background px-2 font-medium">
                Work Email
              </FormLabel>
              <FormControl>
                <Input type="email" className="h-14" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="h-14 w-full shadow-md shadow-black/25">
          Send to email
        </Button>
      </form>
    </Form>
  )
}
