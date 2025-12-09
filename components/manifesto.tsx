"use client"

export function Manifesto() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-foreground text-background">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase text-primary mb-12">The Wholesaling Manifesto</p>

        <div className="space-y-8 font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug">
          <p>
            We believe <span className="text-primary">humans close deals.</span> Not algorithms.
          </p>

          <p className="text-background/60">
            We believe AI should be invisible — doing the work you hate so you can do the work you love.
          </p>

          <p>
            We believe the best technology <span className="italic">amplifies</span> humanity. It doesn't replace it.
          </p>

          <p className="text-background/60">We believe your clients want to work with YOU. Not your chatbot.</p>

          <p>
            We believe <span className="text-primary">"AI-powered"</span> has become a red flag. So we don't lead with
            it.
          </p>

          <p className="text-background/60">
            We believe in speed. In never losing a lead. In being first without being fake.
          </p>

          <p>
            We believe you're the star of this show.
            <br />
            <span className="text-primary italic">AI is just the stagehand.</span>
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-background/20">
          <p className="text-sm text-background/60">If that resonates, you're in the right place.</p>
        </div>
      </div>
    </section>
  )
}
