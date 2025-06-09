import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import { motion } from "framer-motion"
import { FaGithub, FaGoogle, FaLinkedin } from "react-icons/fa6"
import { Head, Link } from "@inertiajs/react"

export default function SignIn() {
    const providers = [
        {
            name: "Google",
            icon: <FaGoogle className="w-5 h-5" />,
            href: "/auth/google",
        },
        {
            name: "GitHub",
            icon: <FaGithub className="w-5 h-5" />,
            href: "/auth/github",
        },
        {
            name: "LinkedIn",
            icon: <FaLinkedin className="w-5 h-5 text-[#0077b5]" />,
            href: "/auth/linkedin",
        },
    ]

    return (
        <>
            <Head title="Sign In" />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-muted to-background px-4">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full max-w-md"
                >
                    <Card className="rounded-3xl shadow-xl border-border">
                        <CardHeader className="text-center space-y-2">
                            <CardTitle className="text-3xl font-bold text-primary">
                                Welcome Back
                            </CardTitle>
                            <p className="text-muted-foreground text-sm">
                                Sign in with your preferred provider
                            </p>
                        </CardHeader>

                        <CardContent className="flex flex-col gap-4">
                            {providers.map(({ name, icon, href }) => (
                                <TooltipProvider key={name}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="w-full flex items-center justify-center gap-2"
                                                asChild
                                            >
                                                <Link href={href}>
                                                    {icon} Sign in with {name}
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            Sign in using your {name} account
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}

                            <Separator className="my-2" />
                            <p className="text-xs text-muted-foreground text-center px-6">
                                By signing in, you agree to our{" "}
                                <a href="/terms" className="underline hover:text-primary">
                                    Terms
                                </a>{" "}
                                and{" "}
                                <a href="/privacy" className="underline hover:text-primary">
                                    Privacy Policy
                                </a>.
                            </p>
                        </CardContent>

                        <CardFooter className="justify-center">
                            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Seif El-Din Sweilam</span>
                        </CardFooter>
                    </Card>
                </motion.div>
            </div>
        </>
    )
}
