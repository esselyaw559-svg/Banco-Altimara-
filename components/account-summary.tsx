"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getCurrentUser } from "@/utils/userAccounts"
import { Wallet, TrendingUp, Clock } from "lucide-react"

export default function AccountSummary() {
  const [accountData, setAccountData] = useState({
    availableBalance: 0,
    totalBalance: 0,
    pendingBalance: 0,
  })

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setAccountData({
        availableBalance: currentUser.accountData.availableBalance,
        totalBalance: currentUser.accountData.totalBalance,
        pendingBalance: currentUser.accountData.pendingBalance,
      })
    }
  }, [])

  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 3,
      maximumFractionDigits: 3,
    }).format(amount)
  }

  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm h-full">
      <CardHeader className="bg-white border-b border-gray-100 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Wallet className="h-5 w-5 text-blue-600" />
          </div>
          Account Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-4 pb-6">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Available Balance</p>
              <div className="text-2xl font-bold text-gray-900">{formatEuro(accountData.availableBalance)}</div>
            </div>
            <div className="p-2 bg-white rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-sm text-gray-600">Total Balance</p>
          </div>
          <div className="text-xl font-bold text-gray-900">{formatEuro(accountData.totalBalance)}</div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="h-4 w-4 text-gray-500" />
            <p className="text-sm text-gray-600">Pending</p>
          </div>
          <div className="text-xl font-bold text-gray-900">{formatEuro(accountData.pendingBalance)}</div>
        </div>
      </CardContent>
    </Card>
  )
}
