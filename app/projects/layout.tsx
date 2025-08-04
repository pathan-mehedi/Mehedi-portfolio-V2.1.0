import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects - Mehedi Pathan | Web Developer & Future Technology Leader",
  description:
    "Explore my portfolio of web development projects including enterprise applications, client work, open source contributions, and mobile apps. Building technical expertise for future CTO/COO leadership roles.",
  keywords: [
    "Mehedi Pathan Projects",
    "Web Development Portfolio",
    "Next.js Projects",
    "React Applications",
    "WordPress Themes",
    "Mobile Apps",
    "Client Work",
  ],
  openGraph: {
    title: "Projects - Mehedi Pathan | Web Developer & Future Technology Leader",
    description: "Explore my portfolio of web development projects and leadership journey toward CTO/COO roles.",
    url: "https://mehedipathan.dev/projects",
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
