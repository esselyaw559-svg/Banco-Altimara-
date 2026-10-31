"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, TrendingUp, Phone, ArrowRight, PiggyBank, BarChart, Shield } from "lucide-react"
import BackButton from "@/components/back-button"
import { getCurrentUser } from "@/utils/userAccounts"
import Link from "next/link"

interface Investment {
  name: string
  value: number
}

export default function InvestmentsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [investments, setInvestments] = useState<Investment[]>([])
  const [totalInvestment, setTotalInvestment] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const currentUser = getCurrentUser()
      if (currentUser) {
        setInvestments(currentUser.accountData.investments)
        setTotalInvestment(currentUser.accountData.investments.reduce((sum, inv) => sum + inv.value, 0))
      }
      setIsPageLoading(false)
    }
    loadData()
  }, [])

  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  if (isPageLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container mx-auto px-4 py-8">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">Investment Portfolio</h1>

        <Card className="max-w-2xl mx-auto border border-gray-200 mb-8">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2 text-xl">
              <TrendingUp className="h-5 w-5" />
              My Investments
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-foreground">{investment.name}</p>
                    <p className="text-lg font-semibold text-foreground">{formatEuro(investment.value)}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-foreground">Total Investments</p>
                  <p className="text-xl font-bold text-primary">{formatEuro(totalInvestment)}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold mb-4 text-foreground text-center">Investment Services</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: PiggyBank, title: "Retirement Planning" },
              { icon: BarChart, title: "Portfolio Management" },
              { icon: Shield, title: "Risk Assessment" },
            ].map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                <item.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-sm">{item.title}</h3>
              </div>
            ))}
          </div>

          <div className="bg-primary text-white rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Want to Discuss Your Investments?</h2>
            <p className="mb-4 text-white/80">Schedule a consultation with our financial advisors.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/banking">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Explore Banking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
