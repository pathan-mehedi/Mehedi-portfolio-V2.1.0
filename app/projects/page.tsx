"use client"

import { motion } from "framer-motion"
import { HeaderUnified } from "@/components/header-unified"
import { FeaturedProjectsV2 } from "@/components/projects/featured-projects-v2"
import { ClientWork } from "@/components/projects/client-work"
import { OpenSourceProjects } from "@/components/projects/open-source"
import { PersonalProjects } from "@/components/projects/personal-projects"
import { WordPressProjects } from "@/components/projects/wordpress-projects"
import { MobileApps } from "@/components/projects/mobile-apps"
import { ContactForm } from "@/components/contact-form"
import { Breadcrumb } from "@/components/breadcrumb"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Sparkles, Code, Palette, Smartphone, Globe, Database } from "lucide-react"

export default function ProjectsPageV2() {
  const projectCategories = [
    { name: "Featured", icon: Sparkles, count: "3", color: "emerald" },
    { name: "Client Work", icon: Code, count: "6", color: "teal" },
    { name: "Open Source", icon: Globe, count: "6", color: "blue" },
    { name: "Personal", icon: Palette, count: "4", color: "purple" },
    { name: "WordPress", icon: Database, count: "6", color: "orange" },
    { name: "Mobile Apps", icon: Smartphone, count: "4", color: "pink" },
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderUnified />
      <WhatsAppButton />

      <div className="pt-20 max-w-7xl mx-auto px-6">
        <Breadcrumb />
      </div>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-slate-100 mb-6 leading-tight">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              A comprehensive showcase of my work spanning 7+ years in web development. From enterprise applications to
              personal projects, demonstrating expertise in modern technologies and exceptional client satisfaction.
            </p>

            {/* Project Categories Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto"
            >
              {projectCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`w-8 h-8 bg-${category.color}-100 dark:bg-${category.color}-900/30 rounded-lg flex items-center justify-center mb-2 mx-auto`}
                  >
                    <category.icon className={`w-4 h-4 text-${category.color}-600 dark:text-${category.color}-400`} />
                  </div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{category.name}</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">{category.count} projects</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-6 mt-12 text-sm"
            >
              <div className="flex items-center space-x-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-4 py-2 rounded-full">
                <span className="font-semibold">50+ Projects Completed</span>
              </div>
              <div className="flex items-center space-x-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 px-4 py-2 rounded-full">
                <span className="font-semibold">100% Client Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 px-4 py-2 rounded-full">
                <span className="font-semibold">7+ Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjectsV2 />

      {/* Client Work */}
      <ClientWork />

      {/* Open Source */}
      <OpenSourceProjects />

      {/* Personal Projects */}
      <PersonalProjects />

      {/* WordPress Projects */}
      <WordPressProjects />

      {/* Mobile Apps */}
      <MobileApps />

      {/* Contact Form */}
      <ContactForm />

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  )
}
