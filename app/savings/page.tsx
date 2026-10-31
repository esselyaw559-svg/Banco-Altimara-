"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, PiggyBank, TrendingUp, Target, Phone, ArrowRight } from "lucide-react"
import BackButton from "@/components/back-button"
import { getCurrentUser } from "@/utils/userAccounts"
import Link from "next/link"

export default function SavingsPage() {
  const [isPageLoading, setIsPageLoading] = useState(true)
  const [totalSavings, setTotalSavings] = useState(0)

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const currentUser = getCurrentUser()
      if (currentUser) {
        setTotalSavings(currentUser.accountData.retirementSavings || 0)
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

        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-foreground">My Savings</h1>

          <Card className="mb-8 border border-gray-200">
            <CardHeader className="bg-primary text-white rounded-t-lg">
              <CardTitle className="flex items-center gap-3 text-xl">
                <PiggyBank className="h-6 w-6" />
                Total Savings
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 pb-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                <p className="text-sm text-muted-foreground mb-2">Available Balance</p>
                <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{formatEuro(totalSavings)}</div>
                <div className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">Steady growth</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Target, title: "Goals Achieved", desc: "Financial goals on track" },
              { icon: PiggyBank, title: "Secure Savings", desc: "Fully protected" },
              { icon: TrendingUp, title: "Competitive Interest", desc: "Maximize returns" },
            ].map((item, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-4 text-center">
                  <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mb-3 mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-primary text-white rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold mb-2">Grow Your Savings</h2>
            <p className="mb-4 text-white/80">Our savings specialists can help you create a personalized plan.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/banking">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                  Explore Options
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
