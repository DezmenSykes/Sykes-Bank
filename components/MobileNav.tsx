'use client'
import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Footer from './Footer'
  

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className='cursor-pointer' /> 
            </SheetTrigger>
            <SheetContent className='border-none bg-white'>
                <Link href='/' className='flex-items-center flex cursor-pointer items-center gap-1'>
                    <Image src="/icons/logo.svg" width={34} height={34} alt="Sykes Banking Logo"  />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>SykesVault</h1>
                </Link>
                <div className='mobilenav-sheet'>
                    <SheetClose asChild>
                        <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                        {sidebarLinks.map(link => {
                            const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                            return (
                                <SheetClose asChild key={link.route}>
                                    <Link className={cn('mobilenav-sheet_close w-full', {'bg-bank-gradient': isActive})} href={link.route} key={link.label}>
                                        <div className='relative size-6'>
                                            <Image src={link.imgURL} alt={link.label} fill className={cn({'brightness-[3] invert-0': isActive})} />
                                        </div>
                                        <p className={cn('text-16 font-semibold text-black-2', {'text-white': isActive})}>{link.label}</p>
                                    </Link>
                                </SheetClose>
                            )
                        })}

                        USER
                        </nav>
                    </SheetClose>

                    <Footer user={user} type="mobile" />
                </div>
            
            </SheetContent>
        </Sheet>
 
    </section>
  )
}

export default MobileNav