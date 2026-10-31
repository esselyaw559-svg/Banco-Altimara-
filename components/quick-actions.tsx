"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2, CreditCard, ArrowLeftRight, PiggyBank, TrendingUp, Landmark } from "lucide-react"

const QuickActions = () => {
  const router = useRouter()
  const [loadingAction, setLoadingAction] = useState<string | null>(null)

  const handleNavigation = async (path: string, actionName: string) => {
    setLoadingAction(actionName)
    await new Promise((resolve) => setTimeout(resolve, 800))
    router.push(path)
  }

  const actions = [
    { id: "checking", label: "Checking Accounts", icon: Landmark, path: "/dashboard/checking-accounts" },
    { id: "cards", label: "My Cards", icon: CreditCard, path: "/dashboard/my-cards" },
    { id: "transfer", label: "Transfer", icon: ArrowLeftRight, path: "/transfer" },
    { id: "savings", label: "Savings", icon: PiggyBank, path: "/savings" },
    { id: "investments", label: "Investments", icon: TrendingUp, path: "/investments" },
  ]

  return (
    <Card className="border border-gray-200 shadow-sm h-full">
      <CardHeader className="border-b border-gray-100 pb-4">
        <CardTitle className="text-lg text-gray-800">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex flex-col gap-2">
          {actions.map((action) => (
            <Button
              key={action.id}
              variant="ghost"
              onClick={() => handleNavigation(action.path, action.id)}
              disabled={loadingAction !== null}
              className="flex items-center justify-start h-14 w-full rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all bg-white"
            >
              {loadingAction === action.id ? (
                <Loader2 className="h-5 w-5 animate-spin text-blue-600 mr-3" />
              ) : (
                <div className="p-2 bg-blue-50 rounded-lg mr-3">
                  <action.icon className="h-5 w-5 text-blue-600" />
                </div>
              )}
              <span className="text-sm font-medium text-gray-700">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default QuickActions
