"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Palette, Smartphone, Globe, Shield, Zap, ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ServicesSection() {
  const services = [
    {
      title: "Custom Web Development",
      description:
        "Full-stack web applications built with modern technologies for optimal performance and scalability.",
      icon: <Code className="w-8 h-8" />,
      color: "emerald",
      startingPrice: "$500",
      features: [
        "Next.js & React Applications",
        "TypeScript Development",
        "API Integration & Development",
        "Database Design & Optimization",
        "Performance & SEO Optimization",
      ],
      popular: true,
    },
    {
      title: "UI/UX Design & Development",
      description:
        "Modern, responsive designs that enhance user experience and drive business growth with premium tools.",
      icon: <Palette className="w-8 h-8" />,
      color: "purple",
      startingPrice: "$400",
      features: [
        "Responsive Design Implementation",
        "User Experience Optimization",
        "Modern UI Components",
        "Brand Integration & Consistency",
        "Cross-browser Compatibility",
      ],
      popular: false,
    },
    {
      title: "WordPress CMS Development",
      description:
        "Professional WordPress solutions with premium themes, plugins, and custom logo design for complete satisfaction.",
      icon: <Zap className="w-8 h-8" />,
      color: "orange",
      startingPrice: "$300",
      features: [
        "Premium Logo Design Included",
        "Pro Themes & Pro Plugins",
        "Professional Editor Setup",
        "Custom Development",
        "100% Client Satisfaction",
      ],
      popular: false,
    },
    {
      title: "Website Redesign & Enhancement",
      description: "Transform your existing website with modern design, premium plugins, and improved functionality.",
      icon: <Globe className="w-8 h-8" />,
      color: "blue",
      startingPrice: "$600",
      features: [
        "Complete Visual Overhaul",
        "Premium Plugins Integration",
        "Performance Enhancement",
        "Mobile Optimization",
        "SEO & Analytics Setup",
      ],
      popular: false,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with premium features.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "teal",
      startingPrice: "$800",
      features: [
        "React Native Development",
        "Cross-platform Compatibility",
        "Native Performance Optimization",
        "App Store Deployment",
        "Push Notifications & Analytics",
      ],
      popular: false,
    },
    {
      title: "Technical Consulting",
      description: "Strategic technology guidance and architecture planning for your business growth and scalability.",
      icon: <Shield className="w-8 h-8" />,
      color: "indigo",
      startingPrice: "$35/hr",
      features: [
        "Technology Strategy Planning",
        "Architecture Review & Design",
        "Code Quality Audit",
        "Performance Analysis",
        "Team Mentoring & Training",
      ],
      popular: false,
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
        text: "text-emerald-600 dark:text-emerald-400",
        border: "border-emerald-200 dark:border-emerald-700",
        light: "bg-emerald-50 dark:bg-emerald-900/20",
      },
      purple: {
        bg: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        border: "border-purple-200 dark:border-purple-700",
        light: "bg-purple-50 dark:bg-purple-900/20",
      },
      blue: {
        bg: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        border: "border-blue-200 dark:border-blue-700",
        light: "bg-blue-50 dark:bg-blue-900/20",
      },
      teal: {
        bg: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500",
        text: "text-teal-600 dark:text-teal-400",
        border: "border-teal-200 dark:border-teal-700",
        light: "bg-teal-50 dark:bg-teal-900/20",
      },
      orange: {
        bg: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        border: "border-orange-200 dark:border-orange-700",
        light: "bg-orange-50 dark:bg-orange-900/20",
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
        text: "text-indigo-600 dark:text-indigo-400",
        border: "border-indigo-200 dark:border-indigo-700",
        light: "bg-indigo-50 dark:bg-indigo-900/20",
      },
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-visible">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-visible">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 dark:from-emerald-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Professional Services</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Services That{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Transform your digital presence with modern web solutions. Starting from $300, I deliver premium quality
            with cutting-edge technology stack, premium tools & plugins (no extra cost), and 7+ years of expertise to
            grow your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color)
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Card
                  className={`h-full overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative ${service.popular ? "ring-2 ring-purple-500 dark:ring-purple-400" : ""}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl" />

                  <div className="relative z-10">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {service.icon}
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Starting from</div>
                          <div className={`text-2xl font-bold ${colorClasses.text}`}>{service.startingPrice}</div>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{service.description}</p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`} />
                            <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.bg} hover:shadow-lg hover:shadow-${service.color}-500/25 text-white transition-all duration-300`}
                          onClick={() => {
                            const contactSection = document.getElementById("contact")
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: "smooth" })
                            }
                          }}
                        >
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-500 dark:to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Premium quality, modern technology, and
              exceptional results guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-emerald-600 hover:bg-slate-100 font-semibold"
                asChild
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold bg-transparent"
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">24/7</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
