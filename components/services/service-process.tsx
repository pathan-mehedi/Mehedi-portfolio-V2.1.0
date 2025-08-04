"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Code, TestTube, Rocket, HeadphonesIcon, CheckCircle, ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ServiceProcess() {
  const processSteps = [
    {
      step: 1,
      title: "Discovery & Consultation",
      description:
        "We start with a detailed consultation to understand your business goals, target audience, and project requirements.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "emerald",
      duration: "1-2 days",
      deliverables: [
        "Project requirements document",
        "Technical specification",
        "Timeline and milestones",
        "Cost breakdown",
      ],
    },
    {
      step: 2,
      title: "Planning & Design",
      description:
        "Create wireframes, mockups, and technical architecture. Define the project scope and create a detailed roadmap.",
      icon: <FileText className="w-8 h-8" />,
      color: "blue",
      duration: "3-5 days",
      deliverables: ["Wireframes and mockups", "Technical architecture", "Database design", "UI/UX prototypes"],
    },
    {
      step: 3,
      title: "Development",
      description:
        "Build your project using modern technologies and best practices. Regular updates and progress reports throughout.",
      icon: <Code className="w-8 h-8" />,
      color: "purple",
      duration: "1-6 weeks",
      deliverables: [
        "Clean, documented code",
        "Regular progress updates",
        "Version control access",
        "Development environment",
      ],
    },
    {
      step: 4,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices and browsers. Performance optimization and security checks.",
      icon: <TestTube className="w-8 h-8" />,
      color: "orange",
      duration: "2-3 days",
      deliverables: ["Testing reports", "Performance metrics", "Security audit", "Cross-browser compatibility"],
    },
    {
      step: 5,
      title: "Launch & Deployment",
      description:
        "Deploy your project to production with proper configuration, monitoring, and backup systems in place.",
      icon: <Rocket className="w-8 h-8" />,
      color: "teal",
      duration: "1-2 days",
      deliverables: [
        "Production deployment",
        "Domain and hosting setup",
        "SSL certificates",
        "Monitoring and analytics",
      ],
    },
    {
      step: 6,
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure your project continues to perform optimally.",
      icon: <HeadphonesIcon className="w-8 h-8" />,
      color: "indigo",
      duration: "Ongoing",
      deliverables: ["24/7 technical support", "Regular updates", "Performance monitoring", "Backup and security"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
        text: "text-emerald-600 dark:text-emerald-400",
        light: "bg-emerald-50 dark:bg-emerald-900/20",
        border: "border-emerald-200 dark:border-emerald-700",
      },
      blue: {
        bg: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        light: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700",
      },
      purple: {
        bg: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        light: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700",
      },
      orange: {
        bg: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        light: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-700",
      },
      teal: {
        bg: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500",
        text: "text-teal-600 dark:text-teal-400",
        light: "bg-teal-50 dark:bg-teal-900/20",
        border: "border-teal-200 dark:border-teal-700",
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600 dark:from-indigo-400 dark:to-indigo-500",
        text: "text-indigo-600 dark:text-indigo-400",
        light: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-700",
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
            Our{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            A proven 6-step process that ensures your project is delivered on time, within budget, and exceeds your
            expectations. From initial consultation to ongoing support.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Timeline */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-purple-500 rounded-full opacity-20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const colorClasses = getColorClasses(step.color)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <Card className="overflow-visible shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 group">
                      {/* Gradient Border Effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                      />
                      <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl" />

                      <div className="relative z-10">
                        <CardContent className="p-8">
                          <div className="flex items-start space-x-4 mb-6">
                            <div
                              className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                            >
                              {step.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <Badge className={`${colorClasses.light} ${colorClasses.text} border-0`}>
                                  Step {step.step}
                                </Badge>
                                <Badge variant="outline" className="text-slate-600 dark:text-slate-300">
                                  {step.duration}
                                </Badge>
                              </div>
                              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                                {step.title}
                              </h3>
                            </div>
                          </div>

                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">{step.description}</p>

                          <div>
                            <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">
                              Deliverables:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {step.deliverables.map((deliverable, deliverableIndex) => (
                                <motion.div
                                  key={deliverable}
                                  initial={{ opacity: 0, x: -10 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: deliverableIndex * 0.05 }}
                                  viewport={{ once: true }}
                                  className="flex items-center space-x-3"
                                >
                                  <CheckCircle className={`w-4 h-4 ${colorClasses.text} flex-shrink-0`} />
                                  <span className="text-slate-600 dark:text-slate-300 text-sm">{deliverable}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  </div>

                  {/* Step Number Circle */}
                  <div className="relative z-10 lg:mx-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                    >
                      {step.step}
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-emerald-500 to-purple-500 rounded-full opacity-20 mx-auto mt-4" />
                    )}
                  </div>

                  {/* Spacer for even layout */}
                  <div className="flex-1 w-full lg:block hidden" />
                </motion.div>
              )
            })}
          </div>
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
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's begin with a free consultation to discuss your project requirements and how we can help bring your
              vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 hover:bg-slate-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <span>Start Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
