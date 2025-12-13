import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "FAQ | WholesalerPhone",
  description: "Frequently asked questions about WholesalerPhone - AI-powered phone and SMS for real estate.",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "What is WholesalerPhone?",
      answer:
        "WholesalerPhone is an AI-powered business phone and SMS platform built specifically for real estate wholesalers, acquisition managers, and teams. It helps you never lose a motivated seller by prioritizing leads, automating responses, and centralizing all your communications in one team inbox.",
    },
    {
      question: "How does WholesalerPhone work?",
      answer:
        "WholesalerPhone integrates with your existing phone number or provides a new business line. All calls and texts flow through our AI-powered system, which prioritizes leads, suggests smart replies, and organizes everything in a shared team inbox. You stay in control - AI handles the busy work, you handle the human touch.",
    },
    {
      question: "Do I need to change my phone number?",
      answer:
        "No! You can forward your existing number to WholesalerPhone, or we can provide you with a new business line. Your leads and contacts won't notice any difference.",
    },
    {
      question: "How does pricing work?",
      answer:
        "We offer two plans: Solo ($99/mo) for individual wholesalers and Team (from $299/mo) for teams of up to 5 users. Both plans include unlimited AI prioritization, smart replies, and team inbox access. Early access members lock in lifetime pricing.",
    },
    {
      question: "What if I'm not satisfied?",
      answer:
        "We offer a 30-day money-back guarantee. If WholesalerPhone doesn't help you close at least one extra deal in your first month, we'll refund you completely - no questions asked.",
    },
    {
      question: "How does the AI work?",
      answer:
        "Our AI analyzes every incoming call and text to identify urgency signals (timeline, motivation, decision authority). It ranks leads from hot to cold, suggests contextual replies, and flags opportunities you might have missed. You always have final say - AI suggests, you decide.",
    },
    {
      question: "Can my whole team use it?",
      answer:
        "Absolutely. Team plans include up to 5 users with one shared inbox. Everyone can see calls, texts, and lead activity in real-time. Managers get a bird's-eye view of team performance and response times.",
    },
    {
      question: "What about SMS compliance?",
      answer:
        "WholesalerPhone is fully compliant with TCPA regulations and carrier requirements. We handle opt-out requests automatically (STOP replies), maintain message logs, and provide compliance tools to keep you protected. You're responsible for obtaining proper consent before messaging leads.",
    },
    {
      question: "Do you store call recordings?",
      answer:
        "Yes, all calls are recorded and transcribed for your review (and compliance). You can search transcripts, review conversations, and use them for training. Recordings are stored securely and encrypted.",
    },
    {
      question: "When will WholesalerPhone be available?",
      answer:
        "We're launching early access in January 2025. The first 50 members lock in lifetime pricing and get priority onboarding. Join the waitlist to reserve your spot.",
    },
    {
      question: "How do I get started?",
      answer:
        "Click 'Get Early Access' to join our waitlist. You'll receive an email 3 days before launch with your login credentials and setup instructions. If you want a 1-on-1 onboarding call, we're offering those to the first 20 beta users.",
    },
    {
      question: "What happens if I exceed my message or call limits?",
      answer:
        "Our plans include generous limits for most users. If you exceed them, we'll notify you and charge overage fees at competitive rates. You can upgrade to a higher plan anytime to avoid overages.",
    },
    {
      question: "Can I integrate WholesalerPhone with my CRM?",
      answer:
        "Not yet, but CRM integrations (REsimpli, Podio, etc.) are on our roadmap for Q2 2025. We'll keep you updated as we add new features.",
    },
    {
      question: "How secure is my data?",
      answer:
        "Very secure. All data is encrypted in transit and at rest. We use industry-standard security practices and never sell your data to third parties. See our Privacy Policy for full details.",
    },
    {
      question: "What if I need help or support?",
      answer:
        "Email us anytime at support@wholesalerphone.com. We typically respond within 24 hours during business days. Early access members get priority support.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-muted-foreground mb-16">Everything you need to know about WholesalerPhone</p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border pb-8 last:border-0">
              <h2 className="font-serif text-xl font-semibold text-foreground mb-3">{faq.question}</h2>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted/30 rounded-lg border border-border">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Still have questions?</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Can't find the answer you're looking for? Reach out to our team.
          </p>
          <a
            href="mailto:support@wholesalerphone.com"
            className="inline-block bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
