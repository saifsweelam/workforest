import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { SiGithub } from 'react-icons/si'
import { ThemeToggle } from './theme-toggle'
import { Menu, X } from 'lucide-react'
import { Link, usePage } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import User from '#models/user'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Navbar() {
    const {
        props: { user },
    } = usePage() as { props: { user: User } }
    const [isOpen, setIsOpen] = useState(false)

    // Menu items for logged out and logged in states
    const loggedOutItems = [
        { label: 'Home', href: '/' },
        { label: 'Job Search', href: '/jobs' },
        { label: 'About', href: '/about' },
        { label: 'Help', href: '/help' },
    ]

    const loggedInItems = [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'My Applications', href: '/applications' },
        { label: 'Job Search', href: '/jobs' },
        { label: 'Companies', href: '/companies' },
        { label: 'Calendar', href: '/calendar' },
        { label: 'Notes', href: '/notes' },
        { label: 'Resources', href: '/resources' },
        { label: 'Settings', href: '/settings' },
    ]

    const menuItems = user ? loggedInItems : loggedOutItems

    const renderNavEnd = (mobile: boolean = false) => {
        return (
            <>
                <Button
                    variant="ghost"
                    aria-label="GitHub repository"
                    className={`p-2 rounded-full hover:bg-primary/10 transition-colors ${mobile ? 'w-full' : ''}`}
                    asChild
                >
                    <a
                        href="https://github.com/saifsweelam"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub className="w-6 h-6 text-primary inline mr-2" />
                        Source Code
                    </a>
                </Button>

                <ThemeToggle />

                {user ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="flex items-center gap-2 px-2 py-1 h-auto"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src={user.profilePicture ?? undefined}
                                        alt={user.fullName ?? undefined}
                                    />
                                    <AvatarFallback>{user.fullName}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm font-medium text-foreground hidden sm:inline">
                                    {user.fullName}
                                </span>
                            </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem asChild>
                                <Link href="/auth/logout">Sign out</Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Button
                        variant="default"
                        className={`px-4 py-2 ${mobile ? 'w-full' : ''}`}
                        onClick={() => setIsOpen(false)}
                        asChild
                    >
                        <Link href="/auth/signin">Sign in</Link>
                    </Button>
                )}
            </>
        )
    }

    return (
        <nav className="bg-background border-b border-border shadow-sm px-6 py-4 fixed w-[100%] top-0 z-50">
            <div className="flex items-center justify-between">
                {/* App name */}
                <div className="text-2xl font-bold text-primary cursor-default select-none">
                    Workforest
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map(({ label, href }) => (
                                <NavigationMenuLink asChild key={href}>
                                    <Link href={href} className="px-4 py-2 block">
                                        {label}
                                    </Link>
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {renderNavEnd()}
                </div>

                {/* Mobile toggle */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                        <motion.div
                            key={isOpen ? 'close' : 'open'}
                            initial={{ rotate: isOpen ? -90 : 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: isOpen ? 90 : -90, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </motion.div>
                    </Button>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden mt-4 flex flex-col space-y-4 items-center"
                    >
                        {menuItems.map(({ label, href }) => (
                            <Link
                                key={href}
                                href={href}
                                className="block w-full text-center rounded-md px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}

                        {renderNavEnd(true)}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
