"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">
            BeTech
          </Link>
        </div>

        {/* Navigation Menu (Desktop) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/services" className="px-4 py-2 text-gray-600 hover:text-green-600">
                Services
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" className="px-4 py-2 text-gray-600 hover:text-green-600">
                About
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" className="px-4 py-2 text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="px-4 py-2 space-y-2">
            <Link href="/services" className="block text-gray-600 hover:text-green-600">Services</Link>
            <Link href="/about" className="block text-gray-600 hover:text-green-600">About</Link>
            <Link href="/contact" className="block text-gray-600 hover:text-green-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
