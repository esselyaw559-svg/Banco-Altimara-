"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { CreditCard, Gift, Plane, Loader2, Phone, ArrowRight, Shield, Percent, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CreditCardsPage() {
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
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=80"
              alt="Credit cards and rewards"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Find Your Perfect Card
              </h1>
              <p className="text-lg text-white/90">
                Earn unlimited rewards on every purchase. Cash back, travel miles, or low interest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Us to Apply
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Manage My Cards
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Choose Your Perfect Card
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Cash Back Rewards",
                  icon: CreditCard,
                  features: ["3% on dining", "2% on groceries", "1% on everything else", "No annual fee"],
                  highlight: "Up to 3%",
                },
                {
                  title: "Travel Rewards",
                  icon: Plane,
                  features: [
                    "2x miles on all purchases",
                    "No foreign transaction fees",
                    "Airport lounge access",
                    "Travel insurance",
                  ],
                  highlight: "2x Miles",
                },
                {
                  title: "Low Interest",
                  icon: Percent,
                  features: [
                    "0% intro APR for 18 months",
                    "Low ongoing rate",
                    "No balance transfer fee",
                    "No annual fee",
                  ],
                  highlight: "0% APR",
                },
              ].map((card, index) => (
                <Card key={index} className="border border-gray-200 overflow-hidden">
                  <div className="bg-primary p-6 text-white">
                    <card.icon className="h-8 w-8 mb-3" />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                    <p className="text-2xl font-bold mt-2">{card.highlight}</p>
                  </div>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      {card.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact-us">
                      <Button className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Benefits With Every Card
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Shield, title: "Fraud Protection", desc: "24/7 fraud monitoring" },
                { icon: CreditCard, title: "Virtual Cards", desc: "Instant virtual cards" },
                { icon: Percent, title: "No Hidden Fees", desc: "Transparent pricing" },
                { icon: Gift, title: "Exclusive Perks", desc: "Special offers" },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 p-3 rounded-full w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Visit a branch to apply and get an instant approval decision.
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
