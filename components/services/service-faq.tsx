"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What's included in the WordPress CMS Development service?",
      answer:
        "Our WordPress service includes premium logo design, pro themes and plugins setup, professional editor configuration, custom development, WooCommerce integration, SEO optimization, responsive design, and 100% satisfaction guarantee. All premium tools are included at no extra cost.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity: WordPress sites (5-14 days), Custom web development (2-4 weeks), Mobile apps (4-8 weeks), and Website redesigns (2-3 weeks). We provide detailed timelines during the consultation phase.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes! All our packages include support periods (1-6 months depending on the plan). We also offer ongoing maintenance plans for regular updates, security monitoring, backups, and technical support to keep your project running smoothly.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We use modern, industry-standard technologies including React, Next.js, TypeScript, Node.js, WordPress, React Native, and more. We choose the best technology stack based on your project requirements and long-term goals.",
    },
    {
      question: "Can you work with my existing website or do I need to start from scratch?",
      answer:
        "We can work with both! We offer website redesign and enhancement services to improve your existing site, or we can build a completely new website from scratch. We'll assess your current situation and recommend the best approach.",
    },
    {
      question: "What's your revision policy?",
      answer:
        "We offer unlimited revisions during the development phase to ensure you're completely satisfied with the result. Our goal is 100% client satisfaction, and we'll work with you until you're happy with the final product.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "While we don't directly provide hosting, we help you choose the best hosting solution for your needs and handle the complete setup process including domain configuration, SSL certificates, and deployment. We work with reliable providers like Vercel, Netlify, and others.",
    },
    {
      question: "What payment methods do you accept and what's your payment schedule?",
      answer:
        "We accept various payment methods including bank transfers, PayPal, and major credit cards. Typically, we require 50% upfront to begin the project and 50% upon completion. For larger projects, we can arrange milestone-based payments.",
    },
    {
      question: "Do you sign NDAs and how do you handle confidentiality?",
      answer:
        "We're happy to sign NDAs and take client confidentiality very seriously. All project details, business information, and code are kept strictly confidential. We have secure development practices and never share client information.",
    },
    {
      question: "Can you help with SEO and digital marketing?",
      answer:
        "Yes! We include basic SEO optimization in all our packages, including meta tags, site structure, performance optimization, and Google Analytics setup. For advanced SEO and digital marketing strategies, we can discuss additional services or recommend trusted partners.",
    },
    {
      question: "What if I need changes after the project is completed?",
      answer:
        "We provide support periods with all packages, and minor changes are typically included. For major changes or new features after the support period, we offer competitive rates for additional development work. We're always here to help your project grow.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
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
            <HelpCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Frequently Asked Questions</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Got{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to the most common questions about our services, process, and policies. Can't find what you're
            looking for? Feel free to reach out!
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0">
                <CardContent className="p-0">
                  <button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-slate-500 dark:text-slate-400" />
                      </motion.div>
                    </div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-slate-200 dark:bg-slate-700 mb-4" />
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-500 dark:to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Don't hesitate to reach out! I'm here to help clarify any doubts and discuss how we can work together to
              bring your project to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 hover:bg-slate-100 font-semibold px-8 py-3 rounded-lg transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById("contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
