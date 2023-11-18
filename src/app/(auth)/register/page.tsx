'use client'

import { useState } from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { FaRegEye } from 'react-icons/fa6'
import { FaRegEyeSlash } from 'react-icons/fa6'

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
import { registerSchema, FormData } from './schema'

export default function Register() {
  const form = useForm<FormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
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
        <p className="text-2xl font-semibold">Create your account</p>
        <div className="space-y-6">
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
          <div className="flex space-x-6">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="absolute left-4 z-[1] bg-background px-2 font-medium">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="h-14" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="relative w-full">
                  <FormLabel className="absolute left-4 z-[1] bg-background px-2 font-medium">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input type="text" className="h-14" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-4 z-[1] bg-background px-2 font-medium">
                  Password
                </FormLabel>
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
                      {showPassword ? (
                        <FaRegEyeSlash size={24} color="#AEAEAE" />
                      ) : (
                        <FaRegEye size={24} color="#AEAEAE" />
                      )}
                    </button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center space-x-3">
          <div className="h-px w-1/2 bg-black/50" />
          <div className="text-sm font-medium uppercase">or</div>
          <div className="h-px w-1/2 bg-black/50" />
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
        <p className="text-xs">
          By signing up, you agree to Captivate’s{' '}
          <Link href="#" className="font-bold underline">
            terms of service
          </Link>{' '}
          and{' '}
          <Link href="#" className="font-bold underline">
            privacy policy
          </Link>
          .
        </p>
        <Button type="submit" className="h-14 w-full shadow-md shadow-black/25">
          Continue
        </Button>
        <p className="text-sm">
          Already have an account?{' '}
          <Link href="/login" className="font-bold text-primary">
            Log in
          </Link>
        </p>
      </form>
    </Form>
  )
}
