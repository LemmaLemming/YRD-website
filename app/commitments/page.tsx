import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PageHeader } from "@/components/page-header"
import { CommitmentsContent } from "@/components/commitments-content"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Our Commitment | YRD Holdings",
  description:
    "Our Foundation: Anchored in Precision, Driven by Value. The core values and commitments of YRD Asset Management.",
}

export default function CommitmentsPage() {
  return (
    <main className="relative">
      <SiteNavbar />
      <PageHeader eyebrow="Our Commitment" title="Anchored in precision, driven by value" />
      <CommitmentsContent />
      <SiteFooter />
    </main>
  )
}
