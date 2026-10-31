"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2, ArrowRightLeft, Info } from "lucide-react"

const exchangeRates = {
  USD: 0.93,
  GBP: 1.18,
  CAD: 0.66,
}

export default function CurrencyExchangePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [amount, setAmount] = useState("")
  const [fromCurrency, setFromCurrency] = useState("USD")
  const [result, setResult] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleExchange = (e: React.FormEvent) => {
    e.preventDefault()
    const exchangeRate = exchangeRates[fromCurrency as keyof typeof exchangeRates]
    const convertedAmount = Number.parseFloat(amount) * exchangeRate
    setResult(`${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} EUR`)
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
        <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">Currency Exchange</h1>

        <div className="max-w-xl mx-auto space-y-6">
          <Card className="border border-gray-200 shadow-sm">
            <CardHeader className="pb-4 border-b border-gray-100">
              <CardTitle className="flex items-center gap-2 text-base font-medium text-gray-900">
                <ArrowRightLeft className="h-4 w-4 text-gray-600" />
                Exchange Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <form onSubmit={handleExchange} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm text-gray-700 font-medium">
                    Amount
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    required
                    className="border-gray-200 focus:border-gray-400 focus:ring-gray-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fromCurrency" className="text-sm text-gray-700 font-medium">
                    From Currency
                  </Label>
                  <select
                    id="fromCurrency"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="w-full p-2 border border-gray-200 rounded-md text-gray-900 focus:border-gray-400 focus:ring-gray-300"
                  >
                    <option value="USD">USD (Dollar)</option>
                    <option value="GBP">GBP (Pound)</option>
                    <option value="CAD">CAD (Canadian Dollar)</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  Convert to EUR
                </Button>
              </form>

              {result && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-900 font-medium text-center text-base">{result}</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Notice */}
          <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <Info className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-gray-600">
              Exchange rates shown are estimates. Actual rates may vary. For currency exchange transactions, please
              visit one of our branches or contact support.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
