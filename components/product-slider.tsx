"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import img1 from "@/public/assets/b-1.jpg"
import img2 from "@/public/assets/b-1.jpg"

const products = [
  {
    id: 1,
    name: " Mejbani Masala",
    image: img1,
    description: "A special blend of spices for authentic Mejbani dishes",
    bgColor: "bg-yellow-400",
  },
  {
    id: 2,
    name: " Chicken Masala",
    image: img2,
    description: "Perfect blend for delicious chicken curry",
    bgColor: "bg-orange-300",
  },
  {
    id: 3,
    name: " Garam Masala",
    image: img1,
    description: "Aromatic blend of premium spices",
    bgColor: "bg-red-200",
  },
  {
    id: 4,
    name: " Biryani Masala",
    image: img2,
    description: "Special blend for perfect biryani",
    bgColor: "bg-amber-300",
  },
]

export function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-full">
      {/* Slides */}
      <div className="relative h-[500px] overflow-hidden">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Full background image */}
            <div className="absolute inset-0 ">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Semi-transparent overlay with the product's color */}
              <div className={`absolute inset-0 opacity-60 ${product.bgColor}`}></div>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-8">
                <div className="max-w-lg bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg z-0">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">{product.name}</h2>
                  <p className="text-lg mb-6 text-gray-700">{product.description}</p>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition w-max">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? "bg-green-600" : "bg-green-300"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

