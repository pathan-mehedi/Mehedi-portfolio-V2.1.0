"use client"

import { HeaderUnified } from "@/components/header-unified"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TechStack } from "@/components/tech-stack"
import { Experience } from "@/components/experience"
import { ProjectsPreview } from "@/components/projects-preview"
import { ChallengesSolutions } from "@/components/challenges-solutions"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { BackToTop } from "@/components/back-to-top"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  const techStackData = [
    { name: "TypeScript", color: "bg-blue-500", icon: "TS" },
    { name: "React", color: "bg-purple-600", icon: "⚛️" },
    { name: "Next.js", color: "bg-cyan-400", icon: "▲" },
    { name: "Vue", color: "bg-green-500", icon: "V" },
    { name: "Node.js", color: "bg-green-600", icon: "N" },
    { name: "MongoDB", color: "bg-green-700", icon: "🍃" },
    { name: "React Native", color: "bg-pink-500", icon: "⚛️" },
    { name: "Firebase", color: "bg-yellow-500", icon: "🔥" },
    { name: "GraphQL", color: "bg-purple-500", icon: "◆" },
  ]

  return (
    <main className="min-h-screen">
      <HeaderUnified />
      <WhatsAppButton />
      <BackToTop />
      <ScrollIndicator />

      <div id="home">
        <HeroSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <div id="about">
        <TechStack techStack={techStackData} />
      </div>

      <div id="experience">
        <Experience />
      </div>

      <div id="projects">
        <ProjectsPreview />
      </div>

      <div id="challenges">
        <ChallengesSolutions />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="contact">
        <ContactForm />
      </div>

      <Footer />
    </main>
  )
}
