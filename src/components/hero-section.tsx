import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col max-w-xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-pink-600">
              <span className="mr-1">✨</span> Automate Your Instagram Engagement
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-transparent bg-clip-text">
                Instagram
              </span>{" "}
              Engagement with DMly
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              DMly empowers your business to connect effortlessly with your audience through automated responses and
              seamless interactions. Unlock the potential of your Instagram presence and turn conversations into
              conversions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white border-0 hover:opacity-90 transition-opacity px-8 py-6 h-auto text-lg font-medium">
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-pink-200 hover:bg-pink-50 hover:text-pink-500 transition-colors px-8 py-6 h-auto text-lg font-medium"
              >
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <span className="mr-2">⭐️ Trusted by 10,000+ businesses</span>
              <span className="mx-2">•</span>
              <span>No credit card required</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-3 z-10">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Instagram post"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Instagram post"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-orange-100 to-yellow-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Instagram post"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-purple-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Instagram post"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

