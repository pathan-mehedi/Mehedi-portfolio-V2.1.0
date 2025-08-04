"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Smartphone, Download, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function MobileApps() {
  const mobileApps = [
    {
      title: "HealthTracker Pro",
      description:
        "Comprehensive health and fitness tracking app with AI-powered insights, workout plans, and nutrition guidance.",
      image: "/placeholder.svg?height=400&width=300&text=HealthTracker+App",
      platform: "React Native",
      downloads: "50,000+",
      rating: 4.8,
      features: ["AI Insights", "Workout Plans", "Nutrition Tracking", "Progress Analytics"],
      technologies: ["React Native", "TypeScript", "Firebase", "TensorFlow"],
      appStore: "https://apps.apple.com/app/healthtracker-pro",
      playStore: "https://play.google.com/store/apps/details?id=com.healthtracker",
      status: "Live",
    },
    {
      title: "TaskFlow Mobile",
      description:
        "Productivity app for task management with team collaboration, time tracking, and project organization.",
      image: "/placeholder.svg?height=400&width=300&text=TaskFlow+App",
      platform: "React Native",
      downloads: "25,000+",
      rating: 4.6,
      features: ["Team Collaboration", "Time Tracking", "Project Management", "Offline Sync"],
      technologies: ["React Native", "Redux", "SQLite", "Push Notifications"],
      appStore: "https://apps.apple.com/app/taskflow-mobile",
      playStore: "https://play.google.com/store/apps/details?id=com.taskflow",
      status: "Live",
    },
    {
      title: "ExpenseWise",
      description:
        "Smart expense tracking and budgeting app with receipt scanning, category insights, and financial planning.",
      image: "/placeholder.svg?height=400&width=300&text=ExpenseWise+App",
      platform: "React Native",
      downloads: "35,000+",
      rating: 4.7,
      features: ["Receipt Scanning", "Budget Planning", "Category Insights", "Export Reports"],
      technologies: ["React Native", "OCR API", "Chart.js", "AsyncStorage"],
      appStore: "https://apps.apple.com/app/expensewise",
      playStore: "https://play.google.com/store/apps/details?id=com.expensewise",
      status: "Live",
    },
    {
      title: "LearnHub",
      description: "Educational platform app with interactive courses, progress tracking, and offline content access.",
      image: "/placeholder.svg?height=400&width=300&text=LearnHub+App",
      platform: "React Native",
      downloads: "40,000+",
      rating: 4.9,
      features: ["Interactive Courses", "Progress Tracking", "Offline Access", "Certificates"],
      technologies: ["React Native", "Video Player", "SQLite", "PDF Viewer"],
      appStore: "https://apps.apple.com/app/learnhub",
      playStore: "https://play.google.com/store/apps/details?id=com.learnhub",
      status: "Live",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Mobile Applications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cross-platform mobile apps built with React Native, delivering native performance and user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mobileApps.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="perspective-1000"
            >
              <Card className="h-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border-0 transform-gpu">
                <div className="relative">
                  <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-6 text-center">
                    <div className="relative mx-auto w-32 h-48 bg-black rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.title}
                          width={300}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Phone notch */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-800 rounded-full" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">{app.status}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 dark:text-white flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-indigo-600" />
                    {app.title}
                  </CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {app.platform}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{app.description}</p>

                  {/* App Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>{app.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{app.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {app.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-2 text-xs text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {app.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Store Links */}
                  <div className="space-y-2 pt-2">
                    <Button size="sm" asChild className="w-full bg-black hover:bg-gray-800 text-white">
                      <Link href={app.appStore} target="_blank">
                        App Store
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="w-full bg-transparent">
                      <Link href={app.playStore} target="_blank">
                        Google Play
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Development Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Mobile App?</h3>
              <p className="text-lg mb-6 opacity-90">
                Let's build your next mobile application with React Native for iOS and Android
              </p>
              <Button size="lg" variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                <Link href="#contact" className="flex items-center">
                  Start Your Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
