import type { Metadata } from "next"
import { SiteNavbar } from "@/components/site-navbar"
import { PageHeader } from "@/components/page-header"
import { ContactContent } from "@/components/contact-content"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Contact | YRD Holdings",
  description: "Get in touch with YRD Asset Management Limited in Central, Hong Kong.",
}

export default function ContactPage() {
  return (
    <main className="relative">
      <SiteNavbar />
      <PageHeader eyebrow="Contact" title="Get in touch" />
      <ContactContent />
      <SiteFooter />
    </main>
  )
}
