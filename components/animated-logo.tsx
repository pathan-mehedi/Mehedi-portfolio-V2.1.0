"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function AnimatedLogo() {
  return (
    <Link href="/" className="group">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2"
      >
        {/* Logo Icon */}
        <motion.div
          className="relative w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg"
          whileHover={{ rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-xl opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />

          {/* Logo Text */}
          <motion.span
            className="relative text-white font-bold text-lg z-10"
            animate={{
              textShadow: [
                "0 0 0px rgba(16, 185, 129, 0)",
                "0 0 10px rgba(16, 185, 129, 0.5)",
                "0 0 0px rgba(16, 185, 129, 0)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            MP
          </motion.span>

          {/* Floating Particles */}
          <motion.div
            className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              y: [-2, -8, -2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.5,
            }}
          />
          <motion.div
            className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"
            animate={{
              y: [2, 6, 2],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: 1,
            }}
          />
        </motion.div>

        {/* Logo Text */}
        <motion.div
          className="flex flex-col"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
            whileHover={{
              backgroundImage: "linear-gradient(to right, #10b981, #14b8a6, #10b981)",
              transition: { duration: 0.5 },
            }}
          >
            Mehedi
          </motion.span>
          <motion.span
            className="text-sm text-gray-600 dark:text-gray-400 -mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Pathan
          </motion.span>
        </motion.div>

        {/* Hover Effect Line */}
        <motion.div
          className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}
