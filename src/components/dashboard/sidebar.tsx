'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

const sidebarItems = [
  {
    title: 'Hubs',
    route: '/hubs',
    icon: 'icon-hub.png',
  },
  {
    title: 'Reports',
    route: '/reports',
    icon: 'icon-report.png',
  },
  {
    title: 'Transcripts',
    route: '/transcripts',
    icon: 'icon-transcript.png',
  },
  {
    title: 'Build for me',
    route: '/build-for-me',
    icon: 'icon-tool.png',
  },
  {
    title: 'Free Plan',
    route: '/plan',
    icon: 'icon-wallet.png',
  },
  {
    title: 'Tutorials',
    route: '/tutorials',
    icon: 'icon-report.png',
  },
]

const DashboardSidebar = () => {
  return (
    <div className="h-full w-[277px] border-r border-secondary-dark/20 p-8">
      <div className="flex flex-col space-y-8">
        <Button className="h-14 w-full py-5">Create Hub</Button>
        <div className="flex flex-col">
          {sidebarItems.map((item) => (
            <Link href={item.route} key={item.route} className="group">
              <div className="flex items-center space-x-6 rounded-sm border border-transparent p-4 group-hover:border-secondary-dark/20 group-hover:bg-secondary/50">
                <Image
                  src={`/${item.icon}`}
                  alt={item.icon}
                  width={20}
                  height={24}
                />
                <div className="text-sm font-medium text-black group-hover:font-semibold">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex justify-between text-sm">
            <span>Tokens</span>
            <span>3/20</span>
          </div>
          <Progress className="w-full" value={(3 / 20) * 100} />
          <div className="text-xs">Monthly usage resets in 3 weeks</div>
        </div>
        <Button
          className="h-14 w-full border-2 border-primary py-5 text-primary hover:text-primary"
          variant="outline"
        >
          Manage Plan
        </Button>
      </div>
    </div>
  )
}

export default DashboardSidebar
