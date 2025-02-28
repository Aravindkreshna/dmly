import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Businesses Love DMly</h2>
          <p className="text-lg text-gray-600">
            Experience the transformative benefits of automated Instagram engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Increased Engagement</h3>
                  <p className="text-gray-600">
                    Boost your engagement rates by up to 80% with timely, personalized responses that keep your audience
                    active and interested.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Time Savings</h3>
                  <p className="text-gray-600">
                    Save an average of 15+ hours per week by automating routine responses and interactions, allowing you
                    to focus on creating great content.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Streamlined Processes</h3>
                  <p className="text-gray-600">
                    Simplify your social media management with intuitive workflows and automations that handle
                    engagement while you're busy or offline.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Higher Conversion Rates</h3>
                  <p className="text-gray-600">
                    Turn casual followers into customers with strategic automations that guide users through your sales
                    funnel at the perfect moment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 p-2 rounded-2xl shadow-lg">
              <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="DMly Dashboard"
                  width={500}
                  height={500}
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

