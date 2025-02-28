import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Instagram Engagement?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses already using DMly to automate their Instagram interactions and grow their
            audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-pink-600 hover:bg-white/90 transition-colors px-8 py-6 h-auto text-lg font-medium">
              Start Your Free 14-Day Trial
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 transition-colors px-8 py-6 h-auto text-lg font-medium"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-80">No credit card required. Cancel anytime.</p>
        </div>
      </div>
    </section>
  )
}

