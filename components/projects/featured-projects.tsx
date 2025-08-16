"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedProjects() {
  const featuredProjects = [
    {
      title: "Enterprise Learning Management System",
      description:
        "A comprehensive LMS platform built for Moonju Tech Solution serving 10,000+ students with real-time collaboration, video streaming, and advanced analytics.",
      image: "/placeholder.svg?height=400&width=600&text=LMS+Platform",
      technologies: ["Next.js", "TypeScript", "Node.js", "MongoDB", "AWS", "Socket.io"],
      metrics: {
        users: "10,000+",
        performance: "99.9%",
        satisfaction: "4.9/5",
      },
      links: {
        live: "https://lms.moonjutech.com",
        github: "https://github.com/mehedi-pathan/enterprise-lms",
      },
      status: "Live",
      year: "2024",
    },
    {
      title: "E-Commerce Multi-Vendor Platform",
      description:
        "Full-stack e-commerce solution with vendor management, real-time inventory, payment processing, and advanced analytics dashboard.",
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce+Platform",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe", "Redis", "Docker"],
      metrics: {
        vendors: "500+",
        transactions: "$2M+",
        uptime: "99.8%",
      },
      links: {
        live: "https://marketplace-demo.com",
        github: "https://github.com/mehedi-pathan/multivendor-ecommerce",
      },
      status: "Live",
      year: "2023",
    },
    {
      title: "Real Estate CRM & Portal",
      description:
        "Comprehensive real estate management system with property listings, CRM, virtual tours, and automated marketing campaigns.",
      image: "/placeholder.svg?height=400&width=600&text=Real+Estate+CRM",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "AWS S3", "Tailwind"],
      metrics: {
        properties: "5,000+",
        agents: "200+",
        leads: "50,000+",
      },
      links: {
        live: "https://realestate-crm.com",
        github: "https://github.com/mehedi-pathan/realestate-crm",
      },
      status: "Live",
      year: "2023",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flagship projects that showcase technical excellence, scalability, and business impact
          </p>
        </motion.div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                    {/* Image */}
                    <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">{project.status}</Badge>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          <Calendar className="w-3 h-3 mr-1" />
                          {project.year}
                        </Badge>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {Object.values(project.metrics)[0]}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {Object.keys(project.metrics)[0]}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                            {Object.values(project.metrics)[1]}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {Object.keys(project.metrics)[1]}
                          </div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                            {Object.values(project.metrics)[2]}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {Object.keys(project.metrics)[2]}
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex space-x-4">
                        <Button
                          asChild
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        >
                          <Link href={project.links.live} target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Live
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.links.github} target="_blank">
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </Link>
                        </Button>
                      </div>
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
