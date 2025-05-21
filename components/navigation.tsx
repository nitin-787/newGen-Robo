"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/school-lab", label: "School Lab Setup" },
  { href: "/learn-at-center", label: "Learn at a Center" },
  // { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
      {/* Logo + Tagline */}
      <Link href="/" className="flex items-center gap-2 z-30">
        <div className="relative h-10 w-40">
          <Image
            src="/assets/images/new-gen-robo-logo.jpeg"
            alt="new gen robo logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "text-lg font-medium text-gray-600 hover:text-sky-500 transition-colors duration-200",
              pathname === link.href &&
                "text-sky-600 font-semibold underline underline-offset-4"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-30"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Overlay Menu */}
      <div
        className={cn(
          "fixed inset-0 z-20 bg-white/90 backdrop-blur-lg transition-transform duration-300 md:hidden flex flex-col pt-24 px-6",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-6 text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                "border-b pb-2 border-gray-200 text-gray-700 hover:text-sky-500 transition-colors",
                pathname === link.href && "text-sky-600 font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto mb-8 pt-8">
          <Link
            href="/contact"
            className="w-full text-center block bg-sky-500 text-white py-3 rounded-full hover:bg-sky-600 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
