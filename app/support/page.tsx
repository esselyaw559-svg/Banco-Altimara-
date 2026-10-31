"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function ContactSupportPage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto border border-gray-200 shadow-sm">
          <CardHeader className="bg-primary text-white rounded-t-lg">
            <CardTitle className="text-2xl font-bold text-center">Contact Support</CardTitle>
            <p className="text-center text-white/80 mt-2">We're here to help you</p>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Banco Altamira</h2>
              <p className="text-muted-foreground">
                Our dedicated support team is available to assist you with all your banking needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 border border-gray-100">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Email:</p>
                <a href="mailto:altamirabanco505@gmail.com" className="text-primary hover:text-primary/80">
                  altamirabanco505@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 border border-gray-100">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground">Phone:</p>
                <a href="tel:+34632080758" className="text-primary hover:text-primary/80 font-mono">
                  +34 632 080 758
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 border border-gray-100">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Business Hours:</p>
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3 border border-gray-100">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium text-foreground mb-1">Main Branch:</p>
                <p className="text-muted-foreground">Paseo de Gracia 8-10, floor 7</p>
                <p className="text-muted-foreground">08007 Barcelona, Spain</p>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/login">
                  <Button className="w-full sm:w-auto">
                    Sign In to Online Banking
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us Page
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
