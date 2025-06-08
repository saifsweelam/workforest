import { motion } from "framer-motion"

const sparkles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
}))

export function Sparkles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {sparkles.map(({ id, top, left, delay }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="absolute w-1.5 h-1.5 rounded-full 
                     bg-gray-400/40 dark:bg-purple-400 
                     shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] dark:blur-sm"
          style={{ top, left }}
        />
      ))}
    </div>
  )
}
