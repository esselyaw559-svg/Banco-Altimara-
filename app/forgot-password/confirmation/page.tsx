import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PasswordResetConfirmationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0077BE]">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-center h-20">
            <Link href="/" className="flex items-center">
              <div className="relative w-40 h-16 sm:w-48 sm:h-20">
                <Image
                  src="/images/whatsapp-image-2025-12-17-at-10.png"
                  alt="Banco Altamira"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 160px, 192px"
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Password Reset Sent</CardTitle>
            <CardDescription className="text-center">
              A password reset link has been sent to your email address.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-center">
            <p>Please check your email and follow the instructions to reset your password.</p>
            <p>If you don't receive the email in a few minutes, please check your spam folder.</p>
            <Link href="/login">
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Back to Sign In</Button>
            </Link>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
