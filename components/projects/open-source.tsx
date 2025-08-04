"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Star, GitFork, Eye, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function OpenSourceProjects() {
  const openSourceProjects = [
    {
      title: "Next.js Starter Template",
      description:
        "A comprehensive Next.js starter template with TypeScript, Tailwind CSS, authentication, and deployment ready configuration.",
      language: "TypeScript",
      stars: 245,
      forks: 67,
      watchers: 23,
      topics: ["nextjs", "typescript", "tailwindcss", "starter-template"],
      lastUpdated: "2024-01-15",
      url: "https://github.com/pathan-mehedi/nextjs-starter",
    },
    {
      title: "React Component Library",
      description:
        "A modern React component library with TypeScript support, Storybook documentation, and comprehensive testing.",
      language: "TypeScript",
      stars: 189,
      forks: 34,
      watchers: 18,
      topics: ["react", "components", "typescript", "storybook"],
      lastUpdated: "2024-01-10",
      url: "https://github.com/pathan-mehedi/react-ui-lib",
    },
    {
      title: "WordPress Theme Framework",
      description:
        "A modern WordPress theme framework with Gutenberg blocks, custom post types, and advanced customization options.",
      language: "PHP",
      stars: 156,
      forks: 45,
      watchers: 12,
      topics: ["wordpress", "theme", "gutenberg", "php"],
      lastUpdated: "2023-12-20",
      url: "https://github.com/pathan-mehedi/wp-theme-framework",
    },
    {
      title: "API Rate Limiter",
      description: "A flexible and configurable rate limiting middleware for Node.js applications with Redis support.",
      language: "JavaScript",
      stars: 98,
      forks: 23,
      watchers: 8,
      topics: ["nodejs", "rate-limiting", "middleware", "redis"],
      lastUpdated: "2023-11-30",
      url: "https://github.com/pathan-mehedi/api-rate-limiter",
    },
    {
      title: "Database Migration Tool",
      description:
        "A cross-database migration tool supporting MySQL, PostgreSQL, and MongoDB with rollback capabilities.",
      language: "Node.js",
      stars: 134,
      forks: 28,
      watchers: 15,
      topics: ["database", "migration", "mysql", "postgresql", "mongodb"],
      lastUpdated: "2023-10-15",
      url: "https://github.com/pathan-mehedi/db-migration-tool",
    },
    {
      title: "React Native Utils",
      description: "A collection of utility functions and hooks for React Native development with TypeScript support.",
      language: "TypeScript",
      stars: 87,
      forks: 19,
      watchers: 6,
      topics: ["react-native", "utils", "hooks", "typescript"],
      lastUpdated: "2023-09-25",
      url: "https://github.com/pathan-mehedi/rn-utils",
    },
  ]

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: "bg-blue-500",
      JavaScript: "bg-yellow-500",
      PHP: "bg-purple-500",
      "Node.js": "bg-green-500",
    }
    return colors[language] || "bg-gray-500"
  }

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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Open Source Contributions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contributing to the developer community with useful tools, libraries, and templates
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">{project.title}</CardTitle>
                    <Github className="w-5 h-5 text-gray-400" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Language and Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`} />
                      <span className="text-gray-600 dark:text-gray-300">{project.language}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{project.forks}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.watchers}</span>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="flex flex-wrap gap-1">
                    {project.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  {/* Last Updated */}
                  <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="w-3 h-3" />
                    <span>Updated {new Date(project.lastUpdated).toLocaleDateString()}</span>
                  </div>

                  <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                    <Link href={project.url} target="_blank">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="bg-gray-900 hover:bg-gray-800 text-white">
            <Link href="https://github.com/pathan-mehedi" target="_blank">
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
