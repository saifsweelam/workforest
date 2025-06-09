import { Link } from "@inertiajs/react"
import { Github, Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 px-6 md:px-12 lg:px-24 text-muted-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left: About */}
        <div>
          <h4 className="text-lg font-semibold text-accent-foreground mb-4">
            About
          </h4>
          <p className="leading-relaxed">
            Built with privacy and transparency at its core. Fully open source and made with passion.
          </p>
        </div>

        {/* Center: Links */}
        <div>
          <h4 className="text-lg font-semibold text-accent-foreground mb-4">
            Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="hover:underline hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="hover:underline hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:underline hover:text-primary transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h4 className="text-lg font-semibold text-accent-foreground mb-4">
            Contact
          </h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:saifsweelam@gmail.com"
                className="hover:underline hover:text-primary"
              >
                saifsweelam@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="w-5 h-5" />
              <a
                href="https://x.com/saifsweelam"
                target="_blank"
                className="hover:underline hover:text-primary"
              >
                @saifsweelam
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              <a
                href="https://github.com/saifsweelam"
                target="_blank"
                className="hover:underline hover:text-primary"
              >
                github.com/saifsweelam
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Seif El-Din Sweilam. All rights reserved.
      </div>
    </footer>
  )
}
