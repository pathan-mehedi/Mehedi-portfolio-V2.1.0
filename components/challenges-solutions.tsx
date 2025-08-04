"use client"

import { motion } from "framer-motion"
import { Zap, Shield, TrendingUp, Users, Database, Globe, Cpu, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ChallengesSolutions() {
  const challenges = [
    {
      title: "High-Traffic System Optimization",
      problem:
        "E-commerce platform experiencing 300% traffic spike during flash sales, causing frequent crashes and 40% cart abandonment rate.",
      solution:
        "Implemented Redis caching, database query optimization, CDN integration, and horizontal scaling with load balancers.",
      impact: "Reduced page load time by 75%, eliminated crashes, and increased conversion rate by 45%.",
      technologies: ["Redis", "AWS CloudFront", "Load Balancers", "Database Optimization"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "emerald",
      metrics: {
        before: "8s load time",
        after: "2s load time",
        improvement: "75% faster",
      },
    },
    {
      title: "Legacy System Migration",
      problem:
        "10-year-old monolithic PHP application with 500K+ users needed modernization without service interruption.",
      solution:
        "Designed microservices architecture, implemented gradual migration strategy, and built API gateway for seamless transition.",
      impact: "Zero downtime migration, 60% performance improvement, and reduced maintenance costs by 50%.",
      technologies: ["Microservices", "Docker", "API Gateway", "Next.js", "Node.js"],
      icon: <Cpu className="w-6 h-6" />,
      color: "blue",
      metrics: {
        before: "Monolithic",
        after: "Microservices",
        improvement: "60% faster",
      },
    },
    {
      title: "Real-time Collaboration Platform",
      problem:
        "Educational platform needed real-time video streaming, chat, and document collaboration for 10,000+ concurrent users.",
      solution:
        "Built WebRTC-based solution with Socket.io, implemented efficient data synchronization, and optimized bandwidth usage.",
      impact: "Successfully handled 15,000 concurrent users with 99.9% uptime and sub-100ms latency.",
      technologies: ["WebRTC", "Socket.io", "Redis Pub/Sub", "MongoDB", "AWS"],
      icon: <Users className="w-6 h-6" />,
      color: "purple",
      metrics: {
        before: "No real-time",
        after: "15K concurrent",
        improvement: "99.9% uptime",
      },
    },
    {
      title: "Security Breach Recovery",
      problem:
        "Client's WordPress site compromised with malware injection affecting 50,000+ user accounts and SEO rankings.",
      solution:
        "Implemented comprehensive security audit, malware removal, security hardening, and monitoring systems.",
      impact:
        "Fully recovered site within 48 hours, implemented prevention measures, and restored SEO rankings within 2 weeks.",
      technologies: ["Security Hardening", "Malware Analysis", "WAF", "Monitoring"],
      icon: <Shield className="w-6 h-6" />,
      color: "red",
      metrics: {
        before: "Compromised",
        after: "Secured",
        improvement: "48h recovery",
      },
    },
    {
      title: "Database Performance Crisis",
      problem:
        "MySQL database with 50GB+ data experiencing 30-second query times, causing application timeouts and user frustration.",
      solution:
        "Redesigned database schema, implemented proper indexing, query optimization, and database partitioning strategies.",
      impact: "Reduced query time from 30s to 200ms, eliminated timeouts, and improved user satisfaction by 80%.",
      technologies: ["MySQL Optimization", "Indexing", "Query Analysis", "Database Partitioning"],
      icon: <Database className="w-6 h-6" />,
      color: "orange",
      metrics: {
        before: "30s queries",
        after: "200ms queries",
        improvement: "99% faster",
      },
    },
    {
      title: "Multi-tenant SaaS Architecture",
      problem:
        "Converting single-tenant application to multi-tenant SaaS platform while maintaining data isolation and performance.",
      solution:
        "Designed tenant-aware database architecture, implemented row-level security, and built dynamic configuration system.",
      impact: "Successfully onboarded 200+ tenants with complete data isolation and 40% cost reduction per tenant.",
      technologies: ["Multi-tenancy", "PostgreSQL RLS", "Dynamic Config", "Tenant Isolation"],
      icon: <Globe className="w-6 h-6" />,
      color: "teal",
      metrics: {
        before: "Single tenant",
        after: "200+ tenants",
        improvement: "40% cost reduction",
      },
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: "from-emerald-500 to-emerald-600 dark:from-emerald-400 dark:to-emerald-500",
      blue: "from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500",
      purple: "from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500",
      red: "from-red-500 to-red-600 dark:from-red-400 dark:to-red-500",
      orange: "from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500",
      teal: "from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500",
    }
    return colors[color as keyof typeof colors] || colors.emerald
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/5 dark:bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/5 dark:bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400/5 dark:bg-purple-400/10 rounded-full blur-3xl" />
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full mb-6"
          >
            <Zap className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-emerald-700 dark:text-emerald-300 font-semibold">Problem Solver</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Challenges I've{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              Conquered
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-4xl mx-auto leading-relaxed">
            Real-world problems that tested my technical expertise and leadership abilities. Each challenge shaped my
            journey toward becoming a future technology leader.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-0 relative">
                {/* Gradient Border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${getColorClasses(challenge.color)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}
                />
                <div className="absolute inset-[1px] bg-white dark:bg-slate-800 rounded-xl" />

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-14 h-14 bg-gradient-to-r ${getColorClasses(challenge.color)} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {challenge.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Improvement</div>
                        <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          {challenge.metrics.improvement}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                      {challenge.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Problem */}
                    <div>
                      <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                        The Challenge
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{challenge.problem}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2 flex items-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                        My Solution
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{challenge.solution}</p>
                    </div>

                    {/* Impact */}
                    <div>
                      <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Impact Achieved
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {challenge.impact}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Before</div>
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {challenge.metrics.before}
                        </div>
                      </div>
                      <div className="text-center">
                        <ArrowRight className="w-4 h-4 text-slate-400 mx-auto mb-1" />
                        <div className="text-xs text-slate-500 dark:text-slate-400">Transformed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">After</div>
                        <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {challenge.metrics.after}
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {challenge.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Critical Issues Resolved</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Average Uptime Achieved</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">75%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Average Performance Boost</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">48h</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Fastest Crisis Resolution</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
