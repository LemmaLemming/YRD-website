"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const LEADERS = [
  { name: "Hong Bo", title: "Chairman", image: "/images/leadership/hong_bo.png" },
  { name: "Jay Ji", title: "Executive President", image: "/images/leadership/jay_ji.png" },
  { name: "Jacky Zhang", title: "Managing Director", image: "/images/leadership/jacky_zhang.png" },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="relative bg-background px-6 py-28 md:py-36">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-center gap-4 text-center"
        >
          <span className="text-xs uppercase tracking-[0.35em] text-primary/90">Leadership</span>
          <h2 className="text-balance font-serif text-3xl text-foreground sm:text-4xl md:text-5xl">
            Meet our team
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-primary/30 shadow-[0_0_40px_-12px_theme(colors.primary)] sm:h-36 sm:w-36">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  className="object-cover"
                  sizes="144px"
                />
              </div>
              <div>
                <p className="font-serif text-lg text-foreground">{leader.name}</p>
                <p className="text-sm tracking-wide text-muted-foreground">{leader.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/leadership"
            className="inline-flex w-fit rounded-sm border border-primary/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Leadership
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
