import Image from "next/image";
import Navbar from "../components/navbar"
import HeroSection from "../components/hero-section"
import FeaturesSection from "../components/features-section"
import BenefitsSection from "../components/benefits-section"
import CtaSection from "../components/cta-section"
import TestimonialSection from "../components/testimonial-section"
import NewsletterSection from "../components/newsletter-section"
import Footer from "../components/footer"
import PricingSection from "../components/pricing-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
          <Navbar />
          <main>
            <HeroSection />
            <FeaturesSection />
            <BenefitsSection />
            <PricingSection />
            <CtaSection />
            <TestimonialSection />
            <NewsletterSection />
          </main>
          <Footer />
        </div>
  );
}
