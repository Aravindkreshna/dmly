import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with DMly</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest tips, trends, and updates on conversational marketing automation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 border-purple-200 focus-visible:ring-pink-500"
            />
            <Button className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white border-0 hover:opacity-90 transition-opacity h-12">
              Subscribe
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}

