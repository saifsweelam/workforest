import { CTASection } from '@/components/cta-section'
import { FeaturesSection } from '@/components/features-section'
import { Hero } from '@/components/hero'
import { PrivacySection } from '@/components/privacy-section'
import { StatsSection } from '@/components/stats-section'
import { DefaultLayout } from '@/layouts/default-layout'

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturesSection />
            <StatsSection />
            <PrivacySection />
            <CTASection />
        </>
    )
}

HomePage.layout = (page: React.ReactNode) => <DefaultLayout title="Home">{page}</DefaultLayout>
