"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  PiggyBank,
  Car,
  CreditCard,
  Phone,
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Link from "next/link"
import { useLoadingTransition } from "@/components/loading-transition"

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { handleTransition } = useLoadingTransition()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleNavigation = async (path: string) => {
    setIsLoading(true)
    await handleTransition(path)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - simplified colors */}
        <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=80"
              alt="Happy family managing finances"
              fill
              className="object-cover"
              priority
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className={`space-y-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white border border-white/20">
                  <Star className="h-4 w-4 text-white fill-white" />
                  <span className="text-sm font-medium">Trusted by 500,000+ customers</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                  Banking That Puts You First
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl">
                  Experience personalized banking with Banco Altamira. Over 70 years of trusted service, helping
                  families and businesses achieve their financial dreams.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link href="/contact-us">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white hover:bg-gray-100 text-gray-900 font-semibold"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us Today
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-white text-white hover:bg-white/10 bg-transparent font-semibold"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 pt-4">
                  <div className="flex -space-x-2">
                    <Image
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                      alt="Customer"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                      alt="Customer"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
                      alt="Customer"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                    <Image
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                      alt="Customer"
                      width={36}
                      height={36}
                      className="rounded-full border-2 border-white"
                    />
                  </div>
                  <div className="text-white">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="h-4 w-4 text-white fill-white" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80">4.9/5 from 10,000+ reviews</p>
                  </div>
                </div>
              </div>

              <div className={`hidden lg:block ${isVisible ? "animate-fade-in-up delay-200" : "opacity-0"}`}>
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                  <div className="w-[280px] h-[180px] relative mx-auto mb-6">
                    <Image
                      src="/images/whatsapp-image-2025-12-17-at-10.png"
                      alt="Banco Altamira Logo"
                      fill
                      className="object-contain"
                      sizes="280px"
                    />
                  </div>
                  <div className="space-y-3 text-white">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>No hidden fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>24/7 Online banking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-white" />
                      <span>Insured deposits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - clean design */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">70+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Years of Service</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">500K+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">€10B+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Assets Managed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-foreground">50+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Branch Locations</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - minimal colors */}
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                    alt="Professional banker helping customer"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl shadow-md p-4 sm:p-6 hidden sm:block border border-gray-100">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-gray-100 rounded-full p-2 sm:p-3">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-foreground">4.5% APY</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">On savings</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Welcome to Banco Altamira
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  For over 70 years, we've been helping individuals and businesses achieve their financial goals. As
                  your trusted financial partner, we offer personalized banking solutions with the security and service
                  you deserve.
                </p>
                <p className="text-muted-foreground">
                  Whether you're looking to open a new account, apply for a loan, or manage your investments, our team
                  is ready to assist you at any of our branches.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-lg p-2 flex-shrink-0">
                      <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">Secure Banking</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Your money is protected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 rounded-lg p-2 flex-shrink-0">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">Personal Service</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Dedicated support team</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Link href="/login">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto font-semibold bg-transparent">
                      Sign In to Online Banking
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact-us">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 font-semibold">
                      <Phone className="mr-2 h-5 w-5" />
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - simplified */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need for Your Financial Journey
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                From everyday banking to major financial decisions, we've got you covered with comprehensive solutions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="card-hover border border-gray-200 overflow-hidden">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80"
                    alt="Credit cards and money"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full p-2.5">
                      <CreditCard className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Credit Cards</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Earn rewards, cashback, and enjoy exclusive perks with our range of credit cards designed for your
                    lifestyle.
                  </p>
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0 font-semibold"
                    onClick={() => handleNavigation("/credit-cards")}
                  >
                    Explore Credit Cards
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border border-gray-200 overflow-hidden">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=600&q=80"
                    alt="Piggy bank savings"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full p-2.5">
                      <PiggyBank className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Savings & Banking</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Grow your savings with competitive interest rates. No fees, no minimums, fully insured deposits.
                  </p>
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0 font-semibold"
                    onClick={() => handleNavigation("/banking")}
                  >
                    Explore Banking
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-hover border border-gray-200 overflow-hidden sm:col-span-2 lg:col-span-1">
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80"
                    alt="Car financing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white rounded-full p-2.5">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Auto Financing</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Get competitive rates starting from 3.99% APR. Pre-qualify without affecting your credit score.
                  </p>
                  <Button
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0 font-semibold"
                    onClick={() => handleNavigation("/auto")}
                  >
                    Start Shopping
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Business Section - simplified */}
        <section className="py-16 sm:py-20 relative overflow-hidden bg-gray-900">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Solutions That Scale With Your Business</h2>
                <p className="text-base sm:text-lg text-white/80">
                  From startups to established enterprises, we provide comprehensive banking solutions to help your
                  business thrive. Our dedicated team understands your unique challenges.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Business Banking</h4>
                    <p className="text-xs sm:text-sm text-white/60">Streamlined accounts</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Lending Solutions</h4>
                    <p className="text-xs sm:text-sm text-white/60">Flexible financing</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                  <Link href="/business">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 font-semibold"
                    >
                      Explore Business Solutions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&q=80"
                    alt="Business meeting"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - clean */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit one of our branches to open an account or contact us to learn more about our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-primary hover:bg-primary/90 font-semibold text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="font-semibold text-lg px-8 bg-transparent">
                  Sign In
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
