'use client'

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
import { loginSchema, FormData } from './schema'

export default function Login() {
  // 1. Define your form.
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: FormData) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <p className="text-2xl font-semibold">Login to your account</p>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email</FormLabel>
                <FormControl>
                  <Input type="email" className="h-14" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="h-14" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex space-x-2">
          <Button type="button" variant="outline" className="h-14 w-full">
            Google
          </Button>
          <Button type="button" variant="outline" className="h-14 w-full">
            Facebook
          </Button>
          <Button type="button" variant="outline" className="h-14 w-full">
            Microsoft
          </Button>
        </div>
        <Button type="submit" className="h-14 w-full shadow-md shadow-black/25">
          Continue
        </Button>
      </form>
    </Form>
  )
}
