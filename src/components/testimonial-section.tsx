import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialSection() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/10"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Businesses Worldwide</h2>
          <p className="text-lg text-gray-600">See what our customers have to say about their experience with DMly</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "DMly has completely transformed how we handle our Instagram engagement. We've seen a 75% increase in
              response rate and our followers love the instant replies!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Sarah Johnson"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">Marketing Director, FashionBrand</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "The AI-driven responses are incredibly natural. Our customers can't tell they're automated, and we've
              been able to convert 40% more DM inquiries into sales."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Michael Chen"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Michael Chen</h4>
                <p className="text-sm text-gray-500">Founder, TechStartup</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-6 italic">
              "As a small business owner, I couldn't keep up with all the Instagram messages. DMly has been a
              game-changer, saving me hours every day while growing my audience."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Jessica Martinez"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">Jessica Martinez</h4>
                <p className="text-sm text-gray-500">Owner, Handmade Crafts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

