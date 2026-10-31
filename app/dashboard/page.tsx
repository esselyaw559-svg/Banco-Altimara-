"use client"

import { useEffect, useState } from "react"
import AccountSummary from "@/components/account-summary"
import QuickActions from "@/components/quick-actions"
import RecentTransactions from "@/components/recent-transactions"
import InvestmentChart from "@/components/investment-chart"
import { getCurrentUser } from "@/utils/userAccounts"
import { PiggyBank } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DashboardPage() {
  const [retirementSavings, setRetirementSavings] = useState(0)

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser) {
      setRetirementSavings(currentUser.accountData.retirementSavings || 0)
    }
  }, [])

  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  return (
    <main className="flex-1 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        {/* Top Section - Account Overview */}
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-4 sm:mb-6">
          <div className="md:col-span-1">
            <AccountSummary />
          </div>
          <div className="md:col-span-1">
            <QuickActions />
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            {/* Retirement Savings - simplified design */}
            <Card className="border border-gray-200 shadow-sm h-full">
              <CardHeader className="border-b border-gray-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg text-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PiggyBank className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  Retirement Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-6 flex flex-col justify-center">
                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 border border-gray-100">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Total Savings</p>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground">{formatEuro(retirementSavings)}</div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">Long-term investment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment Charts Section */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Investment Performance</h2>
          <InvestmentChart />
        </div>

        {/* Recent Transactions Section */}
        <div>
          <RecentTransactions />
        </div>
      </div>
    </main>
  )
}
