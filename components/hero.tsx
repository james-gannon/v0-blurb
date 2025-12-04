"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          {/* Left - giant headline */}
          <div className="lg:col-span-8 lg:pr-12">
            <div className="mb-8 opacity-0 animate-fade-up">
              <span className="inline-block px-4 py-2 bg-foreground text-background text-xs tracking-[0.2em] uppercase font-medium">
                Hot take
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal leading-[0.9] tracking-tight text-foreground opacity-0 animate-fade-up delay-100">
              AI sucks.
              <br />
              <span className="text-muted-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                (at being human.)
              </span>
            </h1>

            <p className="mt-8 text-xl sm:text-2xl lg:text-3xl font-serif text-foreground/80 leading-snug opacity-0 animate-fade-up delay-200 max-w-2xl">
              So we built a tool that doesn't try to replace you.
              <br />
              <span className="italic text-primary">It just makes you superhuman.</span>
            </p>
          </div>

          {/* Right - the philosophy */}
          <div className="lg:col-span-4 lg:pt-32 flex flex-col justify-end">
            <div className="border-l-2 border-primary pl-6 opacity-0 animate-fade-up delay-300">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Every "AI tool" wants to automate you out of existence.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">We think that's stupid.</p>
              <p className="text-muted-foreground leading-relaxed">
                You're the closer. The relationship builder. The one clients actually trust. AI should handle the
                busywork so you can do more of <span className="text-foreground italic">that.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 opacity-0 animate-fade-up delay-400">
          <div className="max-w-lg">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Blurb is your unfair advantage.</span> Instant responses,
              prioritized leads, zero robotic vibes. You stay human. You just move faster.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-14 group"
            onClick={scrollToPricing}
          >
            Make me superhuman
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
