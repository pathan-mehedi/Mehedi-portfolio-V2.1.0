"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Smartphone, Palette, Zap, Cloud } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function TechnologyStack() {
  const techCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-8 h-8" />,
      color: "emerald",
      technologies: [
        { name: "React", level: "Expert", years: "5+" },
        { name: "Next.js", level: "Expert", years: "4+" },
        { name: "TypeScript", level: "Advanced", years: "4+" },
        { name: "Tailwind CSS", level: "Expert", years: "3+" },
        { name: "Framer Motion", level: "Advanced", years: "2+" },
        { name: "Vue.js", level: "Intermediate", years: "2+" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database className="w-8 h-8" />,
      color: "blue",
      technologies: [
        { name: "Node.js", level: "Expert", years: "5+" },
        { name: "Express.js", level: "Expert", years: "4+" },
        { name: "PostgreSQL", level: "Advanced", years: "4+" },
        { name: "MongoDB", level: "Advanced", years: "3+" },
        { name: "Prisma", level: "Advanced", years: "2+" },
        { name: "GraphQL", level: "Intermediate", years: "2+" },
      ],
    },
    {
      title: "CMS & E-commerce",
      icon: <Globe className="w-8 h-8" />,
      color: "orange",
      technologies: [
        { name: "WordPress", level: "Expert", years: "7+" },
        { name: "WooCommerce", level: "Expert", years: "5+" },
        { name: "Shopify", level: "Advanced", years: "3+" },
        { name: "Strapi", level: "Advanced", years: "2+" },
        { name: "Sanity", level: "Intermediate", years: "1+" },
        { name: "Contentful", level: "Intermediate", years: "1+" },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "purple",
      technologies: [
        { name: "React Native", level: "Advanced", years: "3+" },
        { name: "Expo", level: "Advanced", years: "3+" },
        { name: "Flutter", level: "Intermediate", years: "1+" },
        { name: "Firebase", level: "Advanced", years: "3+" },
        { name: "App Store Connect", level: "Advanced", years: "2+" },
        { name: "Google Play Console", level: "Advanced", years: "2+" },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
      technologies: [
        { name: "Figma", level: "Expert", years: "4+" },
        { name: "Adobe XD", level: "Advanced", years: "3+" },
        { name: "Photoshop", level: "Advanced", years: "5+" },
        { name: "Illustrator", level: "Intermediate", years: "3+" },
        { name: "Sketch", level: "Intermediate", years: "2+" },
        { name: "Principle", level: "Intermediate", years: "1+" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "indigo",
      technologies: [
        { name: "Vercel", level: "Expert", years: "3+" },
        { name: "Netlify", level: "Advanced", years: "3+" },
        { name: "AWS", level: "Intermediate", years: "2+" },
        { name: "Docker", level: "Intermediate", years: "2+" },
        { name: "GitHub Actions", level: "Advanced", years: "2+" },
        { name: "Cloudflare", level: "Advanced", years: "2+" },
      ],
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
      orange: {
        bg: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
        text: "text-orange-600 dark:text-orange-400",
        light: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-700",
      },
      purple: {
        bg: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
        text: "text-purple-600 dark:text-purple-400",
        light: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-700",
      },
      pink: {
        bg: "from-pink-500 to-pink-600 dark:from-pink-400 dark:to-pink-500",
        text: "text-pink-600 dark:text-pink-400",
        light: "bg-pink-50 dark:bg-pink-900/20",
        border: "border-pink-200 dark:border-pink-700",
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
      case "Advanced":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "Intermediate":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
      default:
        return "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300"
    }
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-purple-100 dark:from-emerald-900/30 dark:to-purple-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Technology Stack</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Cutting-Edge{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-purple-600 dark:from-emerald-400 dark:to-purple-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            I leverage the latest and most powerful technologies to build scalable, performant, and maintainable
            solutions. Here's my expertise across different technology stacks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color)
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative">
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                  />
                  <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl" />

                  <div className="relative z-10">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${colorClasses.bg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                            {category.title}
                          </h3>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {category.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="font-semibold text-slate-900 dark:text-slate-100">{tech.name}</div>
                              <Badge className={getLevelColor(tech.level)}>{tech.level}</Badge>
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">{tech.years}</div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">25+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">100%</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Up-to-date Stack</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
