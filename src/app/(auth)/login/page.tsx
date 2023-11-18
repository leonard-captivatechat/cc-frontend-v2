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
import { loginSchema, FormData } from './schema'

export default function Login() {
  const form = useForm<FormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (values: FormData) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
                  <div className="relative">
                    <Input
                      type={showPassword ? 'text' : 'password'}
                      className="h-14"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-4"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
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
        <div className="flex items-center justify-center space-x-3">
          <div className="h-px w-1/2 bg-black/50" />
          <div className="text-sm font-medium uppercase">or</div>
          <div className="h-px w-1/2 bg-black/50" />
        </div>
        <Button type="submit" className="h-14 w-full shadow-md shadow-black/25">
          Continue
        </Button>
        <div>
          <Link href="/forgot-password" className="text-sm font-medium">
            Forgot Password
          </Link>
        </div>
      </form>
    </Form>
  )
}
