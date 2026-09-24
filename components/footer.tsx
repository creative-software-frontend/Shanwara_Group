
"use Client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-green-500 text-white">
      <div className="max-w-7xl mx-auto py-3  text-center">
        <nav className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <Link
            href="/"
            className="text-white px-4 py-2 border border-green-300 rounded hover:bg-green-600 transition-colors font-medium"
          >
            Home
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/brands"
            className="text-white px-4 py-2 border border-green-300 rounded hover:bg-green-600 transition-colors font-medium"
          >
            Our Brands
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/global"
            className="text-white px-4 py-2 border border-green-300 rounded hover:bg-green-600 transition-colors font-medium"
          >
            Global Presence
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/privacy"
            className="text-white px-4 py-2 border border-green-300 rounded hover:bg-green-600 transition-colors font-medium"
          >
            Privacy Policy
          </Link>
          <span className="text-white">|</span>
          <Link
            href="/contact"
            className="text-white px-4 py-2 border border-green-300 rounded hover:bg-green-600 transition-colors font-medium"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

