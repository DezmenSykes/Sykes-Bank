'use client'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
                <Image src="/icons/logo.svg" width={34} height={34} alt="Sykes Banking Logo" className='size-[24px] max-xl:size-14' />
                <h1 className='sidebar-logo'>SykesVault</h1>
            </Link>
            {sidebarLinks.map(link => {
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                return (
                    <Link className={cn('sidebar-link', {'bg-bank-gradient': isActive})} href={link.route} key={link.label}>
                        <div className='relative size-6'>
                            <Image src={link.imgURL} alt={link.label} fill  />
                        </div>
                        {link.label}</Link>
                )
            })}
        </nav>
    </section>
  )
}  

export default Sidebar