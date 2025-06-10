import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Search, ClipboardList, CheckCircle2, CheckCircle } from 'lucide-react'
import { Link } from '@inertiajs/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DefaultLayout } from '@/layouts/default-layout'
import { ReactNode } from 'react'

const features = [
    {
        title: 'Calendar Reminders',
        description: 'Stay on top of interviews and deadlines with timely calendar notifications.',
    },
    {
        title: 'Application Notes',
        description: 'Keep track of insights, feedback, and outcomes for every job you apply to.',
    },
    {
        title: 'Visual Pipeline Dashboard',
        description: 'Monitor the status of your applications visually from applied to hired.',
    },
    {
        title: 'Privacy-First & Open Source',
        description:
            'Your data stays yours. No trackers, no surveillance. Contribute or self-host anytime.',
    },
    {
        title: 'Community-Supported Job Database',
        description:
            'Your contribution to our website helps increase the available jobs for you and other job seekers.',
    },
    {
        title: 'Skill Tags & Recommendations',
        description: 'Get personalized job recommendations based on your skills and interests.',
    },
]

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-primary">About Workforest</h1>
                <p className="text-muted-foreground text-lg">
                    Workforest helps you track your job hunt, manage applications, and find your
                    next role with clarity and confidence.
                </p>
            </section>

            <Separator />

            {/* Our Mission */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
                <p className="text-muted-foreground">
                    We believe job hunting should be organized and empowering. Our mission is to
                    make it easy for anyone to search for jobs, track progress, and land interviews
                    — all in one seamless experience.
                </p>
            </section>

            {/* How it Works */}
            <section className="space-y-8">
                <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl border bg-muted/30 space-y-3 text-center">
                        <Search className="w-8 h-8 mx-auto text-primary" />
                        <h3 className="text-lg font-semibold">Search for Jobs</h3>
                        <p className="text-sm text-muted-foreground">
                            Explore job opportunities and discover new roles across industries and
                            platforms.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border bg-muted/30 space-y-3 text-center">
                        <ClipboardList className="w-8 h-8 mx-auto text-primary" />
                        <h3 className="text-lg font-semibold">Track Applications</h3>
                        <p className="text-sm text-muted-foreground">
                            Save job listings, record application status, interview dates, and more
                            — all in one place.
                        </p>
                    </div>
                    <div className="p-6 rounded-xl border bg-muted/30 space-y-3 text-center">
                        <CheckCircle2 className="w-8 h-8 mx-auto text-primary" />
                        <h3 className="text-lg font-semibold">Stay Organized</h3>
                        <p className="text-sm text-muted-foreground">
                            Visualize your progress, never miss deadlines, and take control of your
                            job search journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Key Features</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-lg transition-shadow duration-300"
                        >
                            <CardHeader className="flex flex-row items-center gap-3">
                                <CheckCircle className="text-primary w-5 h-5" />
                                <CardTitle className="text-lg">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground text-sm">
                                {feature.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="q1">
                        <AccordionTrigger>Is Workforest free to use?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Workforest is free and open-source. You can use it, self-host it,
                            or contribute to it.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q2">
                        <AccordionTrigger>Do you collect any personal data?</AccordionTrigger>
                        <AccordionContent>
                            No. We do not track you, store analytics, or sell your data. You own
                            your information.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="q3">
                        <AccordionTrigger>
                            Can I sync my job applications from other platforms?
                        </AccordionTrigger>
                        <AccordionContent>
                            You can manually import them for now. We’re working on integrations with
                            major platforms.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>

            {/* Call to Action */}
            <section className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    Ready to take control of your job hunt?
                </h2>
                <Button size="lg" className="px-10 py-6 text-base" asChild>
                    <Link href="/signin">Get Started</Link>
                </Button>
            </section>
        </div>
    )
}

AboutPage.layout = (page: ReactNode) => <DefaultLayout title="About">{page}</DefaultLayout>
