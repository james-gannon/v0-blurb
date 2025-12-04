export function Marquee() {
  const items = [
    "AI SUCKS AT CLOSING DEALS",
    "•",
    "YOU DON'T",
    "•",
    "AI SUCKS AT BUILDING TRUST",
    "•",
    "YOU DON'T",
    "•",
    "AI SUCKS AT BEING HUMAN",
    "•",
    "YOU DON'T",
    "•",
    "SO WE MADE AI DO THE BORING STUFF",
    "•",
    "WHILE YOU DO THE HUMAN STUFF",
    "•",
  ]

  return (
    <div className="border-y border-border py-4 bg-foreground overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm text-background tracking-[0.2em] uppercase font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
