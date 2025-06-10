import { Separator } from '@/components/ui/separator'
import { StaticLayout } from '@/layouts/static-layout'
import { ReactNode } from 'react'

export default function PrivacyPage() {
    return (
        <>
            <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">1. No Data Selling</h2>
                <p>We do not sell, trade, or rent your personal data to third parties. Ever.</p>
            </section>

            <Separator />

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                    2. Minimal Data Collection
                </h2>
                <p>
                    We only collect data necessary to provide our services—no invasive tracking, no
                    surveillance. We believe in earning your trust, not invading your privacy.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                    3. Open Source Transparency
                </h2>
                <p>
                    Our codebase is fully open source. You can inspect what we do, how we do it, and
                    even contribute to make it better.{' '}
                    <a href="https://github.com/saifsweelam" className="underline text-primary">
                        Check it out
                    </a>
                    .
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">
                    4. Cookies & Analytics
                </h2>
                <p>
                    We use cookies only where technically required. No invasive analytics. If we
                    ever use any analytics tool, it will be self-hosted and privacy-respecting.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-xl font-semibold text-foreground mb-2">5. Contact</h2>
                <p>
                    If you have questions or requests regarding your data, feel free to contact us
                    directly at{' '}
                    <a href="mailto:saifsweelam@gmail.com" className="underline text-primary">
                        saifsweelam@gmail.com
                    </a>
                    .
                </p>
            </section>
        </>
    )
}

PrivacyPage.layout = (page: ReactNode) => (
    <StaticLayout
        title="Privacy Policy"
        description="We value your privacy. This policy explains how we handle your data."
    >
        {page}
    </StaticLayout>
)
