import BlogPreviewSection from "@/components/home/blog-preview-section";
import BusinessSolutionsSection from "@/components/home/business-solutions-section";
import HeroSection from "@/components/home/hero-section";
import IndividualsSection from "@/components/home/individuals-section";
import UltimateCTASection from "@/components/home/ultimate-cta-section";
import WhatWeDoSection from "@/components/home/what-we-do-section";
import WhyChooseUsSection from "@/components/home/why-choose-us-section";
import { fetchPosts } from "@/lib/hygraph";

export default async function Home() {
  const posts = await fetchPosts();
  const recentPosts = posts ? posts.slice(0, 3) : [];

  return (
    <div className="w-full">
      <HeroSection />
      <WhatWeDoSection />
      <BusinessSolutionsSection />
      <IndividualsSection />
      <WhyChooseUsSection />
      <BlogPreviewSection posts={recentPosts} />
      <UltimateCTASection />
    </div>
  )
}