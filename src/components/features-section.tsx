import { MessageSquareText, Bot, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-purple-950/10"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features to Supercharge Your Instagram Engagement
          </h2>
          <p className="text-lg text-gray-600">
            DMly provides everything you need to automate and optimize your Instagram interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <MessageSquareText className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Automated DM Replies</h3>
            <p className="text-gray-600 mb-4">
              Set up intelligent auto-responses to common questions and inquiries, ensuring no message goes unanswered,
              even when you're offline.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> 24/7 instant responses
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Customizable message templates
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Multi-language support
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 flex items-center justify-center">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">AI-Driven Messages</h3>
            <p className="text-gray-600 mb-4">
              Leverage advanced AI to create personalized responses that feel human and authentic, increasing engagement
              and customer satisfaction.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Context-aware responses
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Sentiment analysis
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Continuous learning
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-purple-100 dark:border-purple-900 hover:shadow-md transition-shadow">
            <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Comment-Triggered Automations</h3>
            <p className="text-gray-600 mb-4">
              Set up workflows that automatically engage with users based on their comments, turning every interaction
              into an opportunity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Keyword-based triggers
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Custom workflow creation
              </li>
              <li className="flex items-center text-sm text-gray-600">
                <span className="mr-2 text-pink-500">✓</span> Performance analytics
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

