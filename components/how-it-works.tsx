export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect your number",
      time: "2 minutes",
      description: "Your existing number. No changes. No new apps for clients to download. Just... works.",
    },
    {
      number: "02",
      title: "AI learns your voice",
      time: "~24 hours",
      description: "It reads your past messages. Studies your style. Learns your market. Gets scary accurate.",
    },
    {
      number: "03",
      title: "Start closing more",
      time: "Day 2",
      description: "Hot leads surfaced. Follow-ups automated. You focus on what you're actually good at: selling.",
    },
  ]

  return (
    <section id="how" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left - sticky header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">How it works</p>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-foreground mb-6">
                Stupid
                <br />
                <span className="italic">simple.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We hate complicated onboarding as much as you do. So we made it embarrassingly easy.
              </p>
            </div>
          </div>

          {/* Right - steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <div key={i} className="border-t border-border py-12 lg:py-16 group">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex items-center gap-4 sm:w-32 shrink-0">
                      <span className="font-mono text-sm text-muted-foreground">{step.number}</span>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1">{step.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
