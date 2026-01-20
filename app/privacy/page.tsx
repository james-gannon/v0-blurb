import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | WholesalerPhone",
  description: "WholesalerPhone Privacy Policy - How we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-12">Last Updated: December 13, 2025</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              STONEY LLC doing business as WholesalerPhone ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you use our services,
              including our website and mobile/web applications.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <h3 className="font-semibold text-foreground text-lg mb-3">Personal Information</h3>
            <p className="leading-relaxed">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, phone number, and business information</li>
              <li>Account credentials (username and password)</li>
              <li>Payment and billing information</li>
              <li>Communications you send to us or through our platform</li>
            </ul>

            <h3 className="font-semibold text-foreground text-lg mb-3 mt-6">Communication Data</h3>
            <p className="leading-relaxed">
              When you use WholesalerPhone to send and receive calls and text messages, we collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phone numbers (yours and your contacts)</li>
              <li>Call logs, duration, and metadata</li>
              <li>SMS/MMS message content and metadata</li>
              <li>Voicemail recordings and transcriptions</li>
            </ul>

            <h3 className="font-semibold text-foreground text-lg mb-3 mt-6">Automatically Collected Information</h3>
            <p className="leading-relaxed">
              We automatically collect certain information about your device and usage, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address, browser type, and device identifiers</li>
              <li>Usage data (features used, time spent, interactions)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send service-related communications</li>
              <li>Enable call and SMS functionality, including AI-powered features</li>
              <li>Send you updates, marketing communications, and promotional offers (with your consent)</li>
              <li>Respond to your requests, comments, and questions</li>
              <li>Analyze usage patterns and improve user experience</li>
              <li>Detect, prevent, and address technical issues or fraudulent activity</li>
              <li>Comply with legal obligations and enforce our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. SMS and Voice Services</h2>
            <p className="leading-relaxed">
              By using WholesalerPhone, you consent to receive SMS messages and voice calls related to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service notifications (new leads, missed calls, urgent alerts)</li>
              <li>Account updates and security alerts</li>
              <li>Billing and payment confirmations</li>
              <li>Product updates and feature announcements</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>Opt-Out:</strong> You can opt out of promotional messages at any time by replying STOP to any
              message. You cannot opt out of transactional messages necessary for service operation.
            </p>
            <p className="leading-relaxed">
              <strong>Message Frequency:</strong> Message frequency varies based on your account activity and settings.
              Message and data rates may apply.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. How We Share Your Information</h2>
            <p className="leading-relaxed">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (e.g., Twilio
                for SMS/voice, Stripe for payments, hosting providers)
              </li>
              <li>
                <strong>Team Members:</strong> If you use a team account, certain information may be visible to other
                authorized users in your organization
              </li>
              <li>
                <strong>Legal Requirements:</strong> When required by law, court order, or government request
              </li>
              <li>
                <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
              </li>
              <li>
                <strong>With Your Consent:</strong> When you explicitly authorize us to share your information
              </li>
            </ul>
            <p className="leading-relaxed mt-4 p-4 bg-muted border border-border">
              <strong>Important Notice Regarding Mobile Information:</strong> No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures to protect your information, including encryption, secure
              servers, and access controls. However, no method of transmission over the internet is 100% secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your information for as long as necessary to provide our services, comply with legal
              obligations, resolve disputes, and enforce our agreements. You may request deletion of your account and
              associated data by contacting us at support@wholesalerphone.com.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Your Rights and Choices</h2>
            <p className="leading-relaxed">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="leading-relaxed mt-4">To exercise these rights, contact us at support@wholesalerphone.com.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our services may contain links to third-party websites or integrate with third-party services. We are not
              responsible for the privacy practices of these third parties. We encourage you to review their privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
            <p className="leading-relaxed">
              WholesalerPhone is not intended for use by individuals under the age of 18. We do not knowingly collect
              information from children. If you believe we have collected information from a child, please contact us
              immediately.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">11. International Users</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in the United States or other countries where our
              service providers operate. By using our services, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the
              updated policy on our website and updating the "Last Updated" date. Your continued use of our services
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">13. Contact Us</h2>
            <p className="leading-relaxed">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Email:</strong> support@wholesalerphone.com
              <br />
              <strong>Address:</strong> 225 Dyer St, Providence, RI 02903
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
