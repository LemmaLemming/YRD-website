"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-16 pt-40 md:pb-24 md:pt-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.27_0.025_60/0.55),transparent_60%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center"
      >
        <span className="text-xs uppercase tracking-[0.35em] text-primary/90">{eyebrow}</span>
        <h1 className="text-balance font-serif text-4xl leading-[1.1] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            {description}
          </p>
        ) : null}
      </motion.div>
    </section>
  )
}
