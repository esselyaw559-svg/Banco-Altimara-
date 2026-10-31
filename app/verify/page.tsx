"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Clock } from "lucide-react"
import Link from "next/link"
import { getCurrentUser } from "@/utils/userAccounts"
import { storage } from "@/utils/storage"

export default function VerifyPage() {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [timeLeft, setTimeLeft] = useState(60)
  const [isTimerActive, setIsTimerActive] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const token = storage.get("auth_token")
    if (!token) {
      router.push("/login")
      return
    }
    const user = getCurrentUser()
    if (!user) {
      storage.remove("auth_token")
      router.push("/login")
      return
    }
    setCurrentUser(user)
  }, [router])

  useEffect(() => {
    if (!isTimerActive || timeLeft <= 0) {
      if (timeLeft <= 0) {
        setError("Verification time has expired. Please sign in again.")
        setIsTimerActive(false)
      }
      return
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimerActive(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [timeLeft, isTimerActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (timeLeft <= 0) {
      setError("Verification time has expired. Please sign in again.")
      return
    }
    setIsLoading(true)
    setError("")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    if (!currentUser) {
      setError("User session expired. Please sign in again.")
      setIsLoading(false)
      return
    }
    const verificationCodes = currentUser.verificationCode.split(",")
    const isValidCode = verificationCodes.some((validCode: string) => code === validCode.trim())
    if (isValidCode) {
      storage.set("2fa_verified", "true")
      router.push("/dashboard")
    } else {
      setError("Invalid verification code. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-12 sm:w-40 sm:h-14">
                <Image
                  src="/images/whatsapp-image-2025-12-17-at-10.png"
                  alt="Banco Altamira"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <Card className="w-full max-w-md border border-gray-200 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Verify Your Identity</CardTitle>
            <CardDescription>Enter the verification code sent to your email</CardDescription>
            <div
              className={`flex items-center justify-center gap-2 mt-4 p-3 rounded-lg ${timeLeft <= 10 ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-700"}`}
            >
              <Clock className="h-5 w-5" />
              <span className="font-mono text-lg font-bold">{formatTime(timeLeft)}</span>
            </div>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="code">Verification Code</Label>
                <Input
                  id="code"
                  placeholder="Enter the code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  disabled={isLoading || timeLeft <= 0}
                  required
                  className="h-11"
                />
              </div>
              {error && <p className="text-destructive text-sm mt-2">{error}</p>}
            </CardContent>
            <CardFooter>
              <Button className="w-full h-11" type="submit" disabled={isLoading || timeLeft <= 0}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  "Verify"
                )}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}
