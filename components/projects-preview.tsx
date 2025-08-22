"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsPreview() {
  const featuredProjects = [
    {
      title: "MTS - Enterprise LMS",
      description: "Enterprise-ready LMS built with Next.js 14, TypeScript, and Tailwind CSS. Features responsive dashboards for students, courses, and analytics with clean, extensible architecture.",
      image: "/enterpriseLms.png?height=300&width=400&text=LMS+Platform",
      technologies: ["Next.js", "TypeScript", "MongoDB", "React Js 18"],
      category: "Enterprise",
    },
    {
      title: "E-Commerce Multi-Vendor",
      description: "Bangladesh’s leading digital product store offering instant delivery of PUBG UC, iTunes Gift Cards, and a wide range of premium digital items.",
      image: "/multiVendorEcommer.png?height=300&width=400&text=E-Commerce+Platform",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe", "SSLCommerz", "Framer Motion"],
      category: "E-Commerce",
    },
    {
      title: "Zenith Cleaning Co",
      description: "Complete cleaning service management solution with online booking, service scheduling, customer management, and automated reminders.",
      image: "/zenithCleaningCo.png?height=300&width=400&text=Zenith+Cleaning+Co",
      technologies: ["Next.js", "TypeScript", "React Js 18", "Node.js", "Tailwind"],
      category: "StartUp",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of my best work showcasing technical expertise and business impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 border-0">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-500 text-white">{project.category}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4"
          >
            <Link href="/projects">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
