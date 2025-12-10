export function FounderNote() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Headshot placeholder */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-muted border border-border overflow-hidden">
              <img
                src="/professional-headshot-founder-male-entrepreneur.jpg"
                alt="James, Founder of WholesalerPhone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="flex-1">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-6">From the founder</p>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-snug mb-6">
              "I built WholesalerPhone so no wholesaler ever loses a motivated seller again."
            </blockquote>
            <p className="text-foreground font-medium">— James</p>
            <p className="text-muted-foreground text-sm">Founder, WholesalerPhone</p>
          </div>
        </div>
      </div>
    </section>
  )
}
