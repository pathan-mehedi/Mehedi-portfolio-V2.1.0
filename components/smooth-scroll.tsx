"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    let isScrolling = false

    const smoothScroll = (e: WheelEvent) => {
      e.preventDefault()

      if (isScrolling) return

      isScrolling = true

      const delta = e.deltaY
      const scrollAmount = delta > 0 ? 120 : -120 // Increased from 80 to 120 for faster scrolling

      window.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      })

      setTimeout(() => {
        isScrolling = false
      }, 20) // Reduced from 30 to 20 for faster response
    }

    // Add smooth scrolling for mouse wheel
    window.addEventListener("wheel", smoothScroll, { passive: false })

    // Add smooth scrolling for CSS
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      window.removeEventListener("wheel", smoothScroll)
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return null
}
