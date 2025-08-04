"use client"

import { motion } from "framer-motion"
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Shield,
  Zap,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Users,
  Award,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ServicePackages() {
  const packages = [
    {
      title: "Custom Web Development",
      description:
        "Full-stack web applications built with modern technologies for optimal performance and scalability.",
      icon: <Code className="w-8 h-8" />,
      color: "emerald",
      startingPrice: "$500",
      deliveryTime: "2-4 weeks",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
      features: [
        "Next.js & React Applications",
        "TypeScript Development",
        "API Integration & Development",
        "Database Design & Optimization",
        "Performance & SEO Optimization",
        "Responsive Design Implementation",
        "Testing & Quality Assurance",
        "Deployment & Hosting Setup",
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
      deliveryTime: "1-3 weeks",
      technologies: ["Figma", "Adobe XD", "React", "Tailwind CSS", "Framer Motion"],
      features: [
        "User Research & Analysis",
        "Wireframing & Prototyping",
        "Responsive Design Implementation",
        "User Experience Optimization",
        "Modern UI Components",
        "Brand Integration & Consistency",
        "Cross-browser Compatibility",
        "Design System Creation",
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
      deliveryTime: "5-14 days",
      technologies: ["WordPress", "PHP", "WooCommerce", "Elementor Pro", "ACF Pro"],
      features: [
        "Premium Logo Design Included",
        "Pro Themes & Pro Plugins Setup",
        "Professional Editor Configuration",
        "Custom WordPress Development",
        "WooCommerce E-commerce Integration",
        "SEO Optimization & Analytics",
        "Responsive Mobile Design",
        "100% Client Satisfaction Guarantee",
      ],
      popular: false,
    },
    {
      title: "Website Redesign & Enhancement",
      description: "Transform your existing website with modern design, premium plugins, and improved functionality.",
      icon: <Globe className="w-8 h-8" />,
      color: "blue",
      startingPrice: "$600",
      deliveryTime: "2-3 weeks",
      technologies: ["React", "Next.js", "WordPress", "Shopify", "Custom CMS"],
      features: [
        "Complete Visual Overhaul",
        "Premium Plugins Integration",
        "Performance Enhancement & Optimization",
        "Mobile-First Responsive Design",
        "SEO & Analytics Setup",
        "Content Migration & Optimization",
        "Security Enhancements",
        "Speed Optimization",
      ],
      popular: false,
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android with premium features.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "teal",
      startingPrice: "$800",
      deliveryTime: "4-8 weeks",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "TypeScript"],
      features: [
        "React Native Development",
        "Cross-platform iOS & Android",
        "Native Performance Optimization",
        "App Store & Play Store Deployment",
        "Push Notifications & Analytics",
        "Offline Functionality",
        "Third-party Integrations",
        "Maintenance & Support",
      ],
      popular: false,
    },
    {
      title: "Technical Consulting",
      description: "Strategic technology guidance and architecture planning for your business growth and scalability.",
      icon: <Shield className="w-8 h-8" />,
      color: "indigo",
      startingPrice: "$150/hr",
      deliveryTime: "Flexible",
      technologies: ["Architecture", "DevOps", "Cloud", "Security", "Performance"],
      features: [
        "Technology Strategy Planning",
        "Architecture Review & Design",
        "Code Quality Audit & Review",
        "Performance Analysis & Optimization",
        "Team Mentoring & Training",
        "DevOps & Deployment Strategy",
        "Security Assessment",
        "Scalability Planning",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Service{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Packages
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Choose from our comprehensive service packages designed to meet your specific needs and budget. Each package
            includes premium tools, dedicated support, and guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {packages.map((pkg, index) => {
            const colorClasses = getColorClasses(pkg.color)
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <Card
                  className={`h-full overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative ${pkg.popular ? "ring-2 ring-purple-500 dark:ring-purple-400" : ""}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-6 z-10">
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
                    <CardHeader className="pb-6">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {pkg.icon}
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Starting from</div>
                          <div className={`text-3xl font-bold ${colorClasses.text}`}>{pkg.startingPrice}</div>
                        </div>
                      </div>

                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 mb-3">
                        {pkg.title}
                      </CardTitle>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{pkg.description}</p>

                      {/* Package Info */}
                      <div className="flex items-center justify-between mb-6 p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">{pkg.deliveryTime}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">1-on-1 Support</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                          <span className="text-sm text-slate-600 dark:text-slate-300">Premium Quality</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {pkg.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className={`${colorClasses.light} ${colorClasses.text} border-0`}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Features */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                          What's Included:
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {pkg.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                              viewport={{ once: true }}
                              className="flex items-center space-x-3"
                            >
                              <CheckCircle className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`} />
                              <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                        <Button
                          className={`w-full bg-gradient-to-r ${colorClasses.bg} hover:shadow-lg text-white transition-all duration-300 h-12 text-base font-semibold`}
                          onClick={() => {
                            const contactSection = document.getElementById("contact")
                            if (contactSection) {
                              contactSection.scrollIntoView({ behavior: "smooth" })
                            }
                          }}
                        >
                          Get Started with {pkg.title.split(" ")[0]}
                          <ArrowRight className="w-5 h-5 ml-2" />
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-500 dark:to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Don't see exactly what you're looking for? Let's discuss your unique requirements and create a custom
              package that perfectly fits your needs and budget.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-slate-100 font-semibold"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Discuss Custom Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
