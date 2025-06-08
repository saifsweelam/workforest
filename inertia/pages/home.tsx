import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Head } from '@inertiajs/react'

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <Navbar />
      <Hero />
    </>
  )
}