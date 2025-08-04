"use client"

import { motion } from "framer-motion"
import { Check, Star, ArrowRight, Zap, Crown, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PricingPlans() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$300",
      period: "per project",
      icon: <Zap className="w-8 h-8" />,
      color: "emerald",
      popular: false,
      features: [
        "WordPress CMS Development",
        "Premium Logo Design",
        "Pro Theme Setup",
        "5 Pages/Sections",
        "Mobile Responsive Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1 Month Support",
        "Social Media Integration",
        "Google Analytics Setup",
      ],
      notIncluded: ["E-commerce Functionality", "Advanced Custom Features", "Multi-language Support"],
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with advanced needs",
      price: "$600",
      period: "per project",
      icon: <Crown className="w-8 h-8" />,
      color: "purple",
      popular: true,
      features: [
        "Everything in Starter",
        "Custom Web Development",
        "Advanced UI/UX Design",
        "Up to 15 Pages/Sections",
        "E-commerce Integration",
        "Advanced SEO & Analytics",
        "Performance Optimization",
        "3 Months Support",
        "Custom Features Development",
        "Database Integration",
        "API Integrations",
        "Advanced Security Setup",
      ],
      notIncluded: ["Mobile App Development", "Advanced DevOps Setup"],
    },
    {
      name: "Enterprise",
      description: "Complete solution for large-scale projects",
      price: "$1200",
      period: "per project",
      icon: <Rocket className="w-8 h-8" />,
      color: "blue",
      popular: false,
      features: [
        "Everything in Professional",
        "Mobile App Development",
        "Advanced Custom Development",
        "Unlimited Pages/Sections",
        "Multi-language Support",
        "Advanced E-commerce Features",
        "Custom Admin Dashboard",
        "6 Months Support",
        "DevOps & Cloud Setup",
        "Advanced Security & Monitoring",
        "Performance Analytics",
        "Priority Support",
        "Team Training Sessions",
        "Ongoing Maintenance Plan",
      ],
      notIncluded: [],
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
      purple: {
        bg: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        light: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700",
      },
      blue: {
        bg: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
        text: "text-blue-600 dark:text-blue-400",
        light: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-700",
      },
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Transparent{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Choose the perfect plan for your project. All plans include premium tools, dedicated support, and our
            satisfaction guarantee. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color)
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Card
                  className={`h-full overflow-visible md:overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative ${plan.popular ? "ring-2 ring-purple-500 dark:ring-purple-400 scale-105" : ""}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 shadow-lg text-sm font-semibold">
                        <Star className="w-4 h-4 mr-1" />
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
                    <CardHeader className="text-center pb-8 pt-8">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${colorClasses.bg} rounded-2xl flex items-center justify-center text-white shadow-lg mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {plan.icon}
                      </div>

                      <CardTitle className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                        {plan.name}
                      </CardTitle>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{plan.description}</p>

                      <div className="mb-6">
                        <div className={`text-5xl font-bold ${colorClasses.text} mb-2`}>{plan.price}</div>
                        <div className="text-slate-500 dark:text-slate-400">{plan.period}</div>
                      </div>

                      <Button
                        className={`w-full bg-gradient-to-r ${colorClasses.bg} hover:shadow-lg text-white transition-all duration-300 h-12 text-base font-semibold mb-6`}
                        onClick={() => {
                          const contactSection = document.getElementById("contact")
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" })
                          }
                        }}
                      >
                        Get Started with {plan.name}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardHeader>

                    <CardContent className="px-8 pb-8">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">What's included:</h4>
                        {plan.features.map((feature, featureIndex) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: featureIndex * 0.03 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-3"
                          >
                            <Check className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </motion.div>
                        ))}

                        {plan.notIncluded.length > 0 && (
                          <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                            <h4 className="font-semibold text-slate-500 dark:text-slate-400 mb-3 text-sm">
                              Not included:
                            </h4>
                            {plan.notIncluded.map((feature, featureIndex) => (
                              <div key={feature} className="flex items-start space-x-3 mb-2">
                                <div className="w-5 h-5 flex-shrink-0 mt-0.5">
                                  <div className="w-3 h-3 border border-slate-300 dark:border-slate-600 rounded-full mx-auto mt-1" />
                                </div>
                                <span className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed line-through">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">All Plans Include</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Free</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Premium Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-2">∞</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Revisions</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
