"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-32%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.32], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.32], ["0%", "-8%"])

  return (
    <section ref={sectionRef} className="relative isolate overflow-hidden">
      {/* Parallax background spanning hero + about — scrolls upward to reveal the lower half of the skyline */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <motion.div style={{ y: bgY }} className="absolute inset-0 h-[148%] w-full">
          <Image
            src="/images/hero-skyline.jpg"
            alt="Hong Kong skyline at dusk with wetlands and city towers"
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>
        {/* Legibility gradient for the hero copy, easing off toward the About section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-background/45" />
        {/* Constant darkening tint so the skyline stays dim but visible rather than fading to solid */}
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,transparent,oklch(0.16_0.015_55/0.4))]" />
      </div>

      {/* Hero */}
      <div id="top" className="relative flex min-h-[100vh] flex-col items-center justify-center px-6 text-center">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">YRD Holdings HK</span>
          <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.1] text-foreground sm:text-6xl md:text-7xl">
            Investing at the Gateway of Innovation
          </h1>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-foreground/75 sm:text-lg">
            Institutional-grade infrastructure with venture-scale agility.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-foreground/50"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.div>
      </div>

      {/* About */}
      <div id="about" className="relative mx-auto flex min-h-[85vh] max-w-3xl flex-col items-center justify-center gap-9 px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">About Us</span>
          <p className="text-balance font-serif text-2xl leading-snug text-foreground sm:text-3xl md:text-4xl">
            Founded in October 2017, YRD Holdings HK is the newest core member of the YRD Group matrix — bridging
            our state-backed roots with the market-driven mindset of a global tech fund.
          </p>
        </motion.div>

        <motion.a
          href="#leadership"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-sm border border-primary/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          About Us
        </motion.a>
      </div>
    </section>
  )
}
