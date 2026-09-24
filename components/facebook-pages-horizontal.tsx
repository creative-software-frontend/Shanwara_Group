"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"
import img1 from "@/public/assets/ruchi.jpg"
import img2 from "@/public/assets/choco.jpeg"
import img3 from "@/public/assets/chips.jpeg"

// Sample data for the pages
const facebookPages = [
  {
    id: 1,
    name: "Radhuni",
    logoUrl: img1,
    followers: "499K",
  },
  {
    id: 2,
    name: "RUCHI Explore Li...",
    logoUrl: img2,
    followers: "520K",
  },
  {
    id: 3,
    name: "Chopstick",
    logoUrl: img3,
    followers: "232K",
  },
  {
    id: 4,
    name: "Chashi",
    logoUrl: img1,
    followers: "225K",
  },
  {
    id: 5,
    name: "Aaram 100% Fruit",
    logoUrl: img2,
    followers: "74K",
  },
  {
    id: 6,
    name: "Another Page",
    logoUrl: img3,
    followers: "150K",
  },
]

export function FacebookPagesHorizontal() {
  return (
    <div className="w-full bg-white p-4 rounded-lg shadow max-w-7xl mx-auto mb-4">
      <h2 className="text-lg font-semibold mb-3">Suggested Pages</h2>

      {/* Horizontal scrollable container */}
      <div className="overflow-x-auto pb-2">
        <div className="flex space-x-4">
          {facebookPages.map((page) => (
            <div key={page.id} className="flex-shrink-0 w-[200px] border rounded-lg overflow-hidden">
              <div className="p-3 flex flex-col items-center">
                {/* Page logo */}
                <div className="w-16 h-16 relative mb-2">
                  <Image
                    src={page.logoUrl || "/placeholder.svg"}
                    alt={`${page.name} logo`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>

                {/* Page name */}
                <h3 className="text-blue-600 font-medium text-center mb-2 truncate w-full">{page.name}</h3>

                {/* Follow button */}
                <Button variant="outline" size="sm" className="w-full mb-1 text-gray-600">
                  <Facebook className="h-4 w-4 mr-2 text-blue-600" />
                  Follow Page
                </Button>

                {/* Follower count */}
                <p className="text-xs text-gray-500">{page.followers} followers</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: View all link
      <div className="mt-3 text-center">
        <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
          See All Suggested Pages
        </a>
      </div> */}
    </div>
  )
}

