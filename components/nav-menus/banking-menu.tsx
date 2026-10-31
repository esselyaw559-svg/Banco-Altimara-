import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Building, PiggyBank, CreditCard } from "lucide-react"

export default function BankingMenu() {
  return (
    <Card className="absolute top-full left-0 w-full max-w-screen-xl mx-auto bg-white shadow-lg rounded-b-lg z-50">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Banking Solutions</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Building className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Checking Accounts</p>
                  <p className="text-sm text-gray-600">Fee-free checking options</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <PiggyBank className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">Savings Accounts</p>
                  <p className="text-sm text-gray-600">High-yield savings options</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">CDs & IRAs</p>
                  <p className="text-sm text-gray-600">Long-term savings solutions</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Tools & Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Find ATMs & Branches
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Direct Deposit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Mobile Banking
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help Center</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-600 hover:underline">
                  Security Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
