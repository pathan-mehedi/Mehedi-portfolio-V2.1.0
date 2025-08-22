"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, MediCare Solutions",
      company: "Healthcare Industry",
      image: "/testimonials_img_1.png?height=80&width=80&text=Sarah+J",
      rating: 5,
      testimonial:
        "Mehedi delivered an exceptional healthcare management system that transformed our operations. His technical expertise and attention to detail are outstanding. The system improved our efficiency by 60% and our patients love the new interface.",
      project: "Healthcare Management System",
    },
    {
      name: "Anatoly Dickinson",
      position: "CTO, FinTech Innovations",
      company: "Financial Technology",
      image: "/testimonials_img_2.png?height=80&width=80&text=Anatoly+D",
      rating: 5,
      testimonial:
        "Working with Mehedi was a game-changer for our financial dashboard project. His deep understanding of React and data visualization created exactly what we envisioned. Professional, reliable, and delivered beyond expectations.",
      project: "Financial Dashboard & Analytics",
    },
    {
      name: "Maria Rodriguez",
      position: "Founder, FoodChain Corp",
      company: "Restaurant Industry",
      image: "/testimonials_img_3.png?height=80&width=80&text=Maria+R",
      rating: 5,
      testimonial:
        "The restaurant management system Mehedi built for us is incredible. It handles everything from inventory to staff scheduling seamlessly. His communication throughout the project was excellent, and he delivered on time and within budget.",
      project: "Restaurant Chain Management",
    },
    {
      name: "Ahmed Hassan",
      position: "Director, EduTech Academy",
      company: "Education Technology",
      image: "/testimonials_img_4.png?height=80&width=80&text=Ahmed+H",
      rating: 5,
      testimonial:
        "Mehedi created an amazing educational platform that our students and teachers absolutely love. The video streaming, progress tracking, and course management features work flawlessly. Highly recommended for any educational project.",
      project: "Educational Platform",
    },
    {
      name: "Jennifer Smith",
      position: "Operations Manager, LogiFlow Systems",
      company: "Logistics & Supply Chain",
      image: "/testimonials_img_5.png?height=80&width=80&text=Jennifer+S",
      rating: 5,
      testimonial:
        "The logistics management system has completely transformed our operations. Real-time tracking, route optimization, and inventory control all work perfectly. Mehedi's expertise in complex systems is truly impressive.",
      project: "Logistics & Supply Chain System",
    },
    {
      name: "Michael Zhang",
      position: "CTO, AI Solutions Inc",
      company: "Artificial Intelligence",
      image: "/testimonials_img_6.png?height=80&width=80&text=Michael+Z",
      rating: 5,
      testimonial:
        "Mehedi's work on our AI-powered analytics dashboard exceeded our expectations. His deep understanding of machine learning integration and real-time data processing helped create a powerful yet user-friendly platform. Outstanding work!",
      project: "AI Analytics Platform",
    },
    {
      name: "Sophie Anderson",
      position: "Product Manager, RetailTech",
      company: "E-commerce Solutions",
      image: "/testimonials_img_7.png?height=80&width=80&text=Sophie+A",
      rating: 5,
      testimonial:
        "The e-commerce platform Mehedi developed revolutionized our online retail presence. The integration of AR product visualization and smart inventory management has significantly boosted our sales. His technical expertise is phenomenal.",
      project: "E-commerce Platform",
    },
    {
      name: "Carlos Martinez",
      position: "Head of Operations, GreenEnergy",
      company: "Renewable Energy",
      image: "/testimonials_img_8.png?height=80&width=80&text=Carlos+M",
      rating: 5,
      testimonial:
        "Mehedi developed a sophisticated monitoring system for our solar farms that dramatically improved our operational efficiency. His innovative approach to IoT integration and data visualization is exactly what we needed.",
      project: "Renewable Energy Management",
    },
    {
      name: "Emma Watson",
      position: "CEO, HealthTech Solutions",
      company: "Healthcare Technology",
      image: "/testimonials_img_9.png?height=80&width=80&text=Emma+W",
      rating: 5,
      testimonial:
        "The telemedicine platform Mehedi built has been a game-changer for our healthcare network. The secure video consultations and patient management features are robust and user-friendly. His attention to HIPAA compliance was impressive.",
      project: "Telemedicine Platform",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="container mx-auto px-4 py-16">
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what clients have to say about working with me.
            </p>
          </motion.div>

          <div className="relative">
            {/* Main Testimonial Card */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Client Image and Info */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className="relative mb-4">
                        <Image
                          src={currentTestimonial.image || "/placeholder.svg"}
                          alt={currentTestimonial.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 rounded-full mx-auto lg:mx-0 object-cover"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{currentTestimonial.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{currentTestimonial.position}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{currentTestimonial.company}</p>

                      {/* Rating */}
                      <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      <div className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                        {currentTestimonial.project}
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed italic">
                        "{currentTestimonial.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full p-0 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={index === currentIndex ? "true" : "false"}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full p-0 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">7+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
