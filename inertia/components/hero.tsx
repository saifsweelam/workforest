import { Button } from '@/components/ui/button'
import { SparklesIcon, Briefcase, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Sparkles } from './sparkles'
import { Link } from '@inertiajs/react'

export function Hero() {
    return (
        <section className="relative overflow-hidden min-h-screen py-56 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-background to-muted/30">
            {/* Background visual elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 w-[150vw] h-[150vw] 
                    bg-[radial-gradient(circle_at_center,_theme(colors.slate.300),_theme(colors.slate.400),_theme(colors.slate.500))] 
                    dark:bg-[radial-gradient(circle_at_center,_theme(colors.slate.800),_theme(colors.slate.900),_transparent)] 
                    rounded-full -translate-x-1/2 -translate-y-1/2 
                    blur-[100px] opacity-60 dark:opacity-70 animate-pulse transition-colors"
                />
            </div>

            <Sparkles />

            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground"
                >
                    Enter the Future of Work with <span className="text-primary">Workforest</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                    Discover a smarter, modern way to find, track, and document jobs. Powered by
                    community. Built for the future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <Button size="lg" className="group relative overflow-hidden" asChild>
                        <Link href="/auth/signin">
                            <span className="relative z-10 flex items-center gap-2">
                                <Briefcase className="w-5 h-5" /> Get Started
                            </span>
                            <span className="absolute inset-0 bg-primary/20 group-hover:scale-110 transition-transform duration-300 blur-xl" />
                        </Link>
                    </Button>

                    <Button
                        variant="ghost"
                        size="lg"
                        className="text-primary hover:underline"
                        asChild
                    >
                        <Link href="/about">
                            Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Sparkle Animation */}
                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <SparklesIcon className="w-6 h-6 text-primary animate-ping-slow" />
                </motion.div>
            </div>
        </section>
    )
}
