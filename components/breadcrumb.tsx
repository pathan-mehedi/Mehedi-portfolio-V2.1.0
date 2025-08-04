"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === "/") return null

  const pathSegments = pathname.split("/").filter(Boolean)

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
      <Link href="/" className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        <Home className="w-4 h-4" />
      </Link>

      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/")
        const isLast = index === pathSegments.length - 1
        const title = segment.charAt(0).toUpperCase() + segment.slice(1)

        return (
          <div key={segment} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4" />
            {isLast ? (
              <span className="text-gray-900 dark:text-white font-medium">{title}</span>
            ) : (
              <Link href={href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {title}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
