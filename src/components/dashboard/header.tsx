'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

const DashboardHeader = () => {
  return (
    <div className="w-full border-b border-secondary-dark/20 px-8 py-6">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={`/logo-gray.png`}
            alt="logo-gray"
            width={227}
            height={42}
          />
        </Link>
        <div className="flex items-center space-x-3">
          <Button className="h-14 w-[182px] rounded-[60px] py-5">
            Contact Sales
          </Button>
          <div className="flex h-[47px] w-[47px] items-center justify-center rounded-full bg-secondary-dark font-medium text-secondary-dark-foreground">
            CP
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
