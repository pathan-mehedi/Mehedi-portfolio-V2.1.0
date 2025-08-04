"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Senior Technology Officer & Web Developer",
      company: "Moonju Tech Solution",
      location: "Dhaka, Bangladesh",
      period: "2023 - Present",
      type: "Full-time",
      description: [
        "Leading technology initiatives and web development projects for enterprise clients",
        "Architecting scalable web applications using Next.js, TypeScript, and modern frameworks",
        "Managing a team of developers and ensuring code quality through best practices",
        "Implementing CI/CD pipelines and optimizing application performance",
        "Collaborating with stakeholders to translate business requirements into technical solutions",
      ],
      technologies: ["Next.js", "TypeScript", "React.js", "Node.js", "AWS", "MongoDB"],
    },
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Ltd",
      location: "Dhaka, Bangladesh",
      period: "2021 - 2023",
      type: "Full-time",
      description: [
        "Developed and maintained complex web applications serving 100k+ users",
        "Built responsive WordPress themes and custom plugins for various industries",
        "Implemented RESTful APIs and integrated third-party services",
        "Optimized database queries and improved application performance by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: ["React.js", "WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
    },
    {
      title: "Full Stack Web Developer",
      company: "Digital Solutions Agency",
      location: "Dhaka, Bangladesh",
      period: "2019 - 2021",
      type: "Full-time",
      description: [
        "Created custom web solutions for small to medium-sized businesses",
        "Developed e-commerce platforms with payment gateway integrations",
        "Built content management systems and admin dashboards",
        "Collaborated with design teams to implement pixel-perfect UI/UX",
        "Provided technical support and maintenance for client websites",
      ],
      technologies: ["JavaScript", "PHP", "WordPress", "jQuery", "Bootstrap", "MySQL"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Hub",
      location: "Dhaka, Bangladesh",
      period: "2017 - 2019",
      type: "Full-time",
      description: [
        "Started career developing static websites and simple web applications",
        "Learned modern web development practices and frameworks",
        "Contributed to open-source projects and built personal portfolio",
        "Gained experience in responsive design and cross-browser compatibility",
        "Participated in agile development processes and team collaborations",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden md:overflow-visible">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            7+ years of progressive experience in web development, from junior developer to technology leadership,
            building expertise for future CTO/COO roles
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-4 h-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-3 text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
