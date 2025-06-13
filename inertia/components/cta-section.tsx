import { Button } from '@/components/ui/button'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function CTASection() {
    return (
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.6 }}
                className="max-w-4xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    Ready to start tracking your career?
                </h2>
                <p className="text-lg md:text-xl mb-10 opacity-90">
                    Join our open source community for job searching and tracking today! Whether
                    you're a job seeker, developer, or just curious!
                </p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                >
                    <Button
                        size="lg"
                        variant="secondary"
                        className="text-lg font-semibold px-8 py-4 flex items-center gap-2"
                        asChild
                    >
                        <Link href="/auth/signin">
                            Get Started <ArrowRight className="w-5 h-5" />
                        </Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Optional decorative element */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted/20 rounded-full blur-3xl pointer-events-none" />
        </section>
    )
}
