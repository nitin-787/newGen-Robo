"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/about", label: "About" },
  { href: "/franchise", label: "Open a Franchise" },
  { href: "/school-lab", label: "School Lab Setup" },
  { href: "/center", label: "Learn at a Center" },
  { href: "/contact", label: "Contact" },
  { href: "/more", label: "More" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

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
        <span className="text-xs text-gray-500 hidden sm:inline-block">Backed by AWADH, IT Ropar</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-gray-700 hover:text-sky-500 transition-colors",
              link.active && "text-sky-500 font-medium",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 z-20">
        <Link href="/login" className="flex items-center gap-2 text-sky-500 hover:text-sky-600 transition-colors">
          <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <span className="hidden sm:inline-block">Log In</span>
        </Link>
        <button className="md:hidden z-20" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-10 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-gray-700 hover:text-sky-500 transition-colors py-2 text-lg border-b border-gray-100",
                link.active && "text-sky-500 font-medium",
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
