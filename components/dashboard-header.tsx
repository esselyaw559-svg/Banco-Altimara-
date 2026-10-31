"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import CustomDropdown from "./custom-dropdown"
import { Clock } from "lucide-react"
import { getCurrentUser } from "@/utils/userAccounts"

export default function DashboardHeader() {
  const [currentTime, setCurrentTime] = useState("")
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      )
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    const currentUser = getCurrentUser()
    if (currentUser) {
      setUserName(currentUser.name)
    }

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Profile - hidden on mobile for cleaner look */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-gray-200 flex-shrink-0">
              <Image
                src="/images/whatsapp-20image-202025-12-18-20at-205.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            {userName && <span className="text-sm font-medium text-gray-700 hidden md:block">{userName}</span>}
          </div>

          {/* Logo - centered */}
          <Link href="/dashboard" className="flex-1 flex justify-center sm:flex-none">
            <div className="relative w-28 h-9 sm:w-32 sm:h-10">
              <Image
                src="/images/whatsapp-image-2025-12-17-at-10.png"
                alt="Banco Altamira"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 112px, 128px"
              />
            </div>
          </Link>

          {/* Right side - time and dropdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm font-mono text-gray-600">{currentTime}</span>
            </div>
            <CustomDropdown />
          </div>
        </div>
      </div>
    </header>
  )
}
