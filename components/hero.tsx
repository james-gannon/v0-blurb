"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, ArrowRight } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

const trackCTAClick = (eventName: string, location: string, additionalParams?: Record<string, string>) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    ;(window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: location,
      button_location: location,
      ...additionalParams,
    })
  }
}

export function Hero() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState("")
  const [transactionalConsent, setTransactionalConsent] = useState(false)
  const [promotionalConsent, setPromotionalConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const scrollToHowItWorks = () => {
    trackCTAClick("click_see_how_it_works", "hero_section")
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    trackCTAClick("form_submit_early_access", "hero_form", {
      user_role: role,
      transactional_consent: String(transactionalConsent),
      promotional_consent: String(promotionalConsent),
    })

    // Simulate form submission - replace with actual Tally embed or API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    router.push("/thanks")
  }

  const benefits = [
    "Business phone + SMS built for wholesalers",
    "AI ranks leads by urgency and motivation",
    "Instant call summaries",
    "Unified team inbox",
  ]

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left - Copy */}
          <div className="space-y-8">
            <div className="space-y-6 opacity-0 animate-fade-up">
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-normal leading-[0.95] tracking-tight text-foreground">
                AI Sucks.
                <br />
                <span className="text-muted-foreground">(At Being Human.)</span>
              </h1>

              <p className="text-xl sm:text-2xl font-serif text-foreground/80 leading-snug max-w-xl">
                But it's incredible at helping real estate wholesalers never lose another motivated seller.
              </p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed opacity-0 animate-fade-up delay-100">
              WholesalerPhone is an AI-powered business phone and SMS inbox made specifically for wholesalers and
              acquisitions teams.
            </p>

            <ul className="space-y-3 opacity-0 animate-fade-up delay-200">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 text-base px-8 h-14"
                onClick={() => {
                  trackCTAClick("click_early_access_cta", "hero_primary_button")
                  document.getElementById("early-access-form")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-14 border-border hover:bg-muted bg-transparent"
                onClick={scrollToHowItWorks}
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div
            id="early-access-form"
            className="bg-card border border-border p-8 lg:p-10 opacity-0 animate-fade-up delay-200"
          >
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-2">Get Early Access</h2>
                <p className="text-muted-foreground text-sm">Join the waitlist. Be first when we launch.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone <span className="text-muted-foreground font-normal">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-12 bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={role} onValueChange={setRole} required>
                    <SelectTrigger id="role" className="h-12 bg-background">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solo-wholesaler">Solo Wholesaler</SelectItem>
                      <SelectItem value="acq-rep">Acquisitions Rep</SelectItem>
                      <SelectItem value="acq-manager">Acquisitions Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4 pt-2">
                  <label htmlFor="transactional-consent" className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      id="transactional-consent"
                      checked={transactionalConsent}
                      onCheckedChange={(checked) => setTransactionalConsent(checked as boolean)}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      You agree to receive automated transactional messages with varying frequency from PorchLight Home Offers LLC.
                      Txt and data rates may apply. Reply STOP to end. Text HELP for help. Click for{" "}
                      <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
                        Terms of Service
                      </Link>
                      ,{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>

                  <label htmlFor="promotional-consent" className="flex items-start gap-3 cursor-pointer">
                    <Checkbox
                      id="promotional-consent"
                      checked={promotionalConsent}
                      onCheckedChange={(checked) => setPromotionalConsent(checked as boolean)}
                      className="mt-0.5 flex-shrink-0"
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      You agree to receive automated promotional messages with varying frequency from PorchLight Home Offers LLC. Txt
                      and data rates may apply. Reply STOP to end. Text HELP for help. Click for{" "}
                      <Link href="/terms" className="underline underline-offset-2 hover:text-foreground">
                        Terms of Service
                      </Link>
                      ,{" "}
                      <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                        Privacy Policy
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Early Access"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime. We respect your inbox.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
