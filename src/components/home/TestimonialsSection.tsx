"use client";

import React, { useState, useMemo } from "react";
import { Star, CheckCircle, Quote, MapPin } from "lucide-react";

/**
 * =========================================================================
 * HOW TO CHANGE OR ADD CATEGORIES & REVIEWS:
 * 1. To change categories: Update the REVIEW_CATEGORIES array below.
 * 2. To change reviews: Add, edit, or remove items in the REVIEWS array.
 * 3. Make sure the "category" property of each review matches one of your categories.
 * =========================================================================
 */
export const REVIEW_CATEGORIES = [
  "All Reviews",
  "Windows & Glazing",
  "Modular Interiors",
] as const;

export type ReviewCategory = (typeof REVIEW_CATEGORIES)[number];

export interface ReviewItem {
  id: string;
  category: "Windows & Glazing" | "Modular Interiors";
  quote: string;
  highlight: string;
  clientType: string;
  location: string;
  project: string;
  rating: number;
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    category: "Windows & Glazing",
    quote:
      "The acoustic dampening on the Domal sliding windows is extraordinary. Completely cuts off heavy traffic noise, and the corner crimping is factory-perfect.",
    highlight: "European Domal System",
    clientType: "Villa Homeowner",
    location: "Jubilee Hills, Hyderabad",
    project: "Full Villa Windows & Glazing",
    rating: 5,
  },
  {
    id: "2",
    category: "Modular Interiors",
    quote:
      "Factory-direct pricing saved us nearly 20% compared to agencies. The 710 BWP modular kitchen and soft-close Blum hardware feel ultra-premium.",
    highlight: "Modular Kitchen & Storage",
    clientType: "Apartment Owner",
    location: "Kokapet, Hyderabad",
    project: "3 BHK Turnkey Interiors",
    rating: 5,
  },
  {
    id: "3",
    category: "Modular Interiors",
    quote:
      "Floor-to-ceiling slim profile wardrobes with fluted glass. Zero track wobble, perfectly smooth glide, and completed right on the 30-day timeline.",
    highlight: "Slim Profile Wardrobes",
    clientType: "Duplex Resident",
    location: "Financial District, Hyderabad",
    project: "Master & Guest Wardrobes",
    rating: 5,
  },
  {
    id: "4",
    category: "Windows & Glazing",
    quote:
      "Seamless 12mm acoustic toughened glass partitions with concealed pivot hinges. Clean silicone beading and zero alignment issues. Truly professional execution.",
    highlight: "12mm Glass Partitions",
    clientType: "Commercial Studio",
    location: "Hitec City, Hyderabad",
    project: "Acoustic Partitions & Facade",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Reviews");

  const filteredReviews = useMemo(() => {
    if (selectedCategory === "All Reviews") return REVIEWS;
    return REVIEWS.filter((r) => r.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="reviews" className="py-10 sm:py-16 bg-[#FBFBFC] border-b border-gray-100 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Aesthetic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8 pb-5 border-b border-gray-200/80">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#111111] bg-white border border-gray-200 px-2 py-0.5 rounded-md shadow-2xs">
                4.9 / 5.0 Rating
              </span>
              <span className="text-xs text-[#777777] font-medium hidden sm:inline">
                • 1,200+ Hyderabad Installations
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] font-display tracking-tight">
              Customer Experiences &amp; Reviews
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] mt-1 font-normal">
              Direct feedback from verified homeowners and architects across Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-[#0D7A68] bg-[#E6F4F1] font-semibold px-3 py-1.5 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>100% Verified Sites</span>
            </span>
          </div>
        </div>

        {/* 2 Category Tabs (Clean & Compact) */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto scrollbar-none pb-1">
          {REVIEW_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "All Reviews"
                ? REVIEWS.length
                : REVIEWS.filter((r) => r.category === cat).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#111111] text-white shadow-xs"
                    : "bg-white border border-gray-200 text-[#4A4A4A] hover:bg-gray-50 hover:text-[#111111]"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Clean Review Grid (2x2 Layout - Short & Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-xl border border-gray-200/90 p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-gray-300 hover:shadow-sm transition-all duration-200"
            >
              <div>
                {/* Rating Row & Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-semibold text-[#E23744] bg-[#FFF1F2] border border-[#FFE4E6] px-2 py-0.5 rounded-full">
                    {rev.highlight}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Card Footer: Client Type & Hyderabad Location */}
              <div className="pt-3.5 mt-3.5 border-t border-gray-100 flex items-center justify-between text-xs">
                <span className="font-bold text-[#111111]">
                  {rev.clientType}
                </span>
                <span className="text-[11px] text-[#777777] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E23744]" />
                  <span>{rev.location}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
