"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

const CHART_DATA = [
  { label: "2021", value: 42 },
  { label: "2022", value: 58 },
  { label: "2023", value: 71 },
  { label: "2024", value: 89 },
  { label: "2025", value: 104 },
]

export function CommitmentSection() {
  return (
    <section id="commitment" className="relative bg-secondary/40 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-7"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Our Commitment</span>
          <h2 className="text-balance font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
            A rigorous, quantitative dual-track strategy
          </h2>
          <p className="max-w-md text-pretty leading-relaxed text-foreground/75">
            We commit to utilizing a rigorous, quantitative dual-track strategy grounded in earnestness, integrity,
            and mutual benefit.
          </p>
          <a
            href="/commitments"
            className="inline-flex w-fit rounded-sm border border-primary/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Our Commitment
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-md border border-border bg-card p-6 sm:p-8"
        >
          <p className="mb-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Assets Under Advisory — Placeholder
          </p>
          <p className="mb-6 font-serif text-2xl text-foreground">$104M</p>
          <div className="h-56 w-full sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={CHART_DATA} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid vertical={false} stroke="oklch(0.29 0.02 55)" />
                <XAxis
                  dataKey="label"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "oklch(0.68 0.03 65)", fontSize: 12 }}
                />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "oklch(0.68 0.03 65)", fontSize: 12 }} />
                <Bar dataKey="value" fill="oklch(0.74 0.12 78)" radius={[3, 3, 0, 0]} maxBarSize={44} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
