import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ready to take control of your data?
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Join our privacy-first community. Open source. Zero tracking. Maximum empowerment.
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
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Optional decorative element */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-muted/20 rounded-full blur-3xl pointer-events-none" />
    </section>
  )
}
