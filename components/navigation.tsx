"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/school-lab", label: "School Lab Setup" },
  { href: "/learn-at-center", label: "Learn at a Center" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
      <Link href="/" className="flex items-center gap-2 z-20">
        <div className="relative h-12 w-48">
          <Image
            src="/placeholder.svg?height=60&width=200"
            alt="Youngovator Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xs text-gray-500 hidden sm:inline-block">
          Backed by AWADH, IT Ropar
        </span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-gray-700 hover:text-sky-500 transition-colors",
              pathname === link.href && "text-sky-500 font-medium"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 z-20">
        <button className="md:hidden z-20" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-10 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-gray-700 hover:text-sky-500 transition-colors py-2 text-lg border-b border-gray-100",
                pathname === link.href && "text-sky-500 font-medium"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto mb-8 pt-6">
          <Link
            href="/contact"
            className="bg-sky-500 text-white py-3 px-6 rounded-full w-full block text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
