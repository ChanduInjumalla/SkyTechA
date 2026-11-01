import React from "react";
import HomeHero from "@/components/home/HomeHero";
import OneStopShopGrid from "@/components/home/OneStopShopGrid";
import DesignInspirationGallery from "@/components/home/DesignInspirationGallery";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PriceEstimatorSection from "@/components/home/PriceEstimatorSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col flex-1 bg-white">
      {/* 1. Full Hero Carousel Banner */}
      <HomeHero />

      {/* 2. One-Stop Shop for All Things Interiors (Carousel Slider) */}
      <OneStopShopGrid />

      {/* 3. Design Inspiration & Recent Hyderabad Projects Gallery */}
      <DesignInspirationGallery />

      {/* 4. Why Choose Sky Tech Windows (Moving Right-to-Left Trust Ribbon) */}
      <WhyChooseUs />

      {/* 5. Cost Intelligence & Interactive Estimator */}
      <PriceEstimatorSection />

      {/* 6. Simple, Aesthetic & Professional Customer Reviews */}
      <TestimonialsSection />

      {/* 7. Frequently Asked Questions (FAQ) */}
      <FaqSection />
    </div>
  );
}
