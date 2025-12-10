"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export default function ThanksPage() {
  const [submitted, setSubmitted] = useState(false)
  const [deals, setDeals] = useState("")
  const [teamSize, setTeamSize] = useState("")
  const [plan, setPlan] = useState("")
  const [readiness, setReadiness] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "conversion_signup_complete", {
        event_category: "conversion",
        event_label: "Early Access Signup Complete",
        page_path: "/thanks",
      })
    }
  }, [])

  const handleOptionalSubmit = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "survey_submit_qualification", {
        event_category: "engagement",
        event_label: "Post-Signup Survey Completed",
        deals_closed: deals,
        team_size: teamSize,
        plan_interest: plan,
        readiness_timeframe: readiness,
      })
    }
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="space-y-4">
          <CheckCircle className="w-16 h-16 text-primary mx-auto" />
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">You're on the list.</h1>
          <p className="text-muted-foreground text-lg">
            We'll reach out soon with early access details. In the meantime, help us serve you better.
          </p>
        </div>

        {!submitted ? (
          <div className="bg-card border border-border p-8 text-left space-y-6">
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              Optional — Help us prioritize your access
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deals">Deals closed in last 12 months</Label>
                <Select value={deals} onValueChange={setDeals}>
                  <SelectTrigger id="deals">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-5">0–5 deals</SelectItem>
                    <SelectItem value="6-15">6–15 deals</SelectItem>
                    <SelectItem value="16-30">16–30 deals</SelectItem>
                    <SelectItem value="30+">30+ deals</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="team-size">Team size</Label>
                <Select value={teamSize} onValueChange={setTeamSize}>
                  <SelectTrigger id="team-size">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Just me</SelectItem>
                    <SelectItem value="2-5">2–5 people</SelectItem>
                    <SelectItem value="6-10">6–10 people</SelectItem>
                    <SelectItem value="10+">10+ people</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="plan">Plan you're likely to choose</Label>
                <Select value={plan} onValueChange={setPlan}>
                  <SelectTrigger id="plan">
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo — $99/mo</SelectItem>
                    <SelectItem value="team">Team — from $299/mo</SelectItem>
                    <SelectItem value="unsure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="readiness">When are you ready to start?</Label>
                <Select value={readiness} onValueChange={setReadiness}>
                  <SelectTrigger id="readiness">
                    <SelectValue placeholder="Select timeframe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Now</SelectItem>
                    <SelectItem value="30-days">Within 30 days</SelectItem>
                    <SelectItem value="1-3-months">1–3 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button className="w-full" onClick={handleOptionalSubmit}>
              Submit
            </Button>
          </div>
        ) : (
          <div className="bg-card border border-border p-8">
            <p className="text-foreground text-lg">Thanks! We've got your info.</p>
          </div>
        )}

        <Link href="/" className="inline-block text-muted-foreground hover:text-foreground underline text-sm">
          ← Back to home
        </Link>
      </div>
    </main>
  )
}
