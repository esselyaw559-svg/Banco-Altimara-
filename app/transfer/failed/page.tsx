"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "@/components/ui/loader"

export default function TransferFailedPage() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        router.push("/support")
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [isLoading, router])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md mx-4">
        <CardHeader className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <CardTitle className="text-2xl text-red-500">Transfer Failed</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <p className="text-gray-600">Your transfer could not be processed due to account restrictions.</p>
            <p className="text-gray-600 font-semibold">
              Taxes and duties must be paid before any transfer can be made.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 mt-4">
              <p className="text-gray-700 font-medium mb-2">Please contact our customer service:</p>
              <p className="text-blue-600 font-semibold">+34 632 080 758</p>
              <p className="text-blue-600 font-semibold">altamirabanco505@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4 mt-6">
            <Link href="/dashboard">
              <Button variant="outline">Return to Dashboard</Button>
            </Link>
            <Link href="/support">
              <Button onClick={() => setIsLoading(true)}>Contact Support</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loader2 className="h-12 w-12 animate-spin text-white" />
        </div>
      )}
    </div>
  )
}
