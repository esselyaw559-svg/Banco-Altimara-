"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { userAccounts, setCurrentUser } from "@/utils/userAccounts"
import { storage } from "@/utils/storage"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    await new Promise((resolve) => setTimeout(resolve, 2000))

    if (username === userAccounts.michael.email && password === userAccounts.michael.password) {
      storage.set("auth_token", "dummy_token")
      storage.set("user_email", username)
      setCurrentUser("michael")
      router.push("/verify")
      return
    }

    if (username === userAccounts.thomas.email && password === userAccounts.thomas.password) {
      storage.set("auth_token", "dummy_token")
      storage.set("user_email", username)
      setCurrentUser("thomas")
      router.push("/verify")
      return
    }

    if (username === userAccounts.cheddar.email && password === userAccounts.cheddar.password) {
      storage.set("auth_token", "dummy_token")
      storage.set("user_email", username)
      setCurrentUser("cheddar")
      router.push("/verify")
      return
    }

    if (username === userAccounts.badell.email && password === userAccounts.badell.password) {
      storage.set("auth_token", "dummy_token")
      storage.set("user_email", username)
      setCurrentUser("badell")
      router.push("/verify")
      return
    }

    setIsLoading(false)
    setError("Invalid credentials. Please try again.")
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

      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <Card className="w-full max-w-md border border-gray-200 shadow-sm">
          <div className="flex justify-center pt-6">
            <div className="relative w-40 h-12 sm:w-48 sm:h-14">
              <Image
                src="/images/whatsapp-image-2025-12-17-at-10.png"
                alt="Banco Altamira"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
          </div>
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-xl sm:text-2xl font-bold text-center text-foreground">Sign In</CardTitle>
            <CardDescription className="text-center text-sm">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Email</Label>
                <Input
                  id="username"
                  placeholder="Enter your email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isLoading}
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                  required
                  className="h-11"
                />
              </div>
              {error && <p className="text-destructive text-sm">{error}</p>}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 pt-2">
              <Button className="w-full h-11 bg-primary hover:bg-primary/90" type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
              <Link href="/forgot-password" className="w-full">
                <Button variant="link" className="text-sm text-primary w-full" type="button">
                  Forgot your username or password?
                </Button>
              </Link>
            </CardFooter>
          </form>
        </Card>
      </main>
    </div>
  )
}
