"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Link from "next/link"

export default function ContactUsPage() {
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
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1920&q=80"
              alt="Customer service team"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className={`max-w-2xl mx-auto text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Get in Touch</h1>
              <p className="text-lg text-white/90 mb-8">
                Ready to open an account? Visit us in person at any of our branches.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:+34632080758">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Button>
                </a>
                <a href="mailto:altamirabanco505@gmail.com">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 bg-transparent"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Phone Support</h3>
                        <a href="tel:+34632080758" className="text-xl font-mono text-primary hover:text-primary/80">
                          +34 632 080 758
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Call us for immediate assistance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                        <a
                          href="mailto:altamirabanco505@gmail.com"
                          className="text-primary hover:text-primary/80 break-all"
                        >
                          altamirabanco505@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                        <p className="text-foreground">Monday - Friday</p>
                        <p className="text-lg font-semibold text-primary">9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday - Sunday: Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Main Branch</h3>
                        <p className="text-foreground">Paseo de Gracia 8-10, floor 7</p>
                        <p className="text-lg font-semibold text-primary">08007 Barcelona, Spain</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Already Have an Account?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Access your account online to manage your finances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Sign In to Online Banking
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/banking">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
