"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { PiggyBank, TrendingUp, ShieldCheck, Zap, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function BankingPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 1000)
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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-grow">
        {/* Hero - simplified */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&q=80"
              alt="Savings and money management"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Savings Accounts That Work for You
              </h1>
              <p className="text-lg text-white/90">
                Earn up to 4.5% APY on your savings. No fees, no minimums, fully insured.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Why Choose Our Savings Accounts?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: PiggyBank, title: "High APY", desc: "Earn up to 4.5% APY on qualifying balances." },
                { icon: TrendingUp, title: "No Fees", desc: "Fee-free savings with no monthly maintenance fees." },
                { icon: ShieldCheck, title: "FDIC Insured", desc: "Your deposits are insured up to €250,000." },
                { icon: Zap, title: "Easy Access", desc: "Manage your account 24/7 with online banking." },
              ].map((feature, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gray-100 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Account Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Our Savings Account Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&q=80"
                    alt="High yield savings"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">360 Performance Savings</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "High-yield up to 4.5% APY",
                      "No minimum balance",
                      "No monthly fees",
                      "Fully insured deposits",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80"
                    alt="Kids savings account"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Kids Savings Account</h3>
                  <ul className="space-y-2 mb-6">
                    {["Designed for savers under 18", "No minimum balance", "No fees ever", "Parental controls"].map(
                      (item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                  <Link href="/contact-us">
                    <Button className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Saving?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Visit one of our branches to open your account today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
