import { motion } from "framer-motion";
import vector from '@/assets/vector-1.svg';

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 px-6 sm:px-12">
      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[120vw] h-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-slate-300/20 via-slate-400/10 to-transparent blur-3xl dark:from-slate-500/20 dark:via-slate-600/10 z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text & Stats */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            Built for ambitious job hunters
          </h2>
          <p className="text-muted-foreground text-lg">
            Track every application, search curated job listings, and manage your career like a pro.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              { stat: "1K+", label: "Jobs Tracked" },
              { stat: "500+", label: "Companies" },
              { stat: "4.9/5", label: "User Satisfaction" },
              { stat: "30%", label: "Faster Hires" },
            ].map(({ stat, label }, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-primary">{stat}</p>
                <p className="text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Illustration */}
        <motion.div
          initial={{ y: 20, opacity: 1 }}
          animate={{ y: [20, 0, 20], opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <img
            src={vector}
            alt="Job Hunting Visual"
            width={500}
            height={500}
            className="max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
