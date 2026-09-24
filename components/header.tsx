"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import logo2 from "@/public/assets/1group_logo.jpg"
import logo from "@/public/assets/logo.png"
import logooo from "@/public/assets/group_logo.jpg"

// Expanded dropdown data with more menu items
const menuItems = [
  {
    title: "Home",
    url: "/",
    items: [
      { title: "Main Home", url: "/" },
      { title: "News & Updates", url: "/news" },
      { title: "Featured Products", url: "/featured" },
      { title: "Promotions", url: "/promotions" },
      { title: "Events Calendar", url: "/events" },
      { title: "Customer Testimonials", url: "/testimonials" },
    ],
  },
  {
    title: "About Shanwara",
    url: "/about",
    items: [
      { title: "Our History", url: "/about/history" },
      { title: "Mission & Vision", url: "/about/mission" },
      { title: "Leadership Team", url: "/about/team" },
      { title: "Corporate Values", url: "/about/values" },
      { title: "Awards & Recognition", url: "/about/awards" },
      { title: "Corporate Social Responsibility", url: "/about/csr" },
      { title: "Quality Assurance", url: "/about/quality" },
      { title: "Sustainability Initiatives", url: "/about/sustainability" },
      { title: "Company Milestones", url: "/about/milestones" },
    ],
  },
  {
    title: "Our Brands",
    url: "/brands",
    items: [
      { title: "Food Products", url: "/brands/food" },
      { title: "Beverage Products", url: "/brands/beverage" },
      { title: "New Launches", url: "/brands/new" },
      { title: "Dairy Products", url: "/brands/dairy" },
      { title: "Confectionery", url: "/brands/confectionery" },
      { title: "Snacks & Savories", url: "/brands/snacks" },
      { title: "Health & Nutrition", url: "/brands/health" },
      { title: "Organic Products", url: "/brands/organic" },
      { title: "Ready-to-Eat", url: "/brands/ready-to-eat" },
      { title: "Specialty Products", url: "/brands/specialty" },
      { title: "Seasonal Offerings", url: "/brands/seasonal" },
    ],
  },
  {
    title: "Shanwara in Media",
    url: "/media",
    items: [
      { title: "Press Releases", url: "/media/press" },
      { title: "News Coverage", url: "/media/news" },
      { title: "Media Kit", url: "/media/kit" },
      { title: "Brand Campaigns", url: "/media/campaigns" },
      { title: "TV Commercials", url: "/media/commercials" },
      { title: "Print Advertisements", url: "/media/print" },
      { title: "Digital Marketing", url: "/media/digital" },
      { title: "Social Media Presence", url: "/media/social" },
      { title: "Media Contacts", url: "/media/contacts" },
      { title: "Brand Guidelines", url: "/media/guidelines" },
      { title: "Photo Gallery", url: "/media/gallery" },
      { title: "Video Library", url: "/media/videos" },
    ],
  },
  // {
  //   title: "Global Presence",
  //   url: "/global",
  //   items: [
  //     { title: "International Markets", url: "/global/markets" },
  //     { title: "Export Products", url: "/global/exports" },
  //     { title: "Global Partners", url: "/global/partners" },
  //     { title: "Asia Pacific", url: "/global/asia-pacific" },
  //     { title: "Middle East", url: "/global/middle-east" },
  //     { title: "Europe", url: "/global/europe" },
  //     { title: "North America", url: "/global/north-america" },
  //     { title: "Africa", url: "/global/africa" },
  //     { title: "Latin America", url: "/global/latin-america" },
  //     { title: "International Certifications", url: "/global/certifications" },
  //     { title: "Global Distribution Network", url: "/global/distribution" },
  //     { title: "International Trade Shows", url: "/global/trade-shows" },
  //   ],
  // },
  {
    title: "National Presence",
    url: "/national",
    items: [
      { title: "Distribution Network", url: "/national/distribution" },
      { title: "Manufacturing Units", url: "/national/manufacturing" },
      { title: "Regional Offices", url: "/national/offices" },
      { title: "North Region", url: "/national/north" },
      { title: "South Region", url: "/national/south" },
      { title: "East Region", url: "/national/east" },
      { title: "West Region", url: "/national/west" },
      { title: "Central Region", url: "/national/central" },
      { title: "Retail Partnerships", url: "/national/retail" },
      { title: "Warehouse Facilities", url: "/national/warehouses" },
      { title: "Supply Chain", url: "/national/supply-chain" },
      { title: "Local Sourcing", url: "/national/sourcing" },
    ],
  },
  {
    title: "Career Shanwara",
    url: "/career",
    items: [
      { title: "Current Openings", url: "/career/openings" },
      { title: "Why Join Us", url: "/career/why-join" },
      { title: "Employee Benefits", url: "/career/benefits" },
      { title: "Career Development", url: "/career/development" },
      { title: "Graduate Programs", url: "/career/graduates" },
      { title: "Internship Opportunities", url: "/career/internships" },
      { title: "Leadership Development", url: "/career/leadership" },
      { title: "Employee Testimonials", url: "/career/testimonials" },
      { title: "Work Culture", url: "/career/culture" },
      { title: "Diversity & Inclusion", url: "/career/diversity" },
      { title: "Application Process", url: "/career/application" },
      { title: "FAQs", url: "/career/faqs" },
    ],
  },
  {
    title: "Contact Us",
    url: "/contact",
    items: [
      { title: "Head Office", url: "/contact/head-office" },
      { title: "Regional Offices", url: "/contact/regional" },
      { title: "Customer Support", url: "/contact/support" },
      { title: "Sales Inquiries", url: "/contact/sales" },
      { title: "Distributor Inquiries", url: "/contact/distributors" },
      { title: "Supplier Relations", url: "/contact/suppliers" },
      { title: "Investor Relations", url: "/contact/investors" },
      { title: "Media Inquiries", url: "/contact/media" },
      { title: "Feedback & Suggestions", url: "/contact/feedback" },
      { title: "Product Complaints", url: "/contact/complaints" },
      { title: "Career Inquiries", url: "/contact/careers" },
      { title: "Visit Request", url: "/contact/visit" },
    ],
  },
]

export function Header() {
  const [activeItem, setActiveItem] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-green-500 py-4 px-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image
            src={logo || "/placeholder.svg"}
            alt="Shanwara Food & Beverage Ltd."
            width={200}
            height={60}
            className="h-12 w-auto"
          />
        </div>
        <Image
          src={logooo || "/placeholder.svg"}
          alt="Shanwara Food & Beverage Ltd."
          width={200}
          height={60}
          className="h-12 w-auto"
        />
        {/* <div className="hidden md:block">
          <div className="h-14 w-14 bg-green-400 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white"></div>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      {/* Navigation Menu - Option 1: Rectangular Buttons with Borders */}
      <div className="bg-green-500 py-3 max-w-7xl mx-auto">
        <div className=" flex flex-wrap justify-center gap-1 px-2">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setActiveItem(item.title)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <Link
                href={item.url}
                className={`
                  inline-flex items-center px-4 py-2 text-white font-medium
                  border border-green-300 rounded
                  ${item.title === "Home" ? "bg-green-600" : "hover:bg-green-600"} 
                  transition-colors
                `}
              >
                {item.title}
                {item.items && item.items.length > 0 && <ChevronDown className="h-4 w-4 ml-1" />}
              </Link>
              {item.items && item.items.length > 0 && (
                <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md w-64 z-10 max-h-[70vh] overflow-y-auto left-0 mt-1">
                  {item.items.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url}
                      className="block px-2 py-1 text-gray-800 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                    >
                      {subItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}

