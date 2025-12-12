import { X, Check } from "lucide-react"

export function Pain() {
  const before = [
    "Missed calls equal lost deals.",
    "Leads scattered across apps.",
    "No unified follow-up.",
    "CRM not updated.",
  ]

  const after = [
    "Calls + SMS unified automatically.",
    "AI prioritizes sellers.",
    "Instant summaries for every call.",
    "Predictable follow-up pipeline.",
  ]

  return (
    <section id="pain" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">The real problem.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            You're not losing deals because you're bad at sales. You're losing them because you're drowning in chaos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before */}
          <div className="bg-foreground text-background p-8 lg:p-12">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-background/60 mb-6">
              Before WholesalerPhone
            </span>
            <ul className="space-y-5">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1">
                    <X className="w-5 h-5 text-red-400" />
                  </span>
                  <span className="text-lg text-background/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-card border border-border p-8 lg:p-12">
            <span className="inline-block text-xs tracking-[0.2em] uppercase text-primary mb-6">
              After WholesalerPhone
            </span>
            <ul className="space-y-5">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </span>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
