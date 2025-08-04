"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, MapPin, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSectionV2() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center space-x-4"
              >
                <Badge className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
                  Available for Projects
                </Badge>
                <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <MapPin className="w-4 h-4 mr-1" />
                  Dhaka, Bangladesh
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-tight"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Mehedi
                </span>
                <br />
                <span className="text-4xl lg:text-5xl text-slate-700 dark:text-slate-300 font-semibold">
                  Full-Stack Developer
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed"
              >
                Web Developer with 7+ years of experience crafting exceptional digital experiences. Specializing in
                Next.js, TypeScript, React.js, and WordPress development while building leadership skills for future
                CTO/COO roles.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-400"
              >
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>7+ Years Experience</span>
                </div>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <span>50+ Projects Completed</span>
                <div className="w-1 h-1 bg-slate-400 rounded-full" />
                <span>100% Client Satisfaction</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-900 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 bg-transparent"
                asChild
              >
                <Link href="/projects">
                  <Download className="w-5 h-5 mr-2" />
                  View Resume
                </Link>
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="pt-8 border-t border-slate-200 dark:border-slate-700"
            >
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Specialized in:</p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "React.js", "Node.js", "WordPress", "MongoDB"].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 w-20 h-20 bg-emerald-500/20 dark:bg-emerald-400/10 rounded-lg blur-sm"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 dark:bg-teal-400/10 rounded-full blur-sm"
              />

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-3xl p-8 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-700/50">
                <Image
                  src="/placeholder.svg?height=500&width=400&text=Mehedi+Pathan+V2"
                  alt="Mehedi Pathan - Senior Web Developer V2"
                  width={400}
                  height={500}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                />

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -right-4 top-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">7+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Years Exp.</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -left-4 bottom-20 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                >
                  <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">50+</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Projects</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
