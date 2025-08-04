"use client"

import { HeaderUnified } from "@/components/header-unified"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicePackages } from "@/components/services/service-packages"
import { TechnologyStack } from "@/components/services/technology-stack"
import { ServiceProcess } from "@/components/services/service-process"
import { PricingPlans } from "@/components/services/pricing-plans"
import { ServiceFAQ } from "@/components/services/service-faq"
import { ContactForm } from "@/components/contact-form"
import { Breadcrumb } from "@/components/breadcrumb"
import { BackToTop } from "@/components/back-to-top"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderUnified />
      <WhatsAppButton />

      <div className="pt-20 max-w-7xl mx-auto px-6">
        <Breadcrumb />
      </div>

      <ServicesHero />
      <ServicePackages />
      <TechnologyStack />
      <ServiceProcess />
      <PricingPlans />
      <ServiceFAQ />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  )
}
