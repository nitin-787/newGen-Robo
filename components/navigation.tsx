"use client";

import { useState, useRef, useEffect } from "react";
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
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (isMenuOpen && scrollRef.current) {
      const activeIndex = navLinks.findIndex((link) => link.href === pathname);
      const container = scrollRef.current;
      const child = container.children[activeIndex] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  }, [isMenuOpen, pathname]);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  {
    isMenuOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-30"
        onClick={closeMenu}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-4 flex items-center justify-between relative">
      {/* Logo + Tagline */}
      <Link href="/" className="flex items-center gap-2 z-30 ml-1">
        <div className="relative h-16 w-16 -my-3">
          <Image
            src="/assets/images/new-gen-robo-logo-transparent.png"
            alt="new gen robo logo"
            fill
            className="object-contain rounded scale-150" // Makes logo bigger without affecting layout
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
        className="md:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-6 h-6 text-gray-700 hover:text-sky-500" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Fullscreen Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 h-screen w-1/2 max-w-xs bg-white z-40 transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        ref={scrollRef}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={closeMenu}
            className={cn(
              "text-lg border-b border-gray-200 py-4 block text-gray-700 hover:text-sky-500 transition-colors",
              pathname === link.href && "text-sky-600 font-semibold"
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
