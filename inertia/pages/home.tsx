import { CTASection } from '@/components/cta-section'
import { FeaturesSection } from '@/components/features-section'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { PrivacySection } from '@/components/privacy-section'
import { StatsSection } from '@/components/stats-section'
import { Separator } from '@/components/ui/separator'
import { Head } from '@inertiajs/react'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Navbar />
      <Hero />
      <Separator />
      <FeaturesSection />
      <StatsSection />
      <PrivacySection />
      <CTASection />
      <Footer />
    </>
  )
}