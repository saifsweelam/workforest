import { Separator } from '@/components/ui/separator'
import { StaticLayout } from '@/layouts/static-layout'
import { Link } from '@inertiajs/react'

export default function TermsPage() {
    return (
        <>
            <section>
                <h2 className="text-2xl font-semibold mb-2 text-accent-foreground">
                    1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    By accessing or using our platform, you agree to be bound by these Terms and
                    Conditions. If you do not agree with any part, please do not use our service.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-accent-foreground">
                    2. User Responsibilities
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    You are responsible for maintaining the confidentiality of your login
                    information and for all activities that occur under your account.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-accent-foreground">3. Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                    We take your privacy seriously. Please review our{' '}
                    <Link href="/privacy" className="text-primary underline">
                        Privacy Policy
                    </Link>{' '}
                    for more information on how your data is handled.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-accent-foreground">
                    4. Modifications
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to update these terms at any time. Continued use of the
                    service after changes implies acceptance.
                </p>
            </section>

            <Separator />

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-accent-foreground">5. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these terms, please reach out at{' '}
                    <a href="mailto:saifsweelam@gmail.com" className="text-primary underline">
                        saifsweelam@gmail.com
                    </a>
                    .
                </p>
            </section>
        </>
    )
}

TermsPage.layout = (page: React.ReactNode) => (
    <StaticLayout
        title="Terms & Conditions"
        description="Please read these terms carefully before using our services."
    >
        {page}
    </StaticLayout>
)
