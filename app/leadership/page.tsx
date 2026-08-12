import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PageHeader } from "@/components/page-header"
import { LeadershipContent } from "@/components/leadership-content"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Leadership | YRD Holdings",
  description:
    "Meet the executive team behind YRD Holdings — institutional-grade infrastructure with venture-scale agility.",
}

export default function LeadershipPage() {
  return (
    <main className="relative">
      <SiteNavbar />
      <PageHeader eyebrow="Leadership" title="The stack behind the strategy" />
      <LeadershipContent />
      <SiteFooter />
    </main>
  )
}
