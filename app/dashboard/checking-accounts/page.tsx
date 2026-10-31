"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Wallet, TrendingUp, Eye, EyeOff, Lock } from "lucide-react"
import BackButton from "@/components/back-button"
import { getCurrentUser } from "@/utils/userAccounts"

interface CheckingAccount {
  id: string
  name: string
  accountNumber: string
  balance: number
}

export default function CheckingAccountsPage() {
  const [accounts, setAccounts] = useState<CheckingAccount[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [visibleBalances, setVisibleBalances] = useState<Record<string, boolean>>({})

  useEffect(() => {
    const fetchAccounts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const currentUser = getCurrentUser()
      if (currentUser && currentUser.accountData.checkingAccounts) {
        setAccounts(currentUser.accountData.checkingAccounts)
        const initialVisibility: Record<string, boolean> = {}
        currentUser.accountData.checkingAccounts.forEach((acc) => {
          initialVisibility[acc.id] = true
        })
        setVisibleBalances(initialVisibility)
      }

      setIsLoading(false)
    }

    fetchAccounts()
  }, [])

  const toggleBalanceVisibility = (id: string) => {
    setVisibleBalances((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <h1 className="text-2xl font-bold mb-6 text-gray-800">Checking Accounts</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {accounts.map((account) => (
            <Card
              key={account.id}
              className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="bg-white border-b border-gray-100">
                <CardTitle className="flex items-center gap-2 text-base text-gray-800">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <Wallet className="h-4 w-4 text-blue-600" />
                  </div>
                  {account.name}
                </CardTitle>
                <p className="text-gray-500 text-sm mt-1">**** **** **** {account.accountNumber}</p>
              </CardHeader>
              <CardContent className="p-5 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-sm text-gray-600">Available Balance</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleBalanceVisibility(account.id)}
                    className="h-8 w-8 p-0 hover:bg-gray-100"
                  >
                    {visibleBalances[account.id] ? (
                      <Eye className="h-4 w-4 text-gray-500" />
                    ) : (
                      <EyeOff className="h-4 w-4 text-gray-500" />
                    )}
                  </Button>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  {visibleBalances[account.id] ? formatEuro(account.balance) : "••••••"}
                </p>
                <Button disabled className="w-full bg-gray-100 text-gray-500 hover:bg-gray-100 cursor-not-allowed">
                  <Lock className="mr-2 h-4 w-4" />
                  View Details (Locked)
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
