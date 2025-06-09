import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Briefcase, Search, CalendarClock, Bell } from 'lucide-react'

const features = [
    {
        title: 'Track Job Applications',
        description:
            'Easily log every job you apply to, update statuses, and keep a detailed timeline of your career journey.',
        icon: Briefcase,
    },
    {
        title: 'Intelligent Job Search',
        description:
            'Search and filter jobs from integrated sources. Find roles tailored to your goals, experience, and location.',
        icon: Search,
    },
    {
        title: 'Timeline Overview',
        description:
            'See your job hunt as a clear visual timeline. Spot patterns and never miss a follow-up again.',
        icon: CalendarClock,
    },
    {
        title: 'Smart Reminders',
        description:
            'Get automatic nudges for interviews, deadlines, or rejections — never drop the ball.',
        icon: Bell,
    },
]

export function FeaturesSection() {
    return (
        <section className="py-24 bg-background">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl font-bold text-primary mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Workforest Features
                </motion.h2>
                <motion.p
                    className="text-muted-foreground max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Everything you need to stay organized, focused, and ahead of the job market —
                    all in one beautiful dashboard.
                </motion.p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Card className="group border-border hover:shadow-xl transition-shadow duration-300 h-full">
                                <CardHeader className="flex flex-row items-start space-x-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-xl transition-transform group-hover:scale-110">
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                                        <CardDescription className="text-muted-foreground text-sm mt-1">
                                            {feature.description}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Optional Glow Background */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vw] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-40 dark:opacity-60" />
            </div>
        </section>
    )
}
