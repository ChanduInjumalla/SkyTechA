"use client";

import React, { useState } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewItem {
  id: string;
  quote: string;
  highlight: string;
  clientType: string;
  location: string;
  project: string;
  rating: number;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    quote:
      "The acoustic dampening on the Domal European sliding windows is extraordinary. Completely cuts off heavy traffic noise, and the corner crimping is factory-perfect.",
    highlight: "European Domal System",
    clientType: "Villa Homeowner",
    location: "Jubilee Hills, Hyderabad",
    project: "Full Villa Windows & Glazing",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Factory-direct pricing saved us nearly 20% compared to interior design agencies. The 710 BWP modular kitchen and soft-close Blum hardware feel ultra-premium.",
    highlight: "Modular Kitchen & Storage",
    clientType: "Apartment Owner",
    location: "Kokapet, Hyderabad",
    project: "3 BHK Turnkey Interiors",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Floor-to-ceiling slim aluminium profile wardrobes with fluted glass. Zero track wobble, perfectly smooth glide, and completed right on the 30-day timeline.",
    highlight: "Slim Profile Wardrobes",
    clientType: "Duplex Resident",
    location: "Financial District, Hyderabad",
    project: "Master & Guest Wardrobes",
    rating: 5,
  },
  {
    id: "4",
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
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white border-b border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple & Aesthetic Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12 pb-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-2.5">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#111111] bg-gray-100 px-2 py-0.5 rounded-md">
                4.9 / 5.0 Rating
              </span>
              <span className="text-xs text-[#777777] font-medium hidden sm:inline">
                • 1,200+ Hyderabad Installations
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111111] font-display tracking-tight">
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

        {/* 4 Clean Minimalist Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAFAFA] rounded-xl border border-gray-200/70 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-gray-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-3.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              {/* Clean Footer Info (Aesthetic, No Clutter) */}
              <div className="pt-4 mt-5 border-t border-gray-200/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111111]">
                    {rev.clientType}
                  </span>
                  <span className="text-[11px] font-medium text-[#E23744]">
                    {rev.highlight}
                  </span>
                </div>
                <span className="text-[11px] text-[#777777] block mt-0.5">
                  {rev.location}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
