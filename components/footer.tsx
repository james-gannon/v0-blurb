import Link from "next/link"

export function Footer() {
  const links = [
    { label: "Pricing", href: "#pricing" },
    { label: "FAQs", href: "#faqs" },
    { label: "Security", href: "#security" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contact", href: "mailto:support@wholesalerphone.com" },
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
                support@wholesalerphone.com
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

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 WholesalerPhone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
