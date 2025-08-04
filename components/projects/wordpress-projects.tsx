"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Download, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function WordPressProjects() {
  const wordpressProjects = [
    {
      title: "Corporate Business Theme",
      description:
        "Professional WordPress theme for corporate websites with advanced customization options and Gutenberg blocks.",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Theme",
      type: "Theme",
      downloads: "15,000+",
      rating: 4.8,
      features: ["Gutenberg Blocks", "Custom Post Types", "WooCommerce Ready", "SEO Optimized"],
      technologies: ["PHP", "JavaScript", "SCSS", "WordPress API"],
      price: "Premium",
      demo: "https://corporate-theme-demo.com",
      download: "https://themeforest.net/item/corporate-theme",
    },
    {
      title: "E-Commerce Store Builder",
      description: "Complete WooCommerce theme with advanced product showcase, wishlist, and comparison features.",
      image: "/placeholder.svg?height=300&width=400&text=E-Commerce+Theme",
      type: "Theme",
      downloads: "12,500+",
      rating: 4.9,
      features: ["WooCommerce", "Product Comparison", "Wishlist", "Multi-Vendor"],
      technologies: ["PHP", "JavaScript", "WooCommerce API", "AJAX"],
      price: "Premium",
      demo: "https://ecommerce-theme-demo.com",
      download: "https://themeforest.net/item/ecommerce-theme",
    },
    {
      title: "Advanced SEO Plugin",
      description:
        "Comprehensive SEO plugin with schema markup, social media integration, and performance optimization.",
      image: "/placeholder.svg?height=300&width=400&text=SEO+Plugin",
      type: "Plugin",
      downloads: "25,000+",
      rating: 4.7,
      features: ["Schema Markup", "Social Integration", "Performance", "Analytics"],
      technologies: ["PHP", "JavaScript", "WordPress Hooks", "REST API"],
      price: "Free",
      demo: "https://seo-plugin-demo.com",
      download: "https://wordpress.org/plugins/advanced-seo",
    },
    {
      title: "Portfolio Showcase Theme",
      description:
        "Creative portfolio theme for designers and developers with stunning animations and responsive design.",
      image: "/placeholder.svg?height=300&width=400&text=Portfolio+Theme",
      type: "Theme",
      downloads: "8,500+",
      rating: 4.6,
      features: ["Portfolio Layouts", "Animations", "Contact Forms", "Responsive"],
      technologies: ["PHP", "JavaScript", "CSS3", "jQuery"],
      price: "Premium",
      demo: "https://portfolio-theme-demo.com",
      download: "https://themeforest.net/item/portfolio-theme",
    },
    {
      title: "Booking Management System",
      description: "Complete booking and reservation system plugin with calendar integration and payment processing.",
      image: "/placeholder.svg?height=300&width=400&text=Booking+Plugin",
      type: "Plugin",
      downloads: "18,000+",
      rating: 4.8,
      features: ["Calendar Booking", "Payment Gateway", "Email Notifications", "Multi-Service"],
      technologies: ["PHP", "JavaScript", "MySQL", "PayPal API"],
      price: "Premium",
      demo: "https://booking-plugin-demo.com",
      download: "https://codecanyon.net/item/booking-system",
    },
    {
      title: "Restaurant & Food Theme",
      description: "Beautiful restaurant theme with online ordering, menu management, and reservation system.",
      image: "/placeholder.svg?height=300&width=400&text=Restaurant+Theme",
      type: "Theme",
      downloads: "10,200+",
      rating: 4.7,
      features: ["Online Ordering", "Menu Management", "Reservations", "Gallery"],
      technologies: ["PHP", "JavaScript", "WooCommerce", "Custom Fields"],
      price: "Premium",
      demo: "https://restaurant-theme-demo.com",
      download: "https://themeforest.net/item/restaurant-theme",
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">WordPress Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Custom WordPress themes and plugins with modern functionality and exceptional user experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wordpressProjects.map((project, index) => (
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
                  <div className="absolute top-4 left-4">
                    <Badge className={project.type === "Theme" ? "bg-blue-500" : "bg-green-500"}>{project.type}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className={
                        project.price === "Free" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }
                    >
                      {project.price}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                      <Download className="w-4 h-4" />
                      <span>{project.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{project.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center space-x-1 text-xs text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
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

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                      <Link href={project.demo} target="_blank">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                    <Button size="sm" asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
                      <Link href={project.download} target="_blank">
                        <Download className="w-3 h-3 mr-1" />
                        Get It
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* WordPress Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="https://profiles.wordpress.org/mehedipathan" target="_blank">
              View WordPress Profile
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
