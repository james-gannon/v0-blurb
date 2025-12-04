export function Testimonials() {
  const testimonials = [
    {
      quote: "I closed 3 deals last month that I 100% would have lost before. Not exaggerating. Three.",
      name: "Marcus",
      location: "Phoenix",
      context: "Solo agent, 4 years in",
    },
    {
      quote:
        "My team's response time went from 2 hours to 4 minutes. Our reviews went from 4.2 to 4.9 stars. Coincidence? Nope.",
      name: "Rachel",
      location: "Austin",
      context: "Team lead, 12 agents",
    },
    {
      quote: "Finally, software that doesn't feel like it was built by someone who's never sold a house.",
      name: "David",
      location: "Chicago",
      context: "Broker/Owner, 8 years in",
    },
  ]

  return (
    <section id="testimonials" className="py-24 lg:py-32 px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-background/60 mb-6">From actual humans</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-tight max-w-3xl">
            We didn't write these.
            <br />
            <span className="text-background/60">Promise.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="border-t border-background/20 pt-8">
              <blockquote className="text-xl lg:text-2xl leading-relaxed mb-8 font-serif italic">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-background font-medium">{t.name}</p>
                <p className="text-sm text-background/60">{t.location}</p>
                <p className="text-xs text-background/40 mt-1">{t.context}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-background/20">
          <p className="text-sm text-background/60 italic">We have 200+ more of these. But you get the point.</p>
        </div>
      </div>
    </section>
  )
}
