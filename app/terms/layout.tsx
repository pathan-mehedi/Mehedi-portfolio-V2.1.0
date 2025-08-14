import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Web Development Services | Mehedi Pathan",
  description:
    "Premium web development services including WordPress CMS, custom web applications, UI/UX design, mobile apps, and technical consulting. Starting from $300 with premium tools included.",
  keywords:
    "web development, WordPress development, custom web applications, UI/UX design, mobile app development, technical consulting, premium themes, pro plugins, logo design",
  openGraph: {
    title: "Professional Web Development Services | Mehedi Pathan",
    description:
      "Premium web development services with guaranteed satisfaction. WordPress CMS, custom applications, mobile apps, and more. Premium tools included at no extra cost.",
    type: "website",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
