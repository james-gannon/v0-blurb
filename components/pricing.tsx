"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Check } from "lucide-react"

export function Pricing() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - pricing philosophy */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Pricing</p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-foreground mb-8">
              One price.
              <br />
              <span className="italic">No games.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We're not going to nickel-and-dime you with "per seat" pricing or lock features behind enterprise tiers.
              </p>
              <p>One price. Everything included. If you're a solo agent or a team of 50, same deal.</p>
              <p className="text-foreground">
                We make money when you close more deals. Funny how that aligns incentives, huh?
              </p>
            </div>
          </div>

          {/* Right - the actual price */}
          <div>
            <div className="border border-border p-8 lg:p-12">
              <div className="mb-8">
                <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">Early access pricing</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl lg:text-7xl font-serif text-foreground">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="line-through">$199/month</span>
                  <span className="text-primary ml-2">50% off for early adopters</span>
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Unlimited team members",
                  "AI lead prioritization",
                  "Automated follow-ups",
                  "Team dashboard",
                  "All integrations",
                  "Human support (yes, actual humans)",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base"
                onClick={() => setShowModal(true)}
              >
                Lock in early access price
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                30-day money-back guarantee. No contracts. Cancel whenever.
              </p>
            </div>

            <p className="text-sm text-muted-foreground mt-6 italic">
              *Price goes up to $199 after launch. Lock it in now and keep it forever.
            </p>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg bg-background p-8 lg:p-12 border border-border">
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Almost there</p>
              <h3 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Let's get you in.</h3>
              <p className="text-muted-foreground">
                We're rolling out access in batches. Drop your info and we'll get you set up within 48 hours.
              </p>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                alert("You're in! Check your email for next steps.")
                setShowModal(false)
              }}
            >
              <div>
                <label className="text-sm text-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-foreground mb-2 block">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="text-sm text-foreground mb-2 block">Team size</label>
                <select className="w-full px-4 py-3 bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="1">Just me</option>
                  <option value="2-5">2-5 people</option>
                  <option value="6-15">6-15 people</option>
                  <option value="16+">16+ people</option>
                </select>
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-base"
              >
                Get early access
              </Button>
            </form>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
