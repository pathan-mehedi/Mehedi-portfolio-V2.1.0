"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Calendar, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedProjectsV2() {
  const featuredProjects = [
    {
      title: "MTS - Enterprise Learning Management System",
      description:
        "Enterprise-ready LMS built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive dashboards for students, courses, and analytics with clean, extensible architecture.",
      image: "/enterpriseLms.png?height=400&width=600&text=LMS+Platform",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "ShadCn Ui"],
      metrics: {
        users: "1,000+",
        performance: "99.9%",
        satisfaction: "4.9/5",
      },
      links: {
        live: "https://enterpriselms.netlify.app/",
        github: "https://github.com/mehedi-pathan/Enterprise-LMS/tree/main",
      },
      status: "Live",
      year: "2024",
      category: "Enterprise",
      impact: "Increased student engagement by 85%",
    },
    {
      title: "E-Commerce Multi-Vendor Platform",
      description:
        "Bangladesh’s leading digital product store offering instant delivery of PUBG UC, iTunes Gift Cards, and a wide range of premium digital items. Built with a focus on speed, trust, and seamless user experience.",
      image: "/multiVendorEcommer.png?height=400&width=600&text=E-Commerce+Platform",
      technologies: ["React.js", "Node.js", "TypeScript", "Stripe", "Redis", "Docker", "Stripe/SSLCommerz", "Framer Motion"],
      metrics: {
        Transactions: "$1M+",
        Vendors: "500+",
        uptime: "99.8%",
      },
      links: {
        live: "https://arektastore.netlify.app/",
        github: "github.com/mehedi-pathan/arekta-store-a-ecommerce",
      },
      status: "Live",
      year: "2024",
    },
    {
      title: "Zenith Cleaning Co – Cleaning Service",
      description:
        "Complete cleaning service management solution with online booking, service scheduling, customer management, and automated reminders.",
      image: "/zenithCleaningCo.png?height=400&width=600&text=Zenith+Cleaning+Co",
      technologies: ["Next.js", "TypeScript",  "React Js 18", "Node.js", "Tailwind"],
      metrics: {
        Sessions: "1,000+",
        Cleaners: "200+",
        Clients: "2,500+",
      },
      links: {
        live: "https://zenithcleaningco.netlify.app/services",
        github: "https://github.com/mehedi-pathan/Zenith-Cleaning",
      },
      status: "Live",
      year: "2023",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-500 dark:bg-emerald-600"
      case "Development":
        return "bg-amber-500 dark:bg-amber-600"
      default:
        return "bg-slate-500 dark:bg-slate-600"
    }
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Showcase projects that demonstrate technical excellence, scalability, and significant business impact
          </p>
        </motion.div>

        <div className="space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <div className="aspect-[4/3] overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <Badge className={`${getStatusColor(project.status)} text-white border-0`}>
                          {project.status}
                        </Badge>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge
                          variant="secondary"
                          className="bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100"
                        >
                          {project.category}
                        </Badge>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute bottom-4 left-4">
                        <Badge
                          variant="outline"
                          className="bg-white/90 dark:bg-slate-800/90 border-slate-300 dark:border-slate-600"
                        >
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-4">{project.title}</h3>

                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                          {project.description}
                        </p>

                        {/* Impact */}
                        <div className="flex items-center space-x-2 mb-6">
                          <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-300 font-semibold">{project.impact}</span>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                              {Object.values(project.metrics)[0]}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                              {Object.keys(project.metrics)[0]}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-xl">
                            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                              {Object.values(project.metrics)[1]}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                              {Object.keys(project.metrics)[1]}
                            </div>
                          </div>
                          <div className="text-center p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">
                              {Object.values(project.metrics)[2]}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 capitalize">
                              {Object.keys(project.metrics)[2]}
                            </div>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex space-x-4">
                          <Button
                            asChild
                            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white dark:text-slate-900"
                          >
                            <Link href={project.links.live} target="_blank">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Live
                            </Link>
                          </Button>
                          <Button
                            variant="outline"
                            asChild
                            className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 bg-transparent"
                          >
                            <Link href={project.links.github} target="_blank">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
