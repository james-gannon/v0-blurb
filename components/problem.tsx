"use client"

export function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-4xl">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">Our philosophy</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight text-foreground mb-8">
            The AI hype is <span className="line-through">annoying</span> <span className="italic">dangerous.</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Every company wants to "AI-power" your job. Replace the human. Automate everything. They're building tools
            that make AI the star and you the assistant.
            <span className="text-foreground font-medium"> We're doing the opposite.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - what AI gets wrong */}
          <div>
            <div className="bg-muted/50 p-8 lg:p-12 mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-destructive mb-6">What AI actually sucks at</p>
              <ul className="space-y-4">
                {[
                  "Reading between the lines of what a client really wants",
                  "Knowing when to push and when to back off",
                  "Building the trust that closes $500k deals",
                  "That gut feeling when someone's a serious buyer",
                  "Making people feel heard, not processed",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-destructive mt-1">✕</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground italic">
              This is the stuff that actually closes deals. The human stuff. Your stuff.
            </p>
          </div>

          {/* Right - what you're stuck doing */}
          <div>
            <div className="bg-foreground text-background p-8 lg:p-12 mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-6">
                What you're stuck doing instead
              </p>
              <ul className="space-y-4">
                {[
                  "Scrolling through 47 unread texts to find the hot lead",
                  "Copy-pasting the same follow-up message (again)",
                  "Manually logging calls while driving between showings",
                  "Playing phone tag with someone who just wanted an address",
                  "Losing track of who needs what and when",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1">→</span>
                    <span className="text-background/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">This is the stuff AI should do.</span> The boring,
              repetitive, soul-crushing admin work. So you can do more human stuff.
            </p>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <p className="font-serif text-3xl lg:text-4xl text-foreground leading-tight">
                So we built
                <br />
                <span className="text-primary italic">the flip.</span>
              </p>
            </div>
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Blurb doesn't try to be you. It handles the stuff that's beneath you — the sorting, the prioritizing,
                the instant responses, the follow-up scheduling — so you can spend your time on the human moments that
                actually close deals.
              </p>
              <p className="text-lg text-foreground font-medium">You're the star. AI is just the stagehand.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
