"use client"

import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export function ContactContent() {
  return (
    <section className="px-6 pb-28 md:pb-36">
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
        <motion.a
          href="mailto:yrdam@yrd.hk"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="group flex flex-col gap-5 rounded-md border border-border bg-card p-8 transition-colors hover:border-primary/50 sm:p-10"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-primary">
            <Mail size={20} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary/90">Email</span>
            <p className="mt-3 text-pretty font-serif text-xl text-foreground transition-colors group-hover:text-primary sm:text-2xl">
              yrdam@yrd.hk
            </p>
          </div>
          <span className="mt-auto text-sm tracking-wide text-muted-foreground">Click to compose an email</span>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 rounded-md border border-border bg-card p-8 sm:p-10"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-primary/40 text-primary">
            <MapPin size={20} />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary/90">Address</span>
            <p className="mt-3 text-pretty leading-relaxed text-foreground sm:text-lg">
              15/F, St. John&rsquo;s Building
              <br />
              No. 33 Garden Road
              <br />
              Central, Hong Kong
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
