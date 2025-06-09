import { FeaturesSection } from '@/components/features-section'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
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
    </>
  )
}