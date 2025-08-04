"use client"

import { HeaderUnified } from "@/components/header-unified"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
// import { TechStack as ImportedTechStack } from "@/components/tech-stack"
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
    <>
      <HeaderUnified />
      
      <main className="min-h-screen" role="main">
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>

        <section id="services" aria-label="Services">
          <ServicesSection />
        </section>

        <section id="about" aria-label="About">
          <TechStack techStack={techStackData} />
        </section>
        
        <section id="experience" aria-label="Experience">
          <Experience />
        </section>

        <section id="projects" aria-label="Projects">
          <ProjectsPreview />
        </section>

        <section id="challenges" aria-label="Challenges">
          <ChallengesSolutions />
        </section>

        <section id="testimonials" aria-label="Testimonials">
          <TestimonialsSection />
        </section>

        <section id="contact" aria-label="Contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
      {/* Utility Components */}
      <WhatsAppButton />
      <BackToTop />
      <ScrollIndicator />
    </>
  )
}

type TechStackItem = {
  name: string
  color: string
  icon: string
}

type TechStackProps = {
  techStack: TechStackItem[]
}

export function TechStack({ techStack }: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center py-8">
      {techStack.map((item) => (
        <div
          key={item.name}
          className={`flex items-center gap-2 px-4 py-2 rounded shadow ${item.color} text-white`}
        >
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  )
}
