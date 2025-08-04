"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ServicesHero() {
  const highlights = [
    "Premium Quality Guaranteed",
    "Modern Technology Stack",
    "7+ Years Experience",
    "100% Client Satisfaction",
  ]

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            {/* <Badge className="bg-gradient-to-r from-emerald-100 to-purple-100 dark:from-emerald-900/30 dark:to-purple-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700 px-4 py-2 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Professional Web Development Services
            </Badge> */}

            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 dark:from-emerald-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Professional Web Development Services</span>
            </div>
          </motion.div>


            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
                Digital Vision
              </span>
              <br />
              Into Reality
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Premium web development services starting from $300. I combine modern technology, exceptional design, and
              7+ years of expertise to create digital solutions that drive business growth and enhance user experience.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-3 rounded-lg border border-slate-200/50 dark:border-slate-700/50"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-purple-600 hover:from-emerald-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => {
                  const pricingSection = document.getElementById("pricing")
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                View Pricing Plans
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 bg-transparent"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Get Free Consultation
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">$300+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
