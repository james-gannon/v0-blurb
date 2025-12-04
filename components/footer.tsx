import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-6">
            <Link href="/" className="text-2xl font-serif font-semibold tracking-tight text-foreground">
              blurb
            </Link>
            <p className="text-muted-foreground mt-4 max-w-sm leading-relaxed">
              AI-powered communication for real estate humans who are tired of losing deals to agents who are just
              faster.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-medium text-foreground mb-4">Product</p>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#how" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-medium text-foreground mb-4">Company</p>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Blurb. Built with too much coffee and not enough sleep.
          </p>
          <p className="text-sm text-muted-foreground italic">Made for agents who actually want to win.</p>
        </div>
      </div>
    </footer>
  )
}
