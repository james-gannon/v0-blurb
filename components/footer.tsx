import Link from "next/link"

export function Footer() {
  const links = [
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ]

  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-6">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-tight text-foreground">
              WholesalerPhone
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              AI-powered business phone and SMS inbox built specifically for wholesalers and acquisitions teams.
            </p>
            <p className="text-muted-foreground mt-4">
              <a
                href="mailto:support@wholesalerphone.com"
                className="hover:text-foreground transition-colors underline"
              >
                hello@wholesalerphone.com
              </a>
            </p>
          </div>

          <div className="md:col-span-6">
            <p className="text-sm font-medium text-foreground mb-4">Links</p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <strong>SMS Disclosure:</strong> By using WholesalerPhone, you consent to receive SMS messages related to
            your account, service notifications, and lead activity. Message frequency varies. Message and data rates may
            apply. Reply STOP to opt out of non-essential messages. Reply HELP for assistance or contact{" "}
            <a href="mailto:support@wholesalerphone.com" className="underline hover:text-foreground">
              support@wholesalerphone.com
            </a>
            . View our{" "}
            <Link href="/terms" className="underline hover:text-foreground">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 PorchLight Home Offers LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
