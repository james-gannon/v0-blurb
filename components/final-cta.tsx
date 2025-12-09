"use client"

import { Button } from "@/components/ui/button"

export function FinalCTA() {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-8">One last thing</p>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal leading-[1.1] tracking-tight text-foreground mb-8">
          AI isn't going to
          <br />
          <span className="italic">save your business.</span>
        </h2>

        <p className="text-xl text-foreground mb-4 max-w-2xl mx-auto font-medium">You are.</p>

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          AI is just a tool. Like email. Like your phone. The agents who win aren't the ones with the fanciest tech —
          they're the ones who use it to be more human, not less.
        </p>

        <div className="bg-muted/50 p-8 max-w-lg mx-auto mb-12">
          <p className="text-sm text-muted-foreground mb-4">It doesn't replace the human touch.</p>
          <p className="text-lg text-foreground font-medium">It frees you up to give more of it.</p>
        </div>

        <Button
          size="lg"
          className="bg-foreground text-background hover:bg-foreground/90 text-base px-12 h-14"
          onClick={scrollToPricing}
        >
          Let's do this
        </Button>

        <p className="text-sm text-muted-foreground mt-8 italic">
          "Finally, an AI tool that doesn't make me feel replaceable." — An actual human agent
        </p>
      </div>
    </section>
  )
}
