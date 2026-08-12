import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About | YRD Holdings",
  description:
    "YRD Asset Management Limited is the international gateway for YRD Holdings, bridging mainland liquidity with global markets.",
}

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteNavbar />
      <PageHeader eyebrow="About Us" title="The gateway between mainland power and global markets" />
      <AboutContent />
      <SiteFooter />
    </main>
  )
}
