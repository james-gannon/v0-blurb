import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | WholesalerPhone",
  description: "WholesalerPhone Terms of Service - Legal terms and conditions for using our platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-24 lg:py-32">
        <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-foreground mb-4">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-12">Last Updated: January 07, 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using WholesalerPhone ("Service"), you agree to be bound by these Terms of Service
              ("Terms"). If you do not agree to these Terms, do not use the Service. These Terms constitute a binding
              legal agreement between you and STONEY LLC doing business as WholesalerPhone ("Company," "we," "us," or "our").
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
            <p className="leading-relaxed">WholesalerPhone is a business communication platform that provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>SMS and voice call management</li>
              <li>AI-powered lead prioritization and response automation</li>
              <li>Team inbox and collaboration tools</li>
              <li>Call recording, transcription, and analytics</li>
            </ul>
            <p className="leading-relaxed mt-4">
              The Service is designed for real estate professionals, wholesalers, and acquisition teams.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              3. Account Registration and Eligibility
            </h2>
            <p className="leading-relaxed">To use the Service, you must:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Be at least 18 years old and legally able to enter into contracts</li>
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
            </ul>
            <p className="leading-relaxed mt-4">You are responsible for all activity that occurs under your account.</p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Acceptable Use Policy</h2>
            <p className="leading-relaxed">You agree NOT to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Send spam, unsolicited messages, or engage in illegal marketing practices</li>
              <li>Violate any applicable laws, including TCPA, CAN-SPAM, or GDPR</li>
              <li>Harass, abuse, threaten, or intimidate others</li>
              <li>Transmit viruses, malware, or other harmful code</li>
              <li>Impersonate any person or entity or misrepresent your affiliation</li>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Access the Service through automated means (bots, scrapers) without permission</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Violation of this policy may result in immediate suspension or termination of your account.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              5. SMS and Voice Communication Compliance
            </h2>
            <p className="leading-relaxed">
              You are responsible for ensuring your use of our SMS and voice features complies with all applicable laws,
              including the Telephone Consumer Protection Act (TCPA) and carrier regulations. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Obtain proper consent before sending messages or making calls</li>
              <li>Provide clear opt-in and opt-out mechanisms</li>
              <li>Honor opt-out requests immediately (within 24 hours)</li>
              <li>Not send messages to numbers on the National Do Not Call Registry without proper exemption</li>
              <li>Include your business identity in all communications</li>
            </ul>
            <p className="leading-relaxed mt-4">
              We reserve the right to suspend accounts that violate carrier guidelines or generate excessive complaints.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Fees and Payment</h2>
            <p className="leading-relaxed">
              <strong>Subscription Plans:</strong> WholesalerPhone offers Solo and Team subscription plans. Pricing is
              available on our website and subject to change with 30 days' notice.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Billing:</strong> You will be billed monthly in advance. All fees are non-refundable except as
              required by law or explicitly stated in these Terms.
            </p>
            <p className="leading-relaxed">
              <strong>Usage Fees:</strong> Additional charges may apply for usage exceeding plan limits (e.g., SMS
              messages, call minutes).
            </p>
            <p className="leading-relaxed">
              <strong>Payment Information:</strong> You authorize us to charge your payment method on file. You are
              responsible for keeping your payment information current.
            </p>
            <p className="leading-relaxed">
              <strong>Failed Payments:</strong> If payment fails, we may suspend your account until payment is received.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Cancellation and Refunds</h2>
            <p className="leading-relaxed">
              <strong>Cancellation:</strong> You may cancel your subscription at any time through your account settings
              or by contacting support. Cancellation takes effect at the end of your current billing period.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>30-Day Money-Back Guarantee:</strong> If you cancel within the first 30 days of your initial
              subscription, we will provide a full refund of your first month's payment.
            </p>
            <p className="leading-relaxed">
              <strong>No Refunds:</strong> After the 30-day period, subscription fees are non-refundable.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, features, and functionality of the Service (including text, graphics, logos, software, and
              design) are owned by STONEY LLC and protected by copyright, trademark, and other intellectual
              property laws.
            </p>
            <p className="leading-relaxed mt-4">
              You may not copy, modify, distribute, sell, or reverse engineer any part of the Service without our
              written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">9. User Content</h2>
            <p className="leading-relaxed">
              You retain ownership of any content you create, upload, or transmit through the Service (e.g., messages,
              recordings, contact lists). By using the Service, you grant us a license to use, store, process, and
              display your content solely to provide the Service.
            </p>
            <p className="leading-relaxed mt-4">
              You represent that you have all necessary rights to the content you submit and that it does not violate
              any third-party rights or laws.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">10. Privacy and Data Protection</h2>
            <p className="leading-relaxed">
              Your use of the Service is also governed by our Privacy Policy, which explains how we collect, use, and
              protect your information. By using the Service, you consent to our data practices as described in the
              Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">11. Third-Party Services</h2>
            <p className="leading-relaxed">
              The Service may integrate with third-party services (e.g., Twilio, Stripe). Your use of these services is
              subject to their respective terms and privacy policies. We are not responsible for third-party services or
              any issues arising from their use.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              12. Disclaimers and Limitations of Liability
            </h2>
            <p className="leading-relaxed">
              <strong>As-Is Service:</strong> The Service is provided "as is" and "as available" without warranties of
              any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or
              secure.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>No Guarantee of Results:</strong> We do not guarantee that using the Service will result in
              increased deals, revenue, or business outcomes.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Limitation of Liability:</strong> To the maximum extent permitted by law, STONEY LLC
              shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss
              of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or
              other intangible losses resulting from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use or inability to use the Service</li>
              <li>Any unauthorized access to or use of our servers or your data</li>
              <li>Any interruption or cessation of transmission to or from the Service</li>
              <li>Any bugs, viruses, or other harmful code transmitted through the Service</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">13. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify, defend, and hold harmless STONEY LLC, its officers, directors, employees,
              and agents from any claims, losses, damages, liabilities, and expenses (including legal fees) arising
              from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any laws or third-party rights</li>
              <li>Your content or communications sent through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">14. Termination</h2>
            <p className="leading-relaxed">
              We may suspend or terminate your account and access to the Service at any time, with or without cause,
              with or without notice. Reasons for termination may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violation of these Terms or our Acceptable Use Policy</li>
              <li>Non-payment of fees</li>
              <li>Fraudulent or illegal activity</li>
              <li>Excessive complaints from recipients of your communications</li>
            </ul>
            <p className="leading-relaxed mt-4">
              Upon termination, you will lose access to your account and data. We are not obligated to retain or provide
              copies of your data after termination.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              15. Dispute Resolution and Arbitration
            </h2>
            <p className="leading-relaxed">
              <strong>Informal Resolution:</strong> If you have a dispute with us, please contact us first at
              support@wholesalerphone.com to attempt to resolve it informally.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Binding Arbitration:</strong> If we cannot resolve the dispute informally, you agree that any
              dispute arising from these Terms or the Service will be resolved through binding arbitration in accordance
              with the rules of the American Arbitration Association. Arbitration will take place in [Your
              State/County].
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Class Action Waiver:</strong> You agree that disputes will be resolved on an individual basis
              only. You waive any right to participate in a class action lawsuit or class-wide arbitration.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">16. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of [Your State],
              without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">17. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by posting
              the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service
              after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">18. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will
              remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">19. Entire Agreement</h2>
            <p className="leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and
              STONEY LLC regarding the Service.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">20. Contact Information</h2>
            <p className="leading-relaxed">If you have questions about these Terms, please contact us at:</p>
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
