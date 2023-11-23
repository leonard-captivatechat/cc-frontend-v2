'use client'

import { redirect } from 'next/navigation'

export default function Home() {
  // TODO: redirect to dashboard if user is logged in, otherwise redirect to login
  redirect('/dashboard')
}
