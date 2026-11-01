"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Calculator,
  ChevronRight,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";

interface EstimatorOption {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  priceStarting: string;
  image: string;
  href: string;
  features: string[];
  deliveryTime: string;
}

const ESTIMATOR_OPTIONS: EstimatorOption[] = [
  {
    id: "full-home",
    title: "Full Home Interiors",
    tagline: "Turnkey architectural interior solutions engineered with precision windows, custom carpentry, and bespoke finishes.",
    badge: "Turnkey Solution",
    priceStarting: "From ₹1,350 / sq.ft",
    image: "/images/inspiration/living-room.jpg",
    href: "/price-calculator",
    deliveryTime: "35-45 Days",
    features: [
      "Acoustic Aluminium & uPVC Systems",
      "End-to-End Living, Dining & Bedroom Joinery",
      "10-Year Hyderabad Factory Warranty",
    ],
  },
  {
    id: "kitchen",
    title: "Modular Kitchens",
    tagline: "High-moisture resilient kitchens with German Blum/Hettich hardware, quartz slabs, and sleek aluminium glass cabinets.",
    badge: "710 BWP Marine Ply",
    priceStarting: "From ₹2.25 Lakhs",
    image: "/images/inspiration/kitchen.jpg",
    href: "/price-calculator",
    deliveryTime: "25-30 Days",
    features: [
      "German Soft-Close Tandem Drawers",
      "Fluted Glass Aluminium Lift-Ups",
      "Termite & Boiling Water Proof Core",
    ],
  },
  {
    id: "wardrobe",
    title: "Precision Wardrobes",
    tagline: "Floor-to-ceiling sliding & walk-in closets with anodized slim aluminium profiles and smart sensor LED illumination.",
    badge: "Domal Slim Profile",
    priceStarting: "From ₹1,150 / sq.ft",
    image: "/images/inspiration/wardrobe.jpg",
    href: "/price-calculator",
    deliveryTime: "20-25 Days",
    features: [
      "Slim Aluminium Glass Sliding Doors",
      "Concealed Soft-Close Heavy Duty Tracks",
      "Anti-Fingerprint Acrylic & Matte Laminates",
    ],
  },
];

const BHK_DATA = [
  {
    type: "2 BHK",
    size: "1,100 – 1,350 sq.ft",
    range: "₹6.5L – ₹10.5L",
    timeline: "30-35 Days",
  },
  {
    type: "3 BHK",
    size: "1,600 – 2,100 sq.ft",
    range: "₹9.8L – ₹16.5L",
    timeline: "35-42 Days",
  },
  {
    type: "4 BHK",
    size: "2,400 – 3,200 sq.ft",
    range: "₹14.5L – ₹24.0L",
    timeline: "40-48 Days",
  },
  {
    type: "Luxury Villa",
    size: "3,500 – 5,500+ sq.ft",
    range: "₹22.0L – ₹42.0L+",
    timeline: "45-60 Days",
  },
];

const ROTATING_CATEGORIES = [
  "Full Home Interiors",
  "Modular Kitchens",
  "Precision Wardrobes",
  "Acoustic Windows & Glazing",
];

