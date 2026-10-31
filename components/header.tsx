"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Loader2, Menu, X } from "lucide-react"

const navItems = [
  { title: "Credit Cards", href: "/credit-cards" },
  { title: "Banking", href: "/banking" },
  { title: "Auto", href: "/auto" },
  { title: "Business", href: "/business" },
  { title: "Commercial", href: "/commercial" },
]

export default function Header() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [loadingPath, setLoadingPath] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setLoadingPath(href)
    setIsMobileMenuOpen(false)
    setTimeout(() => {
      setIsLoading(false)
      setLoadingPath("")
      router.push(href)
    }, 1000)
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-28 h-9 sm:w-36 sm:h-11">
              <Image
                src="/images/whatsapp-image-2025-12-17-at-10.png"
                alt="Banco Altamira"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 112px, 144px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => handleNavigation(item.href)}
                disabled={isLoading}
              >
                {item.title}
              </Button>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="hidden sm:flex text-gray-600 hover:text-gray-900"
              onClick={() => handleNavigation("/login")}
              disabled={isLoading}
            >
              {isLoading && loadingPath === "/login" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => handleNavigation("/contact-us")}
              disabled={isLoading}
            >
              {isLoading && loadingPath === "/contact-us" ? <Loader2 className="h-4 w-4 animate-spin" /> : "Contact Us"}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="justify-start text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  onClick={() => handleNavigation(item.href)}
                  disabled={isLoading}
                >
                  {item.title}
                </Button>
              ))}
              <Button
                variant="ghost"
                className="justify-start text-gray-600 hover:text-gray-900 sm:hidden"
                onClick={() => handleNavigation("/login")}
                disabled={isLoading}
              >
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
