"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const LEADERS = [
  {
    name: "Dr. Hong Bo",
    title: "Chairman",
    image: "/images/leadership/hong_bo.png",
    bio: "A Ph.D. in Management and Senior Economist, Dr. Hong brings decades of top-tier institutional governance to our Hong Kong platform. His leadership history includes serving as Executive Director and CEO of CMB Wing Lung Bank, and General Manager of CMB Hong Kong Branch.",
  },
  {
    name: "Hu Hanyang",
    title: "Co-Founder & Chairman",
    image: "/images/leadership/hu_han_yang.png",
    bio: "An Oxford-educated financial architect who has successfully scaled state-approved investment platforms past RMB 100 billion in AUM. He is the only manager in Shandong Province to lead a firm to a continuous Class A Private Equity Manager rating by the Insurance Asset Management Association of China.",
  },
  {
    name: "Jay Ji",
    title: "Executive President",
    image: "/images/leadership/jay_ji.png",
    bio: "A private equity veteran who has managed over $5 billion USD in cumulative AUM globally. He directs our venture pipelines targeting deep-tech, artificial intelligence, biotechnology, and new materials.",
  },
  {
    name: "Jacky Zhang",
    title: "Managing Director",
    image: "/images/leadership/jacky_zhang.png",
    bio: "A decorated financial professional with senior management tenure across state-owned commercial banks and global PE firms. He is a recipient of the National \u201cMay 4th Youth Medal\u201d and a 1st Prize winner in the National Financial System\u2019s \u201cDual Elevation Scheme.\u201d",
  },
]

export function LeadershipContent() {
  return (
    <section className="px-6 pb-28 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-balance text-center leading-relaxed text-foreground/75"
        >
          Our executive layer merges institutional-grade infrastructure with venture-scale agility. Each member
          averages over 15 years of industry experience across global investment banks, central enterprises, and
          top-tier private equity funds.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {LEADERS.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 rounded-md border border-border bg-card p-8 sm:p-10 sm:flex-row sm:items-start"
            >
              <div className="relative mx-auto h-28 w-28 flex-shrink-0 overflow-hidden rounded-full border border-primary/30 shadow-[0_0_40px_-12px_theme(colors.primary)] sm:mx-0 sm:h-32 sm:w-32">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={`Portrait of ${leader.name}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div className="flex flex-col gap-3 text-center sm:text-left">
                <div>
                  <p className="font-serif text-xl text-foreground">{leader.name}</p>
                  <p className="text-sm tracking-wide text-primary/90">{leader.title}</p>
                </div>
                <p className="text-pretty leading-relaxed text-foreground/75">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
