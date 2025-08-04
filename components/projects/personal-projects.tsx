"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github, Lightbulb, Code, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PersonalProjects() {
  const personalProjects = [
    {
      title: "DevTools Dashboard",
      description:
        "A comprehensive dashboard for developers with code snippets, API testing, color palettes, and productivity tools.",
      image: "/placeholder.svg?height=250&width=400&text=DevTools+Dashboard",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      features: ["Code Snippets", "API Testing", "Color Tools", "Productivity"],
      status: "In Development",
      github: "https://github.com/pathan-mehedi/devtools-dashboard",
      demo: "https://devtools.mehedipathan.dev",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "Expense Tracker Pro",
      description:
        "Smart expense tracking app with AI-powered categorization, budget planning, and financial insights.",
      image: "/placeholder.svg?height=250&width=400&text=Expense+Tracker",
      technologies: ["React Native", "Node.js", "MongoDB", "OpenAI API"],
      features: ["AI Categorization", "Budget Planning", "Analytics", "Multi-Currency"],
      status: "Live",
      github: "https://github.com/pathan-mehedi/expense-tracker",
      demo: "https://expense-tracker.mehedipathan.dev",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Portfolio Generator",
      description:
        "Automated portfolio website generator for developers with customizable themes and deployment integration.",
      image: "/placeholder.svg?height=250&width=400&text=Portfolio+Generator",
      technologies: ["Next.js", "TypeScript", "Vercel API", "GitHub API"],
      features: ["Theme Customization", "Auto Deployment", "GitHub Integration", "SEO Optimized"],
      status: "Live",
      github: "https://github.com/pathan-mehedi/portfolio-generator",
      demo: "https://portfolio-gen.mehedipathan.dev",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "Task Management Suite",
      description:
        "Advanced task management application with team collaboration, time tracking, and project analytics.",
      image: "/placeholder.svg?height=250&width=400&text=Task+Management",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Redis"],
      features: ["Team Collaboration", "Time Tracking", "Analytics", "Notifications"],
      status: "Live",
      github: "https://github.com/pathan-mehedi/task-suite",
      demo: "https://tasks.mehedipathan.dev",
      icon: <Code className="w-6 h-6" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500"
      case "In Development":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Personal Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passion projects and experiments showcasing creativity, innovation, and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 border-0">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                      {project.icon}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(project.status)} text-white`}>{project.status}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button
                      size="sm"
                      asChild
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <Link href={project.github} target="_blank">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
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
