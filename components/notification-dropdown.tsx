"use client"

import { useState, useEffect } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface LoginSession {
  loginTime: string
  logoutTime: string | null
}

const notifications = {
  inbox: [
    { id: 1, message: "New message from support", time: "2 hours ago" },
    { id: 2, message: "You have a new follower", time: "1 day ago" },
  ],
  security: [
    { id: 3, message: "Login from new device", time: "3 hours ago" },
    { id: 4, message: "Password changed successfully", time: "April 20, 2022" },
    { id: 5, message: "Password changed successfully", time: "May 12, 2018" },
  ],
  payment: [
    { id: 5, message: "Farm Debt Payment: $26,000.00", time: "April 12, 2025" },
    { id: 6, message: "Outstanding Balance: $24,000.00", time: "Just now" },
  ],
}

export default function NotificationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentSession, setCurrentSession] = useState<LoginSession | null>(null)

  useEffect(() => {
    // Record login time when component mounts
    const loginTime = new Date().toLocaleString()
    setCurrentSession({ loginTime, logoutTime: null })

    // Set up cleanup for logout time
    const handleBeforeUnload = () => {
      const logoutTime = new Date().toLocaleString()
      const sessions = JSON.parse(localStorage.getItem("loginSessions") || "[]")
      sessions.push({ loginTime, logoutTime })
      localStorage.setItem("loginSessions", JSON.stringify(sessions))
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="relative text-white hover:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell className="h-5 w-5" />
        <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
      </Button>
      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <Tabs defaultValue="security" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="inbox">Inbox</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="payment">Payment</TabsTrigger>
            </TabsList>
            <TabsContent value="inbox">
              {notifications.inbox.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="security">
              {currentSession && (
                <div className="px-4 py-2 text-sm text-gray-700 bg-blue-50">
                  <p className="font-medium">Current Session</p>
                  <p className="text-xs text-gray-500">Login Time: {currentSession.loginTime}</p>
                </div>
              )}
              {notifications.security.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
            <TabsContent value="payment">
              {notifications.payment.map((notification) => (
                <div key={notification.id} className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <p className="font-medium">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}
