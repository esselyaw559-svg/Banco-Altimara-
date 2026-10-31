"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { TrendingUp, Home } from "lucide-react"

const mineralsData = [
  { year: "2009", value: 120000 },
  { year: "2011", value: 150000 },
  { year: "2013", value: 180000 },
  { year: "2015", value: 220000 },
  { year: "2017", value: 280000 },
  { year: "2019", value: 320000 },
  { year: "2021", value: 380000 },
  { year: "2023", value: 420000 },
  { year: "2025", value: 450000 },
]

const homeData = [
  { year: "2018", value: 180000 },
  { year: "2019", value: 195000 },
  { year: "2020", value: 210000 },
  { year: "2021", value: 220000 },
  { year: "2022", value: 230000 },
  { year: "2023", value: 240000 },
  { year: "2024", value: 245000 },
  { year: "2025", value: 250000 },
]

const formatEuro = (value: number) => {
  return `€${(value / 1000).toFixed(0)}K`
}

export default function InvestmentChart() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="overflow-hidden border border-gray-200 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-base text-gray-800">
            <div className="p-2 bg-green-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-green-600" />
            </div>
            Minerals Investment (2009-2025)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mineralsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
              <YAxis tickFormatter={formatEuro} stroke="#6b7280" fontSize={12} />
              <Tooltip
                formatter={(value: number) => [`€${value.toLocaleString("en-US")}`, "Value"]}
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ fill: "#16a34a", r: 4 }}
                name="Minerals"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border border-gray-200 shadow-sm">
        <CardHeader className="bg-white border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-base text-gray-800">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Home className="h-4 w-4 text-blue-600" />
            </div>
            Personal Home (2018-2025)
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={homeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="year" stroke="#6b7280" fontSize={12} />
              <YAxis tickFormatter={formatEuro} stroke="#6b7280" fontSize={12} />
              <Tooltip
                formatter={(value: number) => [`€${value.toLocaleString("en-US")}`, "Value"]}
                contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ fill: "#2563eb", r: 4 }}
                name="Personal Home"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
