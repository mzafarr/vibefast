"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DollarSign, TrendingUp, Users } from "lucide-react"

const mockReferrals = [
  { name: "michael k.", avatar: "MK", amount: 99, status: "Conversion", date: "December 12, 2023" },
  { name: "Mustapha", avatar: "MP", amount: 99, status: "Conversion", date: "December 10, 2023" },
  { name: "Clarence", avatar: "CL", amount: 99, status: "Conversion", date: "December 10, 2023" },
  { name: "Logan", avatar: "LG", amount: 99, status: "Conversion", date: "December 10, 2023" },
]

export function AffiliateHeroSection() {
  const [referralCount, setReferralCount] = React.useState([24])
  const earningsPerReferral = 99
  const totalEarnings = referralCount[0] * earningsPerReferral

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
        {/* Left side - Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Grow your revenue with{" "}
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                affiliate commissions
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl">
              VibeFast is the #1 React Native boilerplate to ship mobile apps in days, not weeks. Loved by{" "}
              <span className="font-semibold text-foreground">1,000+ developers</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 rounded-full">
                <DollarSign className="w-4 h-4" />
                <span className="font-semibold">$99 per sale</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">High conversion rate</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span className="font-semibold">Lifetime cookies</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold text-lg py-6 px-8 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Become An Affiliate
            </Button>
          </div>
        </div>

        {/* Right side - Earnings Dashboard */}
        <div className="space-y-6">
          {/* Referrals Dashboard */}
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 border-b">
                <h3 className="font-semibold text-foreground">Referrals</h3>
              </div>

              <div className="p-4 space-y-4 max-h-80 overflow-y-auto">
                <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                  <span>Customer</span>
                  <span>Affiliate</span>
                  <span>State</span>
                  <span className="text-right">First click</span>
                </div>

                {mockReferrals.map((referral, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 items-center py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {referral.avatar}
                      </div>
                      <span className="text-sm text-foreground">{referral.name}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        RO
                      </div>
                      <span className="text-sm text-muted-foreground">Rafeh Qazi</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{referral.status}</Badge>
                      <span className="text-green-600 font-bold text-lg">+ ${referral.amount}</span>
                      <span className="text-xl">🤑</span>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">{referral.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Earnings Calculator */}
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
                You can make{" "}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  ${totalEarnings.toLocaleString()}
                </span>{" "}
                today
              </h3>
              <p className="text-muted-foreground">
                And you would help <span className="font-semibold text-foreground">{referralCount[0]} developers</span>{" "}
                quit their 9-5 and build their dreams
              </p>
            </div>

            {/* Slider */}
            <div className="space-y-4 max-w-md mx-auto">
              <Slider
                value={referralCount}
                onValueChange={setReferralCount}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 referral</span>
                <div className="text-center">
                  <div className="font-bold text-2xl text-foreground">{referralCount[0]}</div>
                  <div>referrals</div>
                </div>
                <span>100 referrals</span>
              </div>
            </div>

            <div className="text-sm text-muted-foreground italic">"Rafeh made $300 in 24 hours"</div>
          </div>
        </div>
      </div>
    </section>
  )
}
