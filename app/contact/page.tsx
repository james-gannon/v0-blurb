import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact Us | WholesalerPhone",
  description: "Get in touch with the WholesalerPhone team for support, questions, or feedback.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32">
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-6">Contact Us</h1>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Customer Support</h2>
            <p className="leading-relaxed">
              For technical support, billing questions, or general inquiries, please contact us at:
            </p>
            <p className="leading-relaxed">
              <strong>Email:</strong>{" "}
              <a href="mailto:support@wholesalerphone.com" className="text-accent hover:underline">
                support@wholesalerphone.com
              </a>
            </p>
            <p className="leading-relaxed">
              We typically respond within 24 hours during business days (Monday-Friday, 9am-5pm EST).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Business Information</h2>
            <p className="leading-relaxed">
              <strong>Company Name:</strong> WholesalerPhone LLC
            </p>
            <p className="leading-relaxed">
              <strong>Business Address:</strong> 225 Dyer St, Providence, RI 02903
            </p>
            <p className="leading-relaxed">
              <strong>Email:</strong> hello@wholesalerphone.com
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">SMS & Voice Services</h2>
            <p className="leading-relaxed">
              WholesalerPhone provides SMS and voice communication services. By using our service, you consent to
              receive text messages and calls related to your account, service updates, and lead notifications.
            </p>
            <p className="leading-relaxed">
              <strong>To opt out of SMS messages:</strong> Reply STOP to any message.
              <br />
              <strong>For help:</strong> Reply HELP or contact support@wholesalerphone.com.
            </p>
            <p className="leading-relaxed">
              Message and data rates may apply. Message frequency varies based on your activity and settings.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Feedback & Feature Requests</h2>
            <p className="leading-relaxed">
              We're building WholesalerPhone for real estate professionals like you. If you have ideas, feature
              requests, or feedback on how we can improve, we'd love to hear from you at{" "}
              <a href="mailto:feedback@wholesalerphone.com" className="text-accent hover:underline">
                feedback@wholesalerphone.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
