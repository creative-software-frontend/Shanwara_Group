
"use client"

import { ClientCarousel } from "./client-carousel"

export function KeyClientsSection() {
  return (
    <>
      {/* Key Clients Section Header */}
      <div className="bg-green-500 rounded-lg overflow-hidden">
        <h2 className="text-white font-medium p-4 flex items-center">
          <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <span className="text-green-500">▼</span>
          </span>
          Our Key Clients
        </h2>
      </div>

      {/* Client Carousel */}
      <ClientCarousel />
    </>
  )
}