export default function PriceEstimatorSection() {
  const [currentRotIndex, setCurrentRotIndex] = useState(0);
  const [nextRotIndex, setNextRotIndex] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [selectedBhk, setSelectedBhk] = useState(1); // default 3 BHK

  useEffect(() => {
    const timer = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentRotIndex((prev) => {
          const next = (prev + 1) % ROTATING_CATEGORIES.length;
          setNextRotIndex((next + 1) % ROTATING_CATEGORIES.length);
          return next;
        });
        setIsRotating(false);
      }, 500);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const activeBhk = BHK_DATA[selectedBhk];

  return (
    <section id="price-estimator" className="py-14 sm:py-20 bg-[#FDFDFE] border-b border-gray-100 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Distinct, Architectural, Editorial */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E23744] bg-[#FFF1F2] border border-[#FFE4E6] mb-4 shadow-2xs">
            <Calculator className="w-3.5 h-3.5 text-[#E23744]" />
            <span>Cost Intelligence &amp; Estimator</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-2.5 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] font-display tracking-tight leading-tight">
            <span>Calculate Your Estimate For</span>
            <div className="relative inline-flex items-center h-10 sm:h-12 overflow-hidden align-middle min-w-[280px] sm:min-w-[340px] md:min-w-[380px] text-left">
              {/* Active Category */}
              <div
                className="absolute left-0 top-0 w-full h-full flex items-center text-[#E23744] font-extrabold whitespace-nowrap"
                style={{
                  transform: isRotating ? "translateY(-100%) rotateX(45deg)" : "translateY(0%) rotateX(0deg)",
                  opacity: isRotating ? 0 : 1,
                  transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease-in-out",
                  transformOrigin: "center top",
                }}
              >
                {ROTATING_CATEGORIES[currentRotIndex]}
              </div>

              {/* Incoming Category */}
              <div
                className="absolute left-0 top-0 w-full h-full flex items-center text-[#E23744] font-extrabold whitespace-nowrap"
                style={{
                  transform: isRotating ? "translateY(0%) rotateX(0deg)" : "translateY(100%) rotateX(-45deg)",
                  opacity: isRotating ? 1 : 0,
                  transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease-in-out",
                  transformOrigin: "center bottom",
                }}
              >
                {ROTATING_CATEGORIES[nextRotIndex]}
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#555555] mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
            Transparent, factory-direct cost benchmarks calibrated for Hyderabad luxury apartments, gated villas, and commercial spaces.
          </p>
        </div>

        {/* 3 Architectural Category Cards (Bespoke Professional Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {ESTIMATOR_OPTIONS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.09)] hover:border-gray-300 transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Card Photo Banner with Depth of Field & Floating Badges */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Technical Badge (Top Left) */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="inline-block bg-white/95 backdrop-blur-md text-[#111111] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs border border-white/50">
                    {item.badge}
                  </span>
                </div>

                {/* Price Benchmark (Bottom Right Over Image) */}
                <div className="absolute bottom-3.5 right-3.5 z-10 text-right">
                  <span className="inline-block bg-[#111111]/85 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-lg border border-white/10 shadow-xs">
                    {item.priceStarting}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#111111] font-display tracking-tight group-hover:text-[#E23744] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[#666666] mt-2 leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Architectural Specs List */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-gray-100">
                    {item.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#333333]">
                        <CheckCircle2 className="w-4 h-4 text-[#E23744] shrink-0 mt-0.5" strokeWidth={2.2} />
                        <span className="leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Timeline + Modern Action Button */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#777777] font-medium">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{item.deliveryTime}</span>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#111111] text-white hover:bg-[#E23744] font-semibold text-xs transition-colors duration-200 shadow-2xs group/btn"
                  >
                    <span>Calculate</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Quick Benchmark Widget (Value-Add Architectural Calculator) */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto bg-gradient-to-br from-white to-[#F8F9FA] rounded-2xl border border-gray-200/90 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Step 1: BHK Filter Selector */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#777777] block mb-2.5">
                Quick Project Cost Estimator
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#111111] font-display">
                Select Your Property Layout:
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                {BHK_DATA.map((bhk, idx) => (
                  <button
                    key={bhk.type}
                    type="button"
                    onClick={() => setSelectedBhk(idx)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                      selectedBhk === idx
                        ? "bg-[#E23744] text-white shadow-xs"
                        : "bg-white border border-gray-200 text-[#444444] hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="font-extrabold">{bhk.type}</div>
                    <div className={`text-[10px] mt-0.5 font-normal ${selectedBhk === idx ? "text-white/80" : "text-gray-400"}`}>
                      {bhk.size.split("–")[0].trim()}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Instant Computed Estimate Range */}
            <div className="lg:col-span-4 bg-white rounded-xl border border-gray-200/80 p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#666666] font-medium">Estimated Budget ({activeBhk.type})</span>
                <span className="text-[11px] font-semibold text-[#0D7A68] bg-[#E6F4F1] px-2 py-0.5 rounded-md">
                  Zero Hidden Fees
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-display mt-2">
                {activeBhk.range}
              </div>
              <p className="text-[11px] text-[#777777] mt-1.5 leading-snug">
                Includes aluminium/uPVC windows, bespoke modular joinery, hardware &amp; factory installation.
              </p>
            </div>

            {/* Step 3: Action Buttons */}
            <div className="lg:col-span-3 flex flex-col gap-2.5">
              <Link
                href="/price-calculators"
                className="w-full py-3 px-4 rounded-xl bg-[#E23744] hover:bg-[#C92531] text-white font-bold text-xs uppercase tracking-wider text-center transition-all shadow-xs flex items-center justify-center gap-1.5"
              >
                <span>Full Itemized BOM</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <a
                href={`https://wa.me/91${BUSINESS_INFO.mobile}?text=Hi%20Sky%20Tech%20Windows,%20I%20would%20like%20a%20detailed%20estimate%20and%203D%20BOM%20for%20my%20${encodeURIComponent(activeBhk.type)}%20(${encodeURIComponent(activeBhk.size)}).`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-[#222222] font-semibold text-xs text-center transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
