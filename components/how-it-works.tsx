import { Sparkles, MessageSquare, Inbox, User } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Sparkles,
      title: "AI sorts leads.",
      description: "Every inbound call & SMS is analyzed for motivation and urgency. Leads tagged Hot / Warm / Cold.",
    },
    {
      number: "02",
      icon: MessageSquare,
      title: "Smart auto-replies.",
      description: "Missed calls send auto-texts in your approved tone. Higher reply rates with personalized messages.",
    },
    {
      number: "03",
      icon: Inbox,
      title: "Team inbox.",
      description: "All team phone numbers route into one shared inbox. No more silos or missing messages.",
    },
    {
      number: "04",
      icon: User,
      title: "Human takeover.",
      description: "AI handles sorting and admin. You handle negotiation and rapport.",
    },
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">How it works</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-foreground mb-4">
            Four steps to never lose a lead.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We handle the chaos. You close the deals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-muted-foreground">{step.number}</span>
                <step.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
