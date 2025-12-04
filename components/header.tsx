"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-border">
          <Link href="/" className="text-2xl font-serif font-semibold tracking-tight text-foreground">
            blurb
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link
              href="#problem"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              The Problem
            </Link>
            <Link
              href="#how"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              Pricing
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button
              className="bg-foreground text-background hover:bg-foreground/90 text-sm px-6 h-11"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in early
            </Button>
          </div>

          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-b border-border">
            <nav className="flex flex-col gap-6">
              <Link href="#problem" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                The Problem
              </Link>
              <Link href="#how" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-lg text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Button className="bg-foreground text-background w-full mt-4">Get in early</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
