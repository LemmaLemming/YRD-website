"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

const ISSUES = [
  { issue: "Vol. 04", title: "Frontier Markets Outlook", date: "Q1 2025" },
  { issue: "Vol. 03", title: "Deep Tech Deployment Notes", date: "Q4 2024" },
  { issue: "Vol. 02", title: "Cross-Border Capital Flows", date: "Q3 2024" },
  { issue: "Vol. 01", title: "The Gateway Thesis", date: "Q2 2024" },
]

export function NewsletterSection() {
  return (
    <section id="insights" className="relative bg-background px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center gap-4 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Insights \(coming soon)\</span>
          <h2 className="text-balance font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            Notes from our desk
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ISSUES.map((item, i) => (
            <motion.a
              key={item.issue}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-5 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-primary/90">{item.issue}</span>
                <FileText size={16} className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <p className="font-serif text-lg leading-snug text-foreground">{item.title}</p>
              <span className="mt-auto text-xs tracking-wide text-muted-foreground">{item.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
