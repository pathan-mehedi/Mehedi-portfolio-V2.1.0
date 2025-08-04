"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Sparkles } from "lucide-react"

export function AnimatedLogoV2() {
  return (
    <Link href="/" className="group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2.5 relative"
      >
        {/* Logo Icon Container */}
        <motion.div
          className="relative w-11 h-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden group-hover:shadow-xl transition-shadow duration-500"
          whileHover={{
            rotate: [0, -2, 2, 0],
            transition: { duration: 0.6, type: "spring", stiffness: 400 },
          }}
        >
          {/* Animated Gradient Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-emerald-300 dark:via-teal-400 dark:to-cyan-500"
            animate={{
              background: [
                "linear-gradient(135deg, #34d399, #14b8a6, #06b6d4)",
                "linear-gradient(135deg, #10b981, #0d9488, #0891b2)",
                "linear-gradient(135deg, #34d399, #14b8a6, #06b6d4)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Overlay Pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1.5px, transparent 1.5px),
                               radial-gradient(circle at 75% 75%, white 1.5px, transparent 1.5px)`,
              backgroundSize: "16px 16px",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          {/* Main Logo Content */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Code Icon Background */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Code className="w-5 h-5 text-white/30 dark:text-slate-900/30" />
            </motion.div>

            {/* Main Text */}
            <motion.div
              className="relative flex items-center justify-center"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255, 255, 255, 0)",
                  "0 0 8px rgba(255, 255, 255, 0.3)",
                  "0 0 0px rgba(255, 255, 255, 0)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-white dark:text-slate-900 font-bold text-lg tracking-tight">MP</span>
            </motion.div>
          </motion.div>

          {/* Floating Particles */}
          <motion.div
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-white/50 dark:bg-slate-800/50 rounded-full"
            animate={{
              y: [-1.5, -4, -1.5],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute bottom-1.5 left-1.5 w-1 h-1 bg-white/40 dark:bg-slate-800/40 rounded-full"
            animate={{
              y: [1.5, 3.5, 1.5],
              opacity: [0.4, 0.9, 0.4],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2.3,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1.2,
            }}
          />

          {/* Corner Sparkle */}
          <motion.div
            className="absolute -top-0.5 -right-0.5"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
              scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
          >
            <Sparkles className="w-3 h-3 text-yellow-300 dark:text-yellow-400" />
          </motion.div>

          {/* Pulse Ring */}
          <motion.div
            className="absolute inset-0 border-2 border-white/30 dark:border-slate-800/30 rounded-xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Logo Text */}
        <motion.div
          className="flex flex-col"
          initial={{ x: -12, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
        >
          <motion.div className="flex items-center space-x-1">
            <motion.span
              className="text-xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent"
              whileHover={{
                backgroundImage: [
                  "linear-gradient(to right, #059669, #0d9488, #0891b2)",
                  "linear-gradient(to right, #10b981, #14b8a6, #06b6d4)",
                  "linear-gradient(to right, #34d399, #2dd4bf, #22d3ee)",
                  "linear-gradient(to right, #059669, #0d9488, #0891b2)",
                ],
                transition: { duration: 1.2, ease: "easeInOut" },
              }}
            >
              Mehedi
            </motion.span>

            {/* Animated Dot */}
            <motion.div
              className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 dark:from-emerald-400 dark:to-teal-400 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.div
            className="flex items-center space-x-2 -mt-0.5"
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span className="text-base font-semibold text-slate-700 dark:text-slate-300">Pathan</span>
            <motion.div
              className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs font-medium"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
            >
              Dev
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Hover Effect Glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 dark:from-emerald-400/10 dark:via-teal-400/10 dark:to-cyan-400/10 rounded-xl opacity-0 group-hover:opacity-100 blur-lg -z-10"
          transition={{ duration: 0.5 }}
        />

        {/* Interactive Underline */}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />

        {/* Success Indicator */}
        <motion.div
          className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-green-400 dark:bg-green-300 rounded-full opacity-0 group-hover:opacity-100"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-green-400 dark:bg-green-300 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}
