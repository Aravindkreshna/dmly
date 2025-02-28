"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, CircleUser, CuboidIcon as Cube } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InstagramEngagement() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          <div className="flex items-center gap-8">
            <Link href="#" className="text-xl font-bold italic">
              Logo
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-sm font-medium">
                Home Page
              </Link>
              <Link href="#" className="text-sm font-medium">
                About Us
              </Link>
              <Link href="#" className="text-sm font-medium">
                Contact Us
              </Link>
              <div className="relative">
                <button
                  className="flex items-center gap-1 text-sm font-medium"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  Services <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Join
            </Button>
            <Button size="sm" className="bg-black text-white hover:bg-black/90">
              Start
            </Button>
          </div>
        </div>
      </header>

      {/* Mega Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-white border-b shadow-lg">
          <div className="container grid grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-sm font-medium">Explore Our Pages</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page One</h4>
                    <p className="text-xs text-gray-500">Discover our unique offerings and solutions.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Two</h4>
                    <p className="text-xs text-gray-500">Learn about our innovative features here.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Three</h4>
                    <p className="text-xs text-gray-500">Find out how we can help you.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Four</h4>
                    <p className="text-xs text-gray-500">Explore our customer success stories.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">More Useful Links</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Five</h4>
                    <p className="text-xs text-gray-500">Check out our latest updates and news.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Six</h4>
                    <p className="text-xs text-gray-500">Join our community and connect with us.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Seven</h4>
                    <p className="text-xs text-gray-500">Discover our partnership opportunities today.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Eight</h4>
                    <p className="text-xs text-gray-500">Get insights from our expert team.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-medium">Latest Blog Posts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Nine</h4>
                    <p className="text-xs text-gray-500">Read our insights on industry trends.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Ten</h4>
                    <p className="text-xs text-gray-500">Explore tips and tricks for success.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Eleven</h4>
                    <p className="text-xs text-gray-500">Stay updated with our newsletter.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CircleUser className="w-5 h-5 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium">Page Twelve</h4>
                    <p className="text-xs text-gray-500">Find resources to enhance your experience.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="mb-4 text-sm font-medium">Featured Articles</h3>
              <div className="mb-4">
                <div className="w-full h-20 bg-gray-200 mb-2 flex items-center justify-center">
                  <Image src="/placeholder.svg?height=80&width=80" alt="Featured" width={80} height={80} />
                </div>
                <h4 className="text-sm font-medium">Engagement Strategies</h4>
                <p className="text-xs text-gray-500">Discover how to boost your Instagram presence.</p>
                <Link href="#" className="text-xs text-gray-500 hover:underline">
                  Read more
                </Link>
              </div>
              <Button variant="outline" size="sm" className="w-full justify-between">
                Button <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-bold mb-4">Transform Your Instagram Engagement with DMly</h1>
              <p className="mb-6 text-gray-700">
                DMly empowers your business to connect effortlessly with your audience through automated responses and
                seamless interactions. Unlock the potential of your Instagram presence and turn conversations into
                conversions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-black text-white hover:bg-black/90">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <Image src="/placeholder.svg?height=200&width=200" alt="Instagram post" width={200} height={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Transform Your Instagram Engagement with Automated DM Replies
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Cube className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                Leverage AI-Driven Messages for Personalized Customer Interactions
              </h3>
              <p className="text-gray-600 mb-4">
                DMly ensures timely responses to your audience, enhancing customer satisfaction.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Cube className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold mb-2">Automate Responses to Comments with Seamless Interactions</h3>
              <p className="text-gray-600 mb-4">
                Engage effortlessly with your audience by automating comment replies.
              </p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Cube className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold mb-2">
                Maximize Engagement Opportunities with Comment-Triggered Automations
              </h3>
              <p className="text-gray-600 mb-4">Turn every comment into a chance to connect and convert.</p>
              <Link href="#" className="inline-flex items-center text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

