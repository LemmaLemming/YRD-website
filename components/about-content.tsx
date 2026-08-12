"use client"

import { motion } from "framer-motion"
import { Compass, TrendingUp, Eye, Target } from "lucide-react"

const CARDS = [
  {
    icon: Compass,
    label: "Our Positioning",
    title: "The core bridge between mainland power and global markets",
    body: [
      "Registered in Hong Kong, YRD Asset Management Limited operates under a rigorous regulatory framework, holding Type 1 (Dealing in Securities), Type 4 (Advising on Securities), and Type 9 (Asset Management) licenses from the Securities and Futures Commission (SFC).",
      "We are the offshore execution arm of a formidable mainland financial matrix known as the \u201cThree Carriages.\u201d Backed by a parent platform overseeing over RMB 100 Billion AUM, we provide bespoke asset management, proprietary securities trading, and cross-border financial solutions for institutional and high-net-worth professional investors.",
    ],
  },
  {
    icon: TrendingUp,
    label: "Our Edge",
    title: "A proprietary dual-track IPO strategy",
    body: [
      "At the core of our capital deployment is our proprietary Dual Track IPO Strategy, a highly resilient, systematic framework designed to capture premium returns while actively smoothing portfolio volatility.",
      "By evaluating prospective assets through a rigorous, multi-dimensional quantitative model, we dynamically deploy capital across two complementary, risk-adjusted sleeves. Our cornerstone allocations establish a robust baseline of certainty, while the anchor strategy injects dynamic upside elasticity — actively managing downside risk while consistently targeting outperformance across varying market cycles.",
    ],
  },
  {
    icon: Eye,
    label: "Our Vision",
    title: "The most trusted capital partner",
    body: [
      "To operate as the most trusted capital partner for both elite investors and visionary entrepreneurs.",
    ],
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Architecting sustainable, cross-border returns",
    body: [
      "To architect and execute strategies that deliver rich, sustainable returns. We aim to seamlessly link high quality global industrial and financial resources, and to drive and empower a collaborative cross-border financial ecosystem.",
    ],
  },
]

export function AboutContent() {
  return (
    <>
      {/* Main description */}
      <section className="px-6 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-balance text-center font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl"
        >
          YRD Asset Management Limited is the international gateway for YRD Holdings. We bridge capital flows between
          borders, connecting mainland liquidity with the world&rsquo;s most dynamic global markets.
        </motion.p>
      </section>

      {/* Positioning / Edge / Vision / Mission — 2x2 on desktop, 1 column on mobile */}
      <section className="px-6 pb-28 md:pb-36">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-5 rounded-md border border-border bg-card p-8 sm:p-10"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-primary/90">{card.label}</span>
                  <h3 className="mt-3 text-balance font-serif text-xl leading-snug text-foreground sm:text-2xl">
                    {card.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-4 text-pretty leading-relaxed text-foreground/75">
                  {card.body.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </>
  )
}
