import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Banco Altima
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/credit-cards" className="text-gray-600 hover:text-gray-900">
              Credit Cards
            </Link>
            <Link href="/banking" className="text-gray-600 hover:text-gray-900">
              Banking
            </Link>
            <Link href="/auto" className="text-gray-600 hover:text-gray-900">
              Auto
            </Link>
            <Link href="/business" className="text-gray-600 hover:text-gray-900">
              Business
            </Link>
            <Link href="/commercial" className="text-gray-600 hover:text-gray-900">
              Commercial
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Link href="/contact-us">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
