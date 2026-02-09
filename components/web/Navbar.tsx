'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

const navItems = ['Home', 'About', 'All Phone', 'Contact']

const Navbar = () => {
  return (
    <nav className="bg-[#1E1E1E]">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-0">

        {/* Logo */}
        <div className="w-[60px] h-[60px]">
          <Image
            src="/assets/logo.png"
            alt="PhoneHut Logo"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Desktop Menu */}
        <ol className="hidden lg:flex gap-14 text-[18px] text-white font-medium">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-[#FF6900] transition"
            >
              {item}
            </li>
          ))}
        </ol>

        {/* Desktop Login */}
        <div className="hidden lg:block">
          <Button className="text-[18px] bg-[#FF6900] h-[48px] hover:bg-[#FF6900]/90 rounded-[8px]">
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white">
                <Menu size={28} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-[#1E1E1E] border-none">
              <div className="flex flex-col gap-8 mt-10 text-white">

                {navItems.map((item) => (
                  <SheetClose asChild key={item}>
                    <button className="text-[18px] text-left hover:text-[#FF6900]">
                      {item}
                    </button>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Button className="mt-6 bg-[#FF6900] hover:bg-[#FF6900]/90">
                    Login
                  </Button>
                </SheetClose>

              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
