"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import img1 from "@/public/assets/1.jpeg"
import img2 from "@/public/assets/10.jpeg"
import img3 from "@/public/assets/2.jpeg"
import img4 from "@/public/assets/3.jpeg"
import img6 from "@/public/assets/5.jpeg"
import img5 from "@/public/assets/7.jpeg"

const products = [
  {
    id: 1,
    name: " Turmeric Powder",
    image: img1,
    category: "Spices",
  },
  {
    id: 2,
    name: " Chili Powder",
    image: img2,
    category: "Spices",
  },
  {
    id: 3,
    name: " Mustard Oil",
    image: img3,
    category: "Cooking Oil",
  },
  {
    id: 4,
    name: "Chashi Premium Rice",
    image: img4,
    category: "Rice",
  },
  {
    id: 5,
    name: " Hot Masala",
    image: img5,
    category: "Spices",
  },
  {
    id: 6,
    name: " Garam Masala",
    image: img5,
    category: "Spices",
  },
  {
    id: 7,
    name: " Cumin Powder",
    image: img6,
    category: "Spices",
  },
  {
    id: 8,
    name: " Garam Masala",
    image: img5,
    category: "Spices",
  },
  {
    id: 9,
    name: " Cumin Powder",
    image: img6,
    category: "Spices",
  },
]

// Create duplicate products for seamless infinite scrolling
const duplicatedProducts = [...products, ...products, ...products]

export function ProductCarousel() {
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

    // Set initial scroll position to show the first set of products
    // This helps with the infinite scroll illusion
    container.scrollLeft = 0
    setScrollPosition(0)

    const animate = () => {
      if (!container) return

      // Increment scroll position by speed
      container.scrollLeft += speedRef.current

      // If we've scrolled past the first set of products, reset to beginning of second set
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
    <div className=" relative  py-8 px-4 bg-gradient-to-b from-green-50 to-white rounded-xl border border-green-100">
      <h2 className="text-2xl font-bold text-green-800 mb-6">Our Products</h2>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 bg-white/80 rounded-full  shadow-md hover:bg-white transition-colors"
        aria-label="Previous products"
      >
        <ChevronLeft className="h-6 w-6 text-green-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        aria-label="Next products"
      >
        <ChevronRight className="h-6 w-6 text-green-700" />
      </button>

      {/* Products container - now with duplicated products for seamless scrolling */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 pt-2 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedProducts.map((product, index) => (
          <div
            key={`${product.id}-${index}`}
            className="flex-shrink-0 w-[250px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:scale-105"
          >
            <div className=" flex items-center justify-center h-[200px]">
              <div className="relative w-[150px] h-[150px]">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
              </div>
            </div>
            <div className=" bg-white">
              <p className="text-xs text-green-600 font-medium">{product.category}</p>
              <h3 className="font-medium text-gray-800 mt-1">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Speed controls
      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => {
            speedRef.current = Math.max(0.5, speedRef.current - 0.5)
          }}
          className="px-3 py-1 bg-green-600 text-white rounded text-sm"
        >
          Slower
        </button>
        <button
          onClick={() => {
            speedRef.current = Math.min(5, speedRef.current + 0.5)
          }}
          className="px-3 py-1 bg-green-600 text-white rounded text-sm"
        >
          Faster
        </button>
      </div> */}
    </div>
  )
}

