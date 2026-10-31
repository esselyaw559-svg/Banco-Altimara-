"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { Car, DollarSign, Percent, Phone, ArrowRight, CheckCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export default function AutoPage() {
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
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80"
              alt="Luxury car financing"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Drive Your Dream Car Today
              </h1>
              <p className="text-lg text-white/90">
                Competitive rates starting from 3.99% APR. Pre-qualify without impacting your credit score.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Pre-Qualified
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Check My Rate
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
              Why Choose Our Auto Financing?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Car,
                  title: "Easy Application",
                  desc: "Apply in person at any branch and get a decision quickly.",
                },
                { icon: DollarSign, title: "Competitive Rates", desc: "Low interest rates starting from 3.99% APR." },
                {
                  icon: Percent,
                  title: "No Credit Impact",
                  desc: "Get pre-qualified without affecting your credit score.",
                },
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

        {/* Loan Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Auto Financing Options</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80"
                    alt="New car"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">New Car Loans</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Rates as low as 3.99% APR",
                      "Terms from 24 to 72 months",
                      "Finance up to 100% of MSRP",
                      "No prepayment penalties",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us">
                    <Button className="w-full">Get Pre-Qualified</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80"
                    alt="Used car"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Used Car Loans</h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Rates as low as 4.49% APR",
                      "Vehicles up to 7 years old",
                      "Flexible down payment options",
                      "Quick approval process",
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact-us">
                    <Button className="w-full">Get Pre-Qualified</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Finance Your Dream Car?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Contact us or visit a branch to get started.</p>
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
