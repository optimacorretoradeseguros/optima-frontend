import BlogPreviewSection from "@/components/home/blog-preview-section";
import BusinessSolutionsSection from "@/components/home/business-solutions-section";
import FinalCTASection from "@/components/home/final-cta-section";
import HeroSection from "@/components/home/hero-section";
import IndividualsSection from "@/components/home/individuals-section";
import WhatWeDoSection from "@/components/home/what-we-do-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <WhatWeDoSection />
      <BusinessSolutionsSection />
      <IndividualsSection />
      <WhyChooseUsSection />
      <BlogPreviewSection />
      <FinalCTASection />
    </div>
  )
}