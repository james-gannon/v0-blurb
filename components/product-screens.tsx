import { Monitor, Smartphone, BarChart3, FileText } from "lucide-react"

export function ProductScreens() {
  const screens = [
    {
      title: "Unified Inbox",
      description: "All calls & texts in one place",
      icon: Monitor,
      query: "unified inbox dashboard showing calls and SMS messages for real estate CRM",
    },
    {
      title: "Lead Prioritization",
      description: "Hot, Warm, Cold — instantly sorted",
      icon: BarChart3,
      query: "lead prioritization dashboard with hot warm cold tags for real estate wholesaling",
    },
    {
      title: "AI Call Summary",
      description: "Every conversation, summarized",
      icon: FileText,
      query: "AI call summary interface showing transcript and key points for sales call",
    },
    {
      title: "Mobile + Desktop",
      description: "Work from anywhere",
      icon: Smartphone,
      query: "mobile and desktop CRM app interface for real estate professionals",
    },
  ]

  return (
    <section className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Product Preview</p>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal leading-[1.1] tracking-tight text-foreground mb-4">
            Built for how you actually work.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Clean, fast, and designed for real estate workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {screens.map((screen, i) => (
            <div key={i} className="bg-background border border-border overflow-hidden group">
              <div className="aspect-video bg-muted relative">
                <img
                  src={`/.jpg?height=400&width=600&query=${encodeURIComponent(screen.query)}`}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6 flex items-start gap-4">
                <screen.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{screen.title}</h3>
                  <p className="text-muted-foreground text-sm">{screen.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
