"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Copy, CheckCircle2, CreditCard, Building2, User } from "lucide-react"
import { getCurrentUser } from "@/utils/userAccounts"

export default function AccountSettingsPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    const currentUser = getCurrentUser()
    if (currentUser) {
      setUserName(currentUser.name)
    }

    return () => clearTimeout(timer)
  }, [])

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

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
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Account Settings</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Account Details */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <Building2 className="h-4 w-4 text-gray-600" />
                Account Details
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Routing Number</p>
                  <p className="text-base font-semibold text-gray-900 font-mono">071000013</p>
                </div>
                <Button
                  onClick={() => handleCopy("071000013", "routing")}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  {copiedField === "routing" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">Account Number</p>
                  <p className="text-base font-semibold text-gray-900 font-mono">7822198345</p>
                </div>
                <Button
                  onClick={() => handleCopy("7822198345", "account")}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  {copiedField === "account" ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Profile Info */}
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <User className="h-4 w-4 text-gray-600" />
                Profile Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-500 mb-1 font-medium">Account Holder</p>
                <p className="text-base font-semibold text-gray-900">{userName || "Account Holder"}</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-500 mb-1 font-medium">Account Type</p>
                <p className="text-base font-semibold text-gray-900">Personal Checking</p>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Deposit */}
          <Card className="border border-gray-200 shadow-sm md:col-span-2">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <CreditCard className="h-4 w-4 text-gray-600" />
                Mobile Check Deposit
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-gray-700" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm">Personal Mobile Deposit</p>
                  <p className="text-xs text-gray-500">Enabled for personal checks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
