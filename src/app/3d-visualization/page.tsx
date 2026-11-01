import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Eye,
  CheckCircle,
  Phone,
  MessageSquare,
  ArrowRight,
  Maximize2,
  Box,
} from "lucide-react";
import { CONTACT_LINKS } from "@/content/business";

export const metadata: Metadata = {
  title: "3D Visualization & Walkthroughs | SkyTech Aluminium Hyderabad",
  description:
    "Experience photorealistic 3D architectural renders, VR walkthroughs, and CAD elevations for windows, modular kitchens, and turnkey luxury interiors in Hyderabad.",
};

const VISUALIZATION_GALLERY = [
  {
    title: "Ultra-Modern Modular Kitchen in Pastel Teal & Fluted Glass",
    category: "Kitchen 3D Model",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    specs: "Full 360° VR Walkthrough • 4K Render Resolution • Millimeter Precision BOM",
  },
  {
    title: "European Domal Floor-to-Ceiling Balcony Fenestration",
    category: "Window Elevation",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    specs: "Acoustic Glass Simulation • Wind Load Calculation • Anodized Finish Preview",
  },
  {
    title: "Walk-in Dressing Wardrobe with Bronze Tinted Profiles",
    category: "Wardrobe 3D Render",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=80",
    specs: "Internal Sensor Lighting Simulation • Concealed Track Mechanics • Velvet Finish",
  },
  {
    title: "Executive Conference 12mm Frameless Glass Partitions",
    category: "Commercial Interior",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    specs: "Sound Transmission Class (STC) Modelling • Black U-Channel Detailing",
  },
  {
    title: "Double-Height Contemporary Living Room & Staircase Railing",
    category: "Full Home 3D Render",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    specs: "Lighting & Sunlight Ray-Tracing • Continuous LED Base Shoe Railings",
  },
  {
    title: "Modern Commercial Facade Structural Glazing & ACP Cladding",
    category: "Exterior Elevation",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    specs: "Structural Wind Pressure Simulation • 4mm FR Grade Panel Panelling",
  },
];

export default function ThreeDVisualizationPage() {
  return (
    <div className="w-full bg-white text-[#1F1F1F]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#FAFBFB] to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E23744] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Photorealistic 3D Design Experience</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Visualize Your Space in <span className="text-[#E23744]">Stunning 3D</span> Before Fabrication
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Eliminate guesswork. Our design engineering studio provides interactive 3D renders, VR walkthroughs, and precise Bill of Materials (BOM) for homes, villas, and commercial spaces across Hyderabad.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#E23744] hover:bg-[#C92531] text-white text-sm font-semibold rounded-full shadow-lg shadow-red-500/25 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Free 3D Design Session</span>
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-full transition-colors"
            >
              Book Site Laser Measurement
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Banner */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="space-y-1">
              <span className="text-lg font-bold text-[#E23744]">0mm Tolerance</span>
              <p className="text-xs text-gray-600">Calibrated against our Leica laser site measurements</p>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-bold text-[#111827]">4K Ultra-HD</span>
              <p className="text-xs text-gray-600">Ray-traced lighting and realistic material texture previews</p>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-bold text-[#111827]">100% Factory Feasible</span>
              <p className="text-xs text-gray-600">Directly linked to Hayathnagar CNC cutting specs</p>
            </div>
            <div className="space-y-1">
              <span className="text-lg font-bold text-[#E23744]">Complimentary</span>
              <p className="text-xs text-gray-600">Free 3D layout consultation with every project quote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Recent 3D Visualizations &amp; Project Designs
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Explore actual 3D models developed for luxury apartments in Kokapet, Jubilee Hills villas, and Hitec City office hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VISUALIZATION_GALLERY.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <h3 className="font-bold text-base text-[#111827] group-hover:text-[#E23744] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono">
                    {item.specs}
                  </p>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#E23744] flex items-center gap-1 group-hover:underline">
                      <span>Request Similar Design</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking CTA */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-display font-bold">
            Ready to See Your Home in Full 3D?
          </h2>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Book a consultation today. Our interior architects will create a custom 3D model with exact pricing in under 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-[#E23744] hover:bg-[#C92531] text-white font-semibold rounded-full shadow-lg transition-colors text-sm"
            >
              Book Free Site Measurement
            </Link>
            <a
              href="tel:9494600741"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 9494600741</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
