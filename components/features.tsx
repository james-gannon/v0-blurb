"use client"

import { useState } from "react"

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: "inbox",
      label: "01",
      title: "AI sorts. You decide.",
      description:
        "Every lead, ranked by who's actually ready to buy. Not alphabetically. Not by who texted last. By who needs YOU right now.",
      detail: "The AI reads intent and timing — but it doesn't make the call. You do. Because you know your market.",
      humanWin: "You spend time on hot leads, not cold ones.",
    },
    {
      id: "responses",
      label: "02",
      title: "Instant replies. Your voice.",
      description:
        "When a lead texts at 2am, they get a response at 2am. One that sounds like you wrote it. Because you basically did.",
      detail: "We train on YOUR messages. Your tone. Your style. The AI sounds like you on a good day — not a robot.",
      humanWin: "You never lose a lead to a faster agent. Ever.",
    },
    {
      id: "team",
      label: "03",
      title: "Your whole team. One screen.",
      description: "See every conversation. Who's crushing it. Who needs help. What's falling through the cracks.",
      detail: "For team leads who are tired of asking 'did anyone follow up?' in the group chat.",
      humanWin: "You coach your team better. They close more deals.",
    },
    {
      id: "handoff",
      label: "04",
      title: "Seamless human handoff.",
      description:
        "The AI warms them up. Qualifies them. Then hands off to you at the perfect moment — with full context.",
      detail: "No awkward 'let me transfer you.' No lost information. Just a warm lead, ready for the human touch.",
      humanWin: "You walk into conversations already winning.",
    },
  ]

  return (
    <section id="features" className="py-24 lg:py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">How it works</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-foreground max-w-4xl">
            AI does the grunt work.
            <br />
            <span className="text-muted-foreground">You do the human work.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Feature list */}
          <div className="space-y-0">
            {features.map((feature, i) => (
              <div
                key={feature.id}
                className={`border-t border-border py-6 cursor-pointer transition-all ${
                  activeFeature === i ? "bg-background -mx-6 px-6" : ""
                }`}
                onClick={() => setActiveFeature(i)}
                onKeyDown={(e) => e.key === "Enter" && setActiveFeature(i)}
                tabIndex={0}
                role="button"
                aria-pressed={activeFeature === i}
              >
                <div className="flex items-start gap-6">
                  <span className="text-xs text-muted-foreground font-mono">{feature.label}</span>
                  <div className="flex-1">
                    <h3
                      className={`text-xl lg:text-2xl font-medium mb-2 transition-colors ${
                        activeFeature === i ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    {activeFeature === i && (
                      <div className="space-y-3 animate-fade-up">
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        <p className="text-sm text-muted-foreground/70 italic">{feature.detail}</p>
                        <div className="mt-4 pt-4 border-t border-border">
                          <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">The human win</p>
                          <p className="text-foreground font-medium">{feature.humanWin}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="border-t border-border" />
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-full aspect-square bg-foreground text-background p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative element */}
              <div className="absolute top-4 right-4 text-8xl font-serif text-background/5">
                {features[activeFeature].label}
              </div>

              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">AI handles this</p>
                <p className="font-serif text-3xl leading-tight">{features[activeFeature].title}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                    AI
                  </div>
                  <div className="h-0.5 flex-1 bg-background/20" />
                  <div className="w-8 h-8 rounded-full bg-background text-foreground flex items-center justify-center text-xs font-bold">
                    YOU
                  </div>
                </div>
                <p className="text-sm text-background/60">
                  AI does the boring stuff → You do the human stuff → Deals close faster
                </p>
              </div>

              <div className="pt-4 border-t border-background/20">
                <p className="text-sm text-primary font-medium">{features[activeFeature].humanWin}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
