import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SiGithub } from '@icons-pack/react-simple-icons'
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    const [user] = useState<{ name: string } | null>(null); // Replace with actual user state management

    return (
        <nav className="flex items-center px-6 py-4 bg-background border-b border-border shadow-sm">
            {/* Left side - App Name */}
            <div className="text-2xl text-primary cursor-default select-none">
                Workforest
            </div>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right side buttons */}
            <div className="flex items-center space-x-6">
                {/* GitHub button */}
                <Button
                    variant="ghost"
                    aria-label="GitHub repository"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                    asChild
                >
                    <a href="https://github.com/saifsweelam" target="_blank"><SiGithub className="w-6 h-6 text-primary" /></a>
                </Button>

                {/* Theme toggle */}
                <ThemeToggle />

                {/* Auth buttons or user info */}
                {user ? (
                    <>
                        <span className="text-sm font-medium text-foreground mr-4 select-text">
                            {user.name}
                        </span>
                        <Button variant="outline" className="px-4 py-2">
                            Sign out
                        </Button>
                    </>
                ) : (
                    <Button variant="default" className="px-6 py-2">
                        Sign in
                    </Button>
                )}
            </div>
        </nav>
    );
}
