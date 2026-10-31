import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import { CreditCard, Smartphone, Shield, Phone, ArrowRight, PiggyBank, Zap } from "lucide-react"
import Link from "next/link"

export default function CheckingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">Open a Checking Account</h1>
              <p className="text-xl mb-8">Experience hassle-free banking with our feature-packed checking accounts.</p>
              <Link href="/contact-us">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us to Open an Account
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-6 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-amber-800">
                <strong>In-Person Account Opening:</strong> For security purposes, checking accounts must be opened in
                person at one of our branches. Please bring a valid ID and proof of address.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Checking Account?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2" />
                    No Monthly Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Enjoy fee-free checking with no minimum balance requirements. Keep more of your money where it
                    belongs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="mr-2" />
                    Mobile Banking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Manage your account on-the-go with our user-friendly mobile app. Deposit checks, pay bills, and
                    transfer money anytime.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2" />
                    Fraud Protection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rest easy with our advanced fraud monitoring and protection. Real-time alerts keep you informed of
                    account activity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Benefits</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Free ATM Access</h3>
                </div>
                <p className="text-gray-600">
                  Access your money at thousands of ATMs nationwide with no fees. We also reimburse up to €10/month in
                  other ATM fees.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <PiggyBank className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Overdraft Protection</h3>
                </div>
                <p className="text-gray-600">
                  Link to your savings account for automatic overdraft protection. Avoid declined transactions and
                  overdraft fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Banking Smarter?</h2>
            <p className="text-xl mb-8">Visit a branch to open your account and start enjoying the benefits.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact-us">
                <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Sign In to Existing Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Explore More Banking Options</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <Link href="/banking" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">Savings Accounts</h3>
                    <p className="text-sm text-gray-600 mt-2">Grow your money with high APY</p>
                  </div>
                </Link>
                <Link href="/credit-cards" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">Credit Cards</h3>
                    <p className="text-sm text-gray-600 mt-2">Earn rewards on purchases</p>
                  </div>
                </Link>
                <Link href="/auto" className="group">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600">Auto Loans</h3>
                    <p className="text-sm text-gray-600 mt-2">Finance your next vehicle</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
