"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "@/public/assets/cocacola.png"
import img2 from "@/public/assets/pepsi.png"
import img3 from "@/public/assets/lotus.jpeg"

// Sample client data - replace with your actual client logos
const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: img1,
  },
  {
    id: 2,
    name: "Client 2",
    logo: img2,
  },
  {
    id: 3,
    name: "Client 3",
    logo: img3,
  },
  {
    id: 4,
    name: "Client 4",
    logo: img1,
  },
  {
    id: 5,
    name: "Client 5",
    logo: img2,
  },
  {
    id: 6,
    name: "Client 6",
    logo: img3,
  },
  {
    id: 7,
    name: "Client 7",
    logo: img2,
  },
  {
    id: 8,
    name: "Client 8",
    logo: img1,
  },
]

// Create duplicate clients for seamless infinite scrolling
const duplicatedClients = [...clients, ...clients, ...clients]

export function ClientCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const animationRef = useRef<number | null>(null)
  const speedRef = useRef(1) // Pixels per frame - adjust for speed

  // Manual scroll function
  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current
    if (!container) return

    const scrollAmount = 300
    const newPosition =
      direction === "left"
        ? Math.max(scrollPosition - scrollAmount, 0)
        : Math.min(scrollPosition + scrollAmount, container.scrollWidth - container.clientWidth)

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    })

    setScrollPosition(newPosition)
  }

  // Truly continuous scrolling with requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Set initial scroll position to show the first set of clients
    // This helps with the infinite scroll illusion
    container.scrollLeft = 0
    setScrollPosition(0)

    const animate = () => {
      if (!container) return

      // Increment scroll position by speed
      container.scrollLeft += speedRef.current

      // If we've scrolled past the first set of clients, reset to beginning of second set
      // This creates the illusion of infinite scrolling
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0
      }

      setScrollPosition(container.scrollLeft)
      animationRef.current = requestAnimationFrame(animate)
    }

    // Start the animation
    animationRef.current = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Handle manual scrolling
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      if (container.scrollLeft !== scrollPosition) {
        setScrollPosition(container.scrollLeft)
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [scrollPosition])

  return (
    <div className="relative py-5 px-4 bg-gradient-to-b from-green-50 to-white rounded-xl border border-green-100">
      <h2 className="text-2xl font-bold text-green-800 ">Key Clients</h2>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Previous clients"
      >
        <ChevronLeft className="h-6 w-6 text-green-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Next clients"
      >
        <ChevronRight className="h-6 w-6 text-green-700" />
      </button>

      {/* Clients container - with duplicated clients for seamless scrolling */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 pt-2 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedClients.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex-shrink-0 w-[180px] h-[140px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-105 flex items-center justify-center p-4"
          >
            <div className="relative w-[120px] h-[90px]">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

