"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const trackPlanClick = (planName: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    // Fire a specific event for each plan
    ;(window as any).gtag("event", `click_choose_${planName.toLowerCase()}`, {
      event_category: "pricing",
      event_label: `${planName} Plan Selected`,
      plan_name: planName,
      plan_price: planName === "Solo" ? "$99/mo" : "$299/mo",
    })
  }
}

const scrollToFormWithPlan = (plan: string) => {
  trackPlanClick(plan)
  const form = document.getElementById("early-access-form")
  if (form) {
    form.scrollIntoView({ behavior: "smooth" })
  }
}

export function Pricing() {
  const plans = [
    {
      name: "Solo",
      price: "$99",
      period: "/mo",
      description: "Perfect for solo wholesalers.",
      features: ["1 user", "1 local phone number", "2,000 minutes", "3,000 SMS", "AI scoring + summaries"],
      cta: "Choose Solo",
      featured: false,
    },
    {
      name: "Team",
      price: "$299",
      period: "/mo",
      pricePrefix: "from",
      description: "For acquisitions teams that want to dominate.",
      features: [
        "Up to 5 users",
        "Up to 3 phone numbers",
        "5,000 minutes",
        "10,000 SMS",
        "Team dashboard + inbox",
        "Priority onboarding",
      ],
      cta: "Choose Team",
      featured: true,
    },
  ]

  return (
    <section id="pricing" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Pricing</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-foreground mb-4">
            Founder-only early pricing.
          </h2>
          <p className="text-muted-foreground text-lg">Designed for serious wholesalers.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 lg:p-10 ${
                plan.featured ? "bg-foreground text-background border-foreground" : "bg-card border border-border"
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-xl font-medium mb-2 ${plan.featured ? "text-background" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.pricePrefix && (
                    <span className={`text-sm ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
                      {plan.pricePrefix}
                    </span>
                  )}
                  <span className={`text-5xl font-serif ${plan.featured ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${plan.featured ? "text-primary" : "text-primary"}`} />
                    <span className={plan.featured ? "text-background" : "text-foreground"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-14 text-base ${
                  plan.featured
                    ? "bg-background text-foreground hover:bg-background/90"
                    : "bg-foreground text-background hover:bg-foreground/90"
                }`}
                onClick={() => scrollToFormWithPlan(plan.name.toLowerCase())}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          30-day money-back guarantee. No contracts. Cancel whenever.
        </p>
      </div>
    </section>
  )
}
