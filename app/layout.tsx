import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { Toaster } from "@/components/ui/toaster"
import BackToTop from "@/components/back-to-top"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mehedi Pathan - Full Stack Developer",
  description:
    "Professional web developer specializing in React, Next.js, and modern web technologies. Creating exceptional digital experiences.",
  keywords: "web developer, full stack developer, React, Next.js, JavaScript, TypeScript",
  authors: [{ name: "Mehedi Pathan" }],
  creator: "Mehedi Pathan",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mehedipathan.dev",
    title: "Mehedi Pathan - Full Stack Developer",
    description: "Professional web developer specializing in React, Next.js, and modern web technologies.",
    siteName: "Mehedi Pathan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehedi Pathan - Full Stack Developer",
    description: "Professional web developer specializing in React, Next.js, and modern web technologies.",
    creator: "@mehedipathan",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-poppins antialiased">
        <ThemeProvider>
          {children}
          <BackToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
