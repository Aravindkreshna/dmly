"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small businesses just getting started.",
      price: isAnnual ? 29 : 39,
      features: [
        "Up to 1,000 automated responses per month",
        "Basic AI message templates",
        "Instagram DM automation",
        "24/7 automated responses",
        "Basic analytics dashboard",
        "Email support",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and content creators.",
      price: isAnnual ? 79 : 99,
      features: [
        "Up to 5,000 automated responses per month",
        "Advanced AI message customization",
        "Instagram DM & comment automation",
        "Priority response routing",
        "Advanced analytics & reporting",
        "Custom workflow builder",
        "Priority email & chat support",
        "Team collaboration tools",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations needing maximum automation and control.",
      price: isAnnual ? 199 : 249,
      features: [
        "Unlimited automated responses",
        "Custom AI model training",
        "Multi-account management",
        "Advanced workflow automation",
        "Custom integration options",
        "Dedicated success manager",
        "24/7 priority support",
        "Custom analytics & reporting",
        "Enterprise-grade security",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Choose the perfect plan for your Instagram automation needs
          </p>
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm ${!isAnnual ? "text-gray-900 dark:text-white font-medium" : "text-gray-500"}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500"
            />
            <span className={`text-sm ${isAnnual ? "text-gray-900 dark:text-white font-medium" : "text-gray-500"}`}>
              Annual
              <span className="ml-1.5 inline-block px-2 py-0.5 text-xs font-medium text-pink-700 dark:text-pink-300 bg-pink-100 dark:bg-pink-900/30 rounded-full">
                Save 25%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "border-2 border-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 p-[2px]"
                  : ""
              }`}
            >
              <div
                className={`h-full rounded-xl bg-white dark:bg-gray-900 p-8 ${
                  plan.popular ? "" : "border border-purple-100 dark:border-purple-900"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 px-3 py-1 text-sm font-medium text-white text-center">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Billed annually (${plan.price * 12}/year)
                    </p>
                  )}
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white border-0 hover:opacity-90"
                      : ""
                  }`}
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include: 14-day free trial • No credit card required • Cancel anytime
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-pink-500" /> Secure payments
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-pink-500" /> Data privacy
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-pink-500" /> 99.9% uptime
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

