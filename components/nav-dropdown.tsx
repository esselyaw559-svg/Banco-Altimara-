"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"

interface NavItem {
  title: string
  items: { name: string; href: string }[]
  mainHref: string
}

interface NavDropdownProps {
  item: NavItem
}

export default function NavDropdown({ item }: NavDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(href)
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center space-x-1 text-blue-600 hover:text-blue-800"
        onClick={(e) => handleClick(e, item.mainHref)}
      >
        <span>{item.title}</span>
        <ChevronDown className="h-4 w-4" />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {item.items.map((subItem, index) => (
              <a
                key={index}
                href={subItem.href} // Corrected href to use subItem.href
                className="block px-4 py-2 text-sm text-blue-600 hover:bg-gray-100 hover:text-blue-800"
                role="menuitem"
                onClick={(e) => handleClick(e, subItem.href)} // Corrected href to use subItem.href
              >
                {subItem.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
