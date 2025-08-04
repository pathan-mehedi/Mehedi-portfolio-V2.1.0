"use client"

import { motion } from "framer-motion"
import { Code2, Database, Globe, Smartphone, Server, Palette, GitBranch, Cloud } from "lucide-react"

export function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "JavaScript ES6+"],
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Serverless"],
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase"],
    },
    {
      category: "CMS & Tools",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      skills: ["WordPress", "Headless CMS", "Strapi", "Contentful", "Sanity"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      skills: ["React Native", "PWA", "Responsive Design", "Mobile-First", "Cross-Platform"],
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      skills: ["Vercel", "AWS", "Docker", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Design & UI",
      icon: <Palette className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      skills: ["Figma", "Adobe XD", "UI/UX Design", "Prototyping", "Design Systems"],
    },
    {
      category: "Version Control",
      icon: <GitBranch className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Code Review"],
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build scalable, performant, and user-friendly applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {tech.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{tech.category}</h3>

                <div className="space-y-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 px-3 py-1 rounded-full inline-block mr-2 mb-2"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
