"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Menu, LogOut, Settings, Shield, ArrowLeftRight, ChevronRight, Receipt } from "lucide-react"
import type React from "react"
import { clearAuth } from "@/utils/userAccounts"

const dropdownItems = [
  {
    href: "/dashboard/transactions",
    icon: Receipt,
    label: "Transactions",
  },
  {
    href: "/dashboard/account-settings",
    icon: Settings,
    label: "Account Settings",
  },
  {
    href: "/dashboard/security-checkout",
    icon: Shield,
    label: "Security Settings",
  },
  {
    href: "/dashboard/currency-exchange",
    icon: ArrowLeftRight,
    label: "Currency Exchange",
  },
]

export default function CustomDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleItemClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsOpen(false)
      router.push(href)
    }, 500)
  }

  const handleLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      clearAuth()
      setIsLoading(false)
      setIsOpen(false)
      router.push("/logout")
    }, 500)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
        aria-label="Menu"
      >
        <Menu className="h-5 w-5 text-gray-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg shadow-lg bg-white border border-gray-200 z-50 overflow-hidden">
          <div className="py-1" role="menu">
            {dropdownItems.map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.href}
                  onClick={(e) => handleItemClick(e, item.href)}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  role="menuitem"
                  disabled={isLoading}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-4 w-4 text-gray-400" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </button>
              )
            })}

            <div className="border-t border-gray-100 my-1" />

            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              role="menuitem"
              disabled={isLoading}
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-5 shadow-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-200 border-t-gray-600 mx-auto"></div>
            <p className="mt-2 text-sm text-gray-600">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}
