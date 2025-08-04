"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, Heart, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/pathan-mehedi", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/mehedi-pathan", icon: Linkedin },
    { name: "Email", href: "mailto:mehedipathantext@gmail.com", icon: Mail },
    { name: "WhatsApp", href: "https://wa.me/8801622839616", icon: MessageCircle },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/#contact" },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "WordPress Development",
    "E-commerce Solutions",
    "API Development",
    "Technical Consulting",
  ]

  return (
    <footer className="bg-slate-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  Mehedi Pathan
                </h3>
                <p className="text-slate-400 text-lg">Web Developer & Aspiring Technology Leader</p>
              </div>

              <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
                Passionate web developer with 7+ years of experience crafting exceptional digital experiences. Building
                leadership expertise for future CTO/COO roles while specializing in Next.js, TypeScript, React.js, and
                WordPress development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+880 1622-839616</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>mehedipathantext@gmail.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800 hover:bg-emerald-600 dark:bg-slate-700 dark:hover:bg-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/25 text-slate-300 hover:text-white"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-colors duration-200 flex items-center group"
                      onClick={() => {
                        if (link.href.startsWith("/#")) {
                          setTimeout(() => {
                            const element = document.querySelector(link.href.substring(1))
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" })
                            }
                          }, 100)
                        }
                      }}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-slate-400 flex items-center">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3" />
                    {service}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 dark:border-slate-700 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-slate-400 text-sm">
              <p>© {currentYear} Mehedi Pathan. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>in Bangladesh</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
