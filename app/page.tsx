import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SocialProof } from "@/components/social-proof"
import { Pain } from "@/components/pain"
import { HowItWorks } from "@/components/how-it-works"
import { ProductScreens } from "@/components/product-screens"
import { Pricing } from "@/components/pricing"
import { FounderNote } from "@/components/founder-note"
import { Footer } from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />
      <SocialProof />
      <Pain />
      <HowItWorks />
      <ProductScreens />
      <Pricing />
      <FounderNote />
      <Footer />
    </main>
  )
}
