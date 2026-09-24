"use client"

import Image from "next/image"
import Link from "next/link"
import { Youtube } from "lucide-react"
import { useState } from "react"

export function SocialSection() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoId = "e6HftxJoYoc"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <>
      {/* About Section */}
      <div className="bg-green-500 rounded-lg overflow-hidden">
        <h2 className="text-white font-medium p-4 flex items-center">
          <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <span className="text-green-500">▼</span>
          </span>
          About Shanwara Group
        </h2>
      </div>

      {/* Video Section */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="relative aspect-video">
          {!videoLoaded && (
            <>
              <Image
                src={thumbnailUrl || "/placeholder.svg"}
                alt="Company Video"
                fill
                className="object-cover"
                unoptimized // To ensure we get the exact YouTube thumbnail
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer"
                  onClick={() => setVideoLoaded(true)}
                >
                  <Youtube className="text-white" />
                </div>
              </div>
            </>
          )}

          {videoLoaded && (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              onLoad={() => setVideoLoaded(true)}
            ></iframe>
          )}
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="bg-green-500 rounded-lg overflow-hidden">
        <h2 className="text-white font-medium p-4 flex items-center">
          <span className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
            <span className="text-green-500">▼</span>
          </span>
          Follow Us
        </h2>
      </div>

      {/* Social Media Icons - Circular Version with X and Instagram */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-around">
          {/* Facebook */}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#3b5998] rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#0077b5] rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>

          {/* YouTube */}
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-[#ff0000] rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
          </Link>

          {/* X (Twitter) */}
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-black rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <path d="M4 4l11.5 11.5" />
              <path d="M4 20l16-16" />
              <path d="M20 20l-6.5-6.5" />
            </svg>
          </Link>

          {/* Instagram */}
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#ffdc80] via-[#fcaf45] to-[#e1306c] rounded-full hover:opacity-90 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

