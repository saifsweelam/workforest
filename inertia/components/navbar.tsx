import { useTheme } from "@/providers/themeProvider";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { SiGithub } from '@icons-pack/react-simple-icons'

export function Navbar() {
    const { theme, setTheme } = useTheme();
    const [user] = useState<{ name: string } | null>(null); // Replace with actual user state management

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

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
                <Button
                    variant="ghost"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors flex items-center justify-center"
                    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? (
                        <Sun className="w-6 h-6 text-yellow-400 animate-pulse" />
                    ) : (
                        <Moon className="w-6 h-6 text-gray-700 animate-pulse" />
                    )}
                </Button>

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
