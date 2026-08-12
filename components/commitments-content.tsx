"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Handshake, Users, Landmark, Sprout, Globe2 } from "lucide-react"

const PILLARS = [
  {
    icon: ShieldCheck,
    numeral: "I.",
    zh: "专业",
    en: "Professionalism",
    subtitle: "Institutional Rigor",
    body: "We do not engage in market speculation. Rather, we apply rigorous, evidence-based quantitative methodologies to our capital allocation processes. We adhere to the principle that sound decision-making must be rooted in scientific analysis and institutional discipline.",
  },
  {
    icon: Handshake,
    numeral: "II.",
    zh: "诚信",
    en: "Integrity",
    subtitle: "Transparent Execution",
    body: "Trust constitutes our most valuable asset. We ensure complete alignment with the sophisticated requirements of our institutional partners, operating with full transparency and accountability at every stage of our engagement. We uphold the view that integrity is the bedrock of all sustainable partnerships.",
  },
  {
    icon: Users,
    numeral: "III.",
    zh: "共赢",
    en: "Mutual Benefit",
    subtitle: "Ecosystemic Coordination",
    body: "We firmly believe in the generation of genuinely reciprocal outcomes. Our approach extends beyond mere capital extraction; we are committed to empowering the real economy and fostering the sustainable development of the visionary enterprises we support.",
  },
]

const COMMITMENTS = [
  {
    icon: Landmark,
    audience: "To Our Investors",
    body: "We are steadfastly committed to engineering sustainable outperformance. Our primary mission is to safeguard invested capital and deliver robust, durable returns by systematically capturing opportunities across global markets, while proactively managing downside volatility. We treat every investor mandate as a sacred trust, to be discharged with the utmost diligence and prudence.",
  },
  {
    icon: Sprout,
    audience: "To Our Entrepreneurs",
    body: "We endeavor to serve as your most trusted capital partner. We aspire to be the definitive ally for visionary founders and enterprises, providing not only liquidity but also the strategic resources, industrial connectivity, and operational expertise necessary to achieve scalable, long-term growth.",
  },
  {
    icon: Globe2,
    audience: "To the Global Ecosystem",
    body: "We are dedicated to building financial bridges that connect high quality global industrial and financial resources. We are committed to advancing the development of a highly collaborative, cross-border financial ecosystem that serves the broader objectives of economic integration, shared development, and mutual prosperity.",
  },
]

export function CommitmentsContent() {
  return (
    <>
      {/* Foundation statement */}
      <section className="px-6 pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-pretty text-center leading-relaxed text-foreground/75 sm:text-lg"
        >
          The Yellow River Delta is the cradle of Chinese civilization. It symbolizes enduring strength and
          resilience, while its delta represents a fertile convergence point where resources accumulate to generate
          new growth. At YRD Asset Management, we integrate the substantive institutional strengths of our mainland
          parent platform with the dynamic adaptability of Hong Kong SAR&rsquo;s international financial markets. Our
          commitment remains clear and unwavering: we forge trust through disciplined execution, ensuring that every
          action aligns with the highest standards of fiduciary responsibility and strategic foresight.
        </motion.p>
      </section>

      {/* Core Values / Pillars */}
      <section className="bg-secondary/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 flex flex-col items-center gap-4 text-center"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Core Values</span>
            <h2 className="text-balance font-serif text-3xl text-foreground sm:text-4xl">
              Three foundational pillars
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.en}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5 rounded-md border border-border bg-card p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-primary">
                      <Icon size={20} />
                    </div>
                    <span lang="zh" className="font-sans text-3xl text-primary/50">
                      {pillar.zh}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.3em] text-primary/90">
                      {pillar.numeral} {pillar.en}
                    </span>
                    <h3 className="mt-2 font-serif text-lg text-foreground">{pillar.subtitle}</h3>
                  </div>
                  <p className="text-pretty leading-relaxed text-foreground/75">{pillar.body}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Guiding philosophy */}
      <section className="px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Guiding Philosophy</span>
          <p lang="zh" className="text-balance font-sans text-2xl leading-snug text-foreground sm:text-3xl">
            言忠信，行笃敬；不驰于空想，不骛于虚声
          </p>
          <p className="text-pretty leading-relaxed text-foreground/75">
            &ldquo;Speak with fidelity and act with respect; harbor no idle fantasies, nor pursue empty
            accolades.&rdquo; This principle dictates that we prioritize verifiable, tangible outcomes over transient
            market noise. At every level of our organization, we operate with{" "}
            <span className="text-foreground">Earnestness, Professionalism, and Passion</span> (认真 · 专业 ·
            激情) — qualities that define our institutional character and inform our daily conduct.
          </p>
        </motion.div>
      </section>

      {/* Ultimate commitments */}
      <section className="bg-secondary/40 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14 flex flex-col items-center gap-4 text-center"
          >
            <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Our Ultimate Commitments</span>
            <h2 className="text-balance font-serif text-3xl text-foreground sm:text-4xl">Trust, discharged in full</h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {COMMITMENTS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.audience}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-5 rounded-md border border-border bg-card p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground">{item.audience}</h3>
                  <p className="text-pretty leading-relaxed text-foreground/75">{item.body}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
