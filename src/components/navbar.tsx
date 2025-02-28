"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import MegaMenu from "./mega-menu"
import ThemeToggle from "./theme-toggle"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-gray-950/80 dark:border-gray-800">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text">
              DMly
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-pink-500 transition-colors">
              Pricing
            </Link>
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                Resources <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden sm:flex hover:text-pink-500 transition-colors">
            Log in
          </Button>
          <Button
            size="sm"
            className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white border-0 hover:opacity-90 transition-opacity"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
      {isMenuOpen && <MegaMenu />}
    </header>
  )
}

