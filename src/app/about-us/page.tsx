import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_INFO } from "@/content/business";
import { Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Sky Tech Windows | Hyderabad Precision Fabrication Workshop",
  description:
    "Learn about Sky Tech Windows, Hyderabad's premier factory-direct manufacturer of precision aluminium windows, uPVC systems, and modular interiors.",
};

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#1F1F1F]">
      {/* Hero */}
      <section className="bg-[#FAFAFA] border-b border-gray-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E23744]">
            HAYATHNAGAR KHALSA FABRICATION HUB
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1F1F] tracking-tight">
            Crafting Precision Architectural Living in Hyderabad
          </h1>
          <p className="text-sm sm:text-base text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Founded and directed by <strong>Yousuf Shaik</strong>, Sky Tech Windows bridges the gap
            between European engineering standards and local factory-direct affordability.
          </p>
        </div>
      </section>

      {/* Story & Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 text-sm text-[#4A4A4A] leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#1F1F1F]">
              Why We Eliminate Middlemen & Interior Agency Markups
            </h2>
            <p>
              Most homeowners in Hyderabad pay 25% to 40% agency commissions to third-party interior
              studios who outsource all cutting and glasswork to independent workshops. At Sky Tech, we
              own our fabrication infrastructure in Hayathnagar Khalsa.
            </p>
            <p>
              By combining CNC aluminium profile cutting, acoustic double-glazing assembly, and 710
              BWP modular joinery under one single roof, our clients receive factory-backed guarantees,
              millimeter tolerances, and substantial cost savings.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-4 bg-[#FAFAFA]">
                <span className="text-2xl font-extrabold text-[#E23744] block">1,200+</span>
                <span className="text-xs text-[#757575] font-medium">Sites Handed Over</span>
              </div>
              <div className="border border-gray-200 rounded-xl p-4 bg-[#FAFAFA]">
                <span className="text-2xl font-extrabold text-[#1F1F1F] block">10-Year</span>
                <span className="text-xs text-[#757575] font-medium">Factory Warranty</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
              alt="Sky Tech Hyderabad Workshop Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1F1F1F] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold">
            Ready to Plan Your Hyderabad Home?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Book a complimentary laser site survey or visit our workshop on Shiridi Nagar Main Rd,
            Hayathnagar Khalsa.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              BOOK FREE LASER MEASUREMENT
            </Link>
            <Link
              href="/modular-kitchens"
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20"
            >
              EXPLORE DESIGNS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
