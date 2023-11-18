'use client'

import { useState } from 'react'
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
import { resetPasswordSchema, FormData } from './schema'

export default function ResetPassword() {
  const form = useForm<FormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
  })
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const onSubmit = (values: FormData) => {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <p className="text-2xl font-semibold">Enter your new password</p>
        <p className="text-sm font-medium">
          Please enter your new password. Must be different from the previously
          used password.
        </p>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-4 z-[1] bg-background px-2 font-medium">
                  New Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? 'text' : 'password'}
                      className="h-14"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-4"
                      onClick={() => setShowNewPassword((prev) => !prev)}
                    >
                      {showNewPassword ? (
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="relative">
                <FormLabel className="absolute -top-2 left-4 z-[1] bg-background px-2 font-medium">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfirmPassword ? 'text' : 'password'}
                      className="h-14"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-4"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                    >
                      {showConfirmPassword ? (
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
        <Button type="submit" className="h-14 w-full shadow-md shadow-black/25">
          Continue
        </Button>
      </form>
    </Form>
  )
}
