"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2, Lock, User, Users } from "lucide-react"

export default function SecurityCheckoutPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Security Settings</h1>

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Password Change */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <Lock className="h-4 w-4 text-gray-600" />
                Change Password
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword" className="text-sm text-gray-700 font-medium">
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    required
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword" className="text-sm text-gray-700 font-medium">
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    required
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm text-gray-700 font-medium">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white">
                  Update Password
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Account Name */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <User className="h-4 w-4 text-gray-600" />
                Account Name
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="accountName" className="text-sm text-gray-700 font-medium">
                    Display Name
                  </Label>
                  <Input
                    id="accountName"
                    placeholder="Enter new account name"
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white">
                  Update Name
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Next of Kin */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <Users className="h-4 w-4 text-gray-600" />
                Next of Kin
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nextOfKin" className="text-sm text-gray-700 font-medium">
                    Contact Name
                  </Label>
                  <Input
                    id="nextOfKin"
                    placeholder="Enter next of kin name"
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white">
                  Update Contact
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
