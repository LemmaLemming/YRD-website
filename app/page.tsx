import { SiteNavbar } from "@/components/site-navbar"
import { HeroAboutSection } from "@/components/hero-about-section"
import { LeadershipSection } from "@/components/leadership-section"
import { CommitmentSection } from "@/components/commitment-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <main className="relative">
      <SiteNavbar />
      <HeroAboutSection />
      <LeadershipSection />
      <CommitmentSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  )
}
