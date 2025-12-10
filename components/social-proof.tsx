import { Quote } from "lucide-react"

export function SocialProof() {
  const testimonials = [
    {
      quote: "We never miss hot sellers anymore.",
      author: "Acquisitions Manager",
      detail: "30+ deals closed",
    },
    {
      quote: "My follow-up improved overnight.",
      author: "Solo Wholesaler",
      detail: "",
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-background border border-border p-8 relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <blockquote className="font-serif text-2xl text-foreground mb-4 leading-snug">
                "{testimonial.quote}"
              </blockquote>
              <div className="text-muted-foreground">
                <span className="text-foreground font-medium">{testimonial.author}</span>
                {testimonial.detail && <span className="text-muted-foreground"> · {testimonial.detail}</span>}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-lg">
          Trusted by wholesalers and acquisition teams nationwide.
        </p>
      </div>
    </section>
  )
}
