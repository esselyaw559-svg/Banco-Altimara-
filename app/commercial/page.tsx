"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import { Building, DollarSign, BarChart, Globe, Phone, CheckCircle, Loader2, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CommercialPage() {
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
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt="Corporate skyline"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Enterprise Financial Solutions
              </h1>
              <p className="text-lg text-white/90">
                Empowering businesses with innovative financial solutions and expert guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact-us">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact a Relationship Manager
                  </Button>
                </Link>
                <Link href="/login">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    Commercial Login
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
              Our Commercial Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Building,
                  title: "Commercial Banking",
                  desc: "Comprehensive banking solutions tailored for businesses.",
                },
                { icon: DollarSign, title: "Commercial Lending", desc: "Flexible financing including term loans." },
                { icon: BarChart, title: "Treasury Management", desc: "Optimize cash flow with advanced solutions." },
                { icon: Globe, title: "Global Banking", desc: "International banking services." },
              ].map((service, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Industries We Serve</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Healthcare",
                  features: ["Equipment financing", "Practice acquisition loans", "Working capital"],
                },
                { title: "Technology", features: ["Venture debt", "Growth financing", "M&A advisory"] },
                { title: "Manufacturing", features: ["Supply chain financing", "Equipment loans", "Export financing"] },
              ].map((industry, index) => (
                <Card key={index} className="border border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">{industry.title}</h3>
                    <ul className="space-y-2">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Our team of experts is here to help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Consultation
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
