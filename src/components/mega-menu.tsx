import Link from "next/link"
import Image from "next/image"
import { ChevronRight, CircleUser } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MegaMenu() {
  return (
    <div className="absolute top-16 left-0 right-0 z-50 bg-white dark:bg-gray-950 border-b dark:border-gray-800 shadow-lg">
      <div className="container grid grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-4 text-sm font-medium">Explore Our Pages</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Getting Started</h4>
                <p className="text-xs text-gray-500">Discover our unique offerings and solutions.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Features Overview</h4>
                <p className="text-xs text-gray-500">Learn about our innovative features here.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Use Cases</h4>
                <p className="text-xs text-gray-500">Find out how we can help you.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Success Stories</h4>
                <p className="text-xs text-gray-500">Explore our customer success stories.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium">Resources</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Blog</h4>
                <p className="text-xs text-gray-500">Check out our latest updates and news.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Community</h4>
                <p className="text-xs text-gray-500">Join our community and connect with us.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Partners</h4>
                <p className="text-xs text-gray-500">Discover our partnership opportunities today.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Expert Insights</h4>
                <p className="text-xs text-gray-500">Get insights from our expert team.</p>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-medium">Latest Blog Posts</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Instagram Algorithm Updates</h4>
                <p className="text-xs text-gray-500">Read our insights on industry trends.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Engagement Tips</h4>
                <p className="text-xs text-gray-500">Explore tips and tricks for success.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Newsletter Archive</h4>
                <p className="text-xs text-gray-500">Stay updated with our newsletter.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <CircleUser className="w-5 h-5 mt-0.5 text-pink-500" />
              <div>
                <h4 className="text-sm font-medium">Resource Library</h4>
                <p className="text-xs text-gray-500">Find resources to enhance your experience.</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-md">
          <h3 className="mb-4 text-sm font-medium">Featured Article</h3>
          <div className="mb-4">
            <div className="w-full h-32 bg-gradient-to-r from-purple-200 to-pink-200 mb-2 rounded-md flex items-center justify-center overflow-hidden">
              <Image
                src="/placeholder.svg?height=128&width=256"
                alt="Featured"
                width={256}
                height={128}
                className="object-cover"
              />
            </div>
            <h4 className="text-sm font-medium">10X Your Instagram Engagement</h4>
            <p className="text-xs text-gray-500">
              Discover how to boost your Instagram presence with automated responses.
            </p>
            <Link href="#" className="text-xs text-pink-500 hover:underline">
              Read more
            </Link>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-between border-pink-200 hover:bg-pink-50 hover:text-pink-500 transition-colors"
          >
            View All Resources <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

