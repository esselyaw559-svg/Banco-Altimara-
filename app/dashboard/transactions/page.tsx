"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Search, Receipt, Loader2 } from "lucide-react"
import { getCurrentUser } from "@/utils/userAccounts"
import { allTransactions } from "@/utils/transactions"

const formatEuro = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [userTransactions, setUserTransactions] = useState(allTransactions)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    const currentUser = getCurrentUser()
    setUserTransactions(allTransactions)

    return () => clearTimeout(timer)
  }, [])

  const filteredTransactions = userTransactions.filter(
    (transaction) =>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.transactionNumber.toLowerCase().includes(searchTerm.toLowerCase()),
  )

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
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Transaction History</h1>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-gray-100">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
              <Receipt className="h-4 w-4 text-gray-500" />
              All Transactions
            </CardTitle>
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search transactions..."
                className="pl-9 border-gray-200 focus:border-gray-300 focus:ring-gray-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="overflow-x-auto -mx-6 px-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200">
                    <TableHead className="text-gray-600 font-medium">Date</TableHead>
                    <TableHead className="text-gray-600 font-medium hidden sm:table-cell">Time</TableHead>
                    <TableHead className="text-gray-600 font-medium hidden md:table-cell">Transaction #</TableHead>
                    <TableHead className="text-gray-600 font-medium">Description</TableHead>
                    <TableHead className="text-gray-600 font-medium text-right">Amount</TableHead>
                    <TableHead className="text-gray-600 font-medium hidden sm:table-cell">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTransactions.map((transaction) => (
                    <TableRow key={transaction.id} className="border-gray-100 hover:bg-gray-50">
                      <TableCell className="text-gray-700">{transaction.date}</TableCell>
                      <TableCell className="text-gray-500 hidden sm:table-cell">{transaction.time}</TableCell>
                      <TableCell className="text-gray-500 font-mono text-sm hidden md:table-cell">
                        {transaction.transactionNumber}
                      </TableCell>
                      <TableCell className="text-gray-700">{transaction.description}</TableCell>
                      <TableCell
                        className={`text-right font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}
                        {formatEuro(transaction.amount)}
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded ${
                            transaction.status === "pending"
                              ? "bg-yellow-50 text-yellow-700 border border-yellow-200"
                              : "bg-green-50 text-green-700 border border-green-200"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
