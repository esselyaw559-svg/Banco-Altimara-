"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import Header from "@/components/header"
import LoadingOverlay from "@/components/loading-overlay"
import { Phone, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AccountOptionsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingAction, setLoadingAction] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  const handleAction = (action: string, path: string) => {
    setLoadingAction(action)
    setTimeout(() => {
      setLoadingAction(null)
      router.push(path)
    }, 1500)
  }

  if (isLoading) {
    return <LoadingOverlay message="Loading options..." />
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto space-y-6">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Account Options</CardTitle>
              <CardDescription className="text-center">Choose an option to proceed with your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full" size="lg" onClick={() => handleAction("Signing In", "/login")}>
                Sign In
              </Button>
              <Button
                className="w-full bg-transparent"
                size="lg"
                variant="outline"
                onClick={() => handleAction("Loading Contact Page", "/contact-us")}
              >
                <Phone className="mr-2 h-4 w-4" />
                Contact Us to Open Account
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-gray-800 mb-2">New to Banco Altamira?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Account opening must be done in person at one of our branches. Our staff will assist you with all the
                documentation and guide you through the process.
              </p>
              <div className="flex flex-col gap-2">
                <Link href="/banking" className="text-blue-600 hover:underline text-sm flex items-center">
                  Explore our banking services <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
                <Link href="/credit-cards" className="text-blue-600 hover:underline text-sm flex items-center">
                  View our credit card offers <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      {loadingAction && <LoadingOverlay message={loadingAction} />}
    </div>
  )
}
