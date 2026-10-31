"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownIcon, ArrowUpIcon, ArrowRight, Receipt } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { recentTransactions } from "@/utils/transactions"

const formatEuro = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export default function RecentTransactions() {
  const [transactions, setTransactions] = useState(recentTransactions)

  useEffect(() => {
    // Use the centralized transactions from utils
    setTransactions(recentTransactions)
  }, [])

  return (
    <Card className="border border-gray-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between border-b border-gray-100 pb-4">
        <CardTitle className="flex items-center gap-2 text-base text-gray-800">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Receipt className="h-4 w-4 text-gray-600" />
          </div>
          Recent Transactions
        </CardTitle>
        <Link href="/dashboard/transactions">
          <Button variant="ghost" size="sm" className="gap-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100">
            View All <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent className="pt-4">
        <ul className="space-y-3">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${transaction.type === "credit" ? "bg-green-50" : "bg-red-50"}`}>
                  {transaction.type === "credit" ? (
                    <ArrowUpIcon className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-600" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm">{transaction.description}</p>
                  <p className="text-xs text-gray-500">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-semibold text-sm ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                >
                  {transaction.type === "credit" ? "+" : "-"}
                  {formatEuro(transaction.amount)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
