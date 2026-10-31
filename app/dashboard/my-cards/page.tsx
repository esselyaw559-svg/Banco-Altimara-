"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock, Unlock, CreditCard } from "lucide-react"
import BackButton from "@/components/back-button"
import { getCurrentUser } from "@/utils/userAccounts"

interface CardData {
  id: string
  type: string
  lastFour: string
  isLocked: boolean
  expiryDate: string
}

export default function MyCardsPage() {
  const [cards, setCards] = useState<CardData[]>([])

  useEffect(() => {
    const currentUser = getCurrentUser()
    if (currentUser && currentUser.accountData.creditCards) {
      const cardsWithExpiry = currentUser.accountData.creditCards.map((card) => ({
        ...card,
        expiryDate: card.type === "Visa Platinum" ? "08/26" : "12/28",
      }))
      setCards(cardsWithExpiry)
    }
  }, [])

  const toggleLock = (id: string) => {
    setCards(cards.map((card) => (card.id === id ? { ...card, isLocked: !card.isLocked } : card)))
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 container mx-auto px-4 py-6">
        <BackButton href="/dashboard" label="Back to Dashboard" />

        <h1 className="text-2xl font-bold mb-6 text-gray-800">My Cards</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              {/* Card visual - clean navy design */}
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 text-white p-6 relative overflow-hidden">
                <div className="absolute top-3 right-3 opacity-20">
                  <CreditCard className="w-12 h-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5" />
                    <span className="text-sm font-medium">{card.type}</span>
                  </div>

                  <div className="font-mono text-xl tracking-widest mb-3">**** **** **** {card.lastFour}</div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300">Valid until {card.expiryDate}</span>
                    <div className="bg-white/10 rounded px-2 py-1">
                      {card.isLocked ? <Lock className="h-3 w-3" /> : <Unlock className="h-3 w-3" />}
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 bg-white space-y-2">
                <Button variant="outline" disabled className="w-full opacity-50 cursor-not-allowed bg-transparent">
                  <Lock className="mr-2 h-4 w-4" />
                  View Details (Locked)
                </Button>

                <Button
                  variant={card.isLocked ? "default" : "outline"}
                  onClick={() => toggleLock(card.id)}
                  className={`w-full ${card.isLocked ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                >
                  {card.isLocked ? (
                    <>
                      <Unlock className="mr-2 h-4 w-4" />
                      Unlock Card
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-4 w-4" />
                      Lock Card
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}
