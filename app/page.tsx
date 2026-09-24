"use Client"

import { Footer } from "@/components/footer"
import { ProductSlider } from "@/components/product-slider"
import { SocialSection } from "@/components/social-section"
import { ProductCarousel } from "@/components/product-carousel"
import { Header } from "@/components/header"
import { KeyClientsSection } from "@/components/key-clients-section"
import background from "@/public/assets/Background.jpeg"
import { use } from "react"
import { FacebookPagesHorizontal } from "@/components/facebook-pages-horizontal"

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="">
          <div className="max-w-7xl mx-auto   py-4">
            {/* Hero Section with Product Slider */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
              {/* Left side - Product Slider */}
              <div className="md:col-span-2 bg-green-100 rounded-lg overflow-hidden shadow-lg">
                <ProductSlider />
              </div>

              {/* Right side - Video and Social Media */}
              <div className="space-y-6">
                <SocialSection />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto ">
          {/* Product Carousel Section */}
          <div className="mb-4">
            <ProductCarousel />
          </div>
          {/* Key client Carousel Section */}
          <div className="mb-12">
            <KeyClientsSection />
          </div>
        </div>
        <FacebookPagesHorizontal/>
      </main>

      <Footer />
    </div>
  )
}

