'use client'

import DashboardHeader from '@/components/dashboard/header'
import DashboardSidebar from '@/components/dashboard/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <DashboardHeader />
      <div className="flex h-[calc(100vh-105px)]">
        <DashboardSidebar />
        <div className="mr-28 flex w-[460px] items-center">{children}</div>
      </div>
    </section>
  )
}
