"use client";

import React, { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { CONTACT_LINKS } from "@/content/business";
import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
} from "lucide-react";

interface HeroSlide {
  id: number;
  heading: string;
  ctaText: string;
  ctaHref: string;
  image: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    heading: "Want to know how much your windows & interiors will cost?",
    ctaText: "CALCULATE NOW",
    ctaHref: "/contact-us",
    image:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 2,
    heading: "Introducing Hyderabad's first 10-year warranty*",
    ctaText: "BOOK FREE CONSULTATION",
    ctaHref: "/contact-us",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
  },
  {
    id: 3,
    heading: "Home to beautiful windows & interiors",
    ctaText: "BOOK FREE CONSULTATION",
    ctaHref: "/contact-us",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
  },
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative w-full bg-[#F8F9FA]">
      {/* 1. Full-Viewport Livspace Hero Banner (100% Viewport Height) */}
      <section className="relative w-full h-[calc(100dvh-72px)] lg:h-[calc(100dvh-112px)] min-h-[580px] overflow-hidden bg-gray-900 select-none">
        {/* Background Image Carousel with Smooth Fade */}
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transform transition-transform duration-7000 ease-out scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Livspace Signature Dark Gradient Overlay for Maximum Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Content Container (Positioned down in the lower section matching Livspace) */}
        <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end items-center text-center pb-20 sm:pb-24 lg:pb-28">
          <div className="max-w-4xl w-full space-y-6 sm:space-y-8">
            {/* Main Punchy H1 (Semantic SEO - Exact Livspace Style) */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight drop-shadow-md break-words leading-tight px-2 max-w-[92vw] mx-auto">
              {activeSlide.heading}
            </h1>

            {/* Single Red Cylinder CTA Button (Exact Livspace Style) */}
            <div className="pt-2 flex items-center justify-center">
              <Button
                variant="primary"
                size="lg"
                href={activeSlide.ctaHref}
                className="bg-[#E23744] hover:bg-[#C92531] text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm shadow-xl tracking-wider uppercase transition-transform hover:scale-105 active:scale-95"
              >
                {activeSlide.ctaText}
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Arrow Controls (Livspace Circular Buttons - Hidden on Mobile for clean touch experience) */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-800 items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-gray-800 items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicator Dots */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                idx === currentSlide
                  ? "w-8 h-2.5 bg-[#E23744]"
                  : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Floating Direct WhatsApp Action Button (Livspace Signature) */}
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat with Yousuf Shaik"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform group"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="sr-only">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
