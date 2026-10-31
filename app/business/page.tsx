"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { Phone, ArrowRight, Users, TrendingUp, Shield, Loader2 } from "lucide-react"

export default function BusinessPage() {
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
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
              alt="Business professionals"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Grow Your Business With Confidence
              </h1>
              <p className="text-lg text-white/90">
                Get the products and services you need to do business all in one place.
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
                    Business Login
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Solutions for Your Business
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80"
                    alt="Business credit cards"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Business Cards</h3>
                  <p className="text-muted-foreground mb-4">
                    Earn unlimited rewards with every card. Plus, enjoy the added perks and tools you need.
                  </p>
                  <Link
                    href="/credit-cards"
                    className="text-primary hover:text-primary/80 font-semibold flex items-center"
                  >
                    Explore Business Cards <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    alt="Business banking"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">Business Banking</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore tailored checking, savings, and lending options for any stage of business.
                  </p>
                  <Link href="/banking" className="text-primary hover:text-primary/80 font-semibold flex items-center">
                    View Banking Options <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Why Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Dedicated Support",
                  desc: "Personalized assistance from business banking specialists.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth Solutions",
                  desc: "Access credit lines and business loans to fuel growth.",
                },
                { icon: Shield, title: "Secure Banking", desc: "Enterprise-grade security protects your finances." },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 p-3 rounded-full w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Contact our business banking team or visit a branch to discuss your needs.
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
