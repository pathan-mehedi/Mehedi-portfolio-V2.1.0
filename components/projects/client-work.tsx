"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Star, Clock, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ClientWork() {
  const clientProjects = [
    {
      title: "Healthcare Management System",
      client: "MediCare Solutions",
      description:
        "Complete healthcare management platform with patient records, appointment scheduling, and telemedicine integration.",
      image: "/placeholder.svg?height=300&width=400&text=Healthcare+System",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebRTC"],
      duration: "6 months",
      budget: "$45,000",
      rating: 5,
      testimonial: "Exceptional work! The system has improved our efficiency by 60%.",
      year: "2024",
    },
    {
      title: "Financial Dashboard & Analytics",
      client: "FinTech Innovations",
      description: "Real-time financial dashboard with advanced analytics, reporting, and automated trading features.",
      image: "/placeholder.svg?height=300&width=400&text=Financial+Dashboard",
      technologies: ["React.js", "D3.js", "Node.js", "MongoDB"],
      duration: "4 months",
      budget: "$35,000",
      rating: 5,
      testimonial: "Outstanding technical expertise and attention to detail.",
      year: "2023",
    },
    {
      title: "Restaurant Chain Management",
      client: "FoodChain Corp",
      description: "Multi-location restaurant management system with inventory, POS integration, and staff scheduling.",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Management",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      duration: "5 months",
      budget: "$40,000",
      rating: 5,
      testimonial: "Delivered exactly what we needed, on time and within budget.",
      year: "2023",
    },
    {
      title: "Educational Platform",
      client: "EduTech Academy",
      description: "Online learning platform with course management, video streaming, and student progress tracking.",
      image: "/placeholder.svg?height=300&width=400&text=Educational+Platform",
      technologies: ["Next.js", "Prisma", "AWS", "Stripe"],
      duration: "7 months",
      budget: "$55,000",
      rating: 5,
      testimonial: "Professional, reliable, and delivered beyond expectations.",
      year: "2022",
    },
    {
      title: "Logistics & Supply Chain",
      client: "LogiFlow Systems",
      description:
        "Comprehensive logistics management with real-time tracking, route optimization, and inventory control.",
      image: "/placeholder.svg?height=300&width=400&text=Logistics+System",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Google Maps API"],
      duration: "8 months",
      budget: "$65,000",
      rating: 5,
      testimonial: "Transformed our operations completely. Highly recommended!",
      year: "2022",
    },
    {
      title: "Real Estate Portal",
      client: "PropertyPro Ltd",
      description: "Property listing platform with advanced search, virtual tours, and agent management system.",
      image: "/placeholder.svg?height=300&width=400&text=Real+Estate+Portal",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Cloudinary"],
      duration: "6 months",
      budget: "$50,000",
      rating: 5,
      testimonial: "Excellent communication and top-quality deliverables.",
      year: "2021",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Work</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Successful projects delivered for clients across various industries, showcasing versatility and expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, index) => (
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
                    <Badge className="bg-green-500 text-white">{project.year}</Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl text-gray-900 dark:text-white mb-2">{project.title}</CardTitle>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{project.client}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                      <Clock className="w-4 h-4 mx-auto mb-1 text-blue-600 dark:text-blue-400" />
                      <div className="font-semibold text-blue-600 dark:text-blue-400">{project.duration}</div>
                    </div>
                    <div className="text-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                      <DollarSign className="w-4 h-4 mx-auto mb-1 text-green-600 dark:text-green-400" />
                      <div className="font-semibold text-green-600 dark:text-green-400">{project.budget}</div>
                    </div>
                    <div className="text-center p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                      <Star className="w-4 h-4 mx-auto mb-1 text-yellow-600 dark:text-yellow-400" />
                      <div className="font-semibold text-yellow-600 dark:text-yellow-400">{project.rating}/5</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-xs italic text-gray-500 dark:text-gray-400 border-l-2 border-blue-200 dark:border-blue-800 pl-3">
                    "{project.testimonial}"
                  </blockquote>

                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <ExternalLink className="w-3 h-3 mr-2" />
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
