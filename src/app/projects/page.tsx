"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Sparkles,
  ChevronRight,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";

interface ProjectItem {
  id: string;
  title: string;
  category: "Luxury Villas" | "Apartments & Penthouses" | "Modular Kitchens & Interiors" | "Glass Facades & Partitions";
  location: string;
  scope: string;
  timeline: string;
  image: string;
  clientType: string;
  features: string[];
}

const CATEGORIES = [
  "All Projects",
  "Luxury Villas",
  "Apartments & Penthouses",
  "Modular Kitchens & Interiors",
  "Glass Facades & Partitions",
] as const;

const COMPLETED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "The Glass Pavilion Villa",
    category: "Luxury Villas",
    location: "Jubilee Hills, Hyderabad",
    scope: "Domal 27mm Sliding Windows & 15mm Frameless Glass Balustrades",
    timeline: "25 Days Handover",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    clientType: "Luxury Duplex Residence",
    features: [
      "Acoustic Double Glazed Units (DGU)",
      "High-Wind Load Domal Profiles",
      "Concealed Stainless Mosquito Mesh",
    ],
  },
  {
    id: "proj-2",
    title: "High-Rise Sky Penthouse",
    category: "Apartments & Penthouses",
    location: "Kokapet Golden Mile, Hyderabad",
    scope: "Acoustic DGU Glass & Slim Profile Walk-In Wardrobes",
    timeline: "30 Days Handover",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    clientType: "4 BHK Luxury Apartment",
    features: [
      "Floor-to-Ceiling Slim Profile Sliders",
      "Sensor LED Illuminated Dressing Suite",
      "Anti-Fingerprint Matte Laminates",
    ],
  },
  {
    id: "proj-3",
    title: "Modern Minimalist Turnkey Home",
    category: "Modular Kitchens & Interiors",
    location: "Financial District, Gachibowli",
    scope: "710 BWP Modular Kitchen, TV Louvers & False Ceilings",
    timeline: "40 Days Handover",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    clientType: "3 BHK Premium Residence",
    features: [
      "German Blum Soft-Close Tandem Boxes",
      "Quartz Anti-Stain Countertops",
      "Custom Fluted Charcoal Panelling",
    ],
  },
  {
    id: "proj-4",
    title: "Acoustic Corporate Executive Suites",
    category: "Glass Facades & Partitions",
    location: "Hitec City, Hyderabad",
    scope: "12mm Toughened Glass Office Partitions with Floor Springs",
    timeline: "14 Days Handover",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    clientType: "Commercial Office Floor",
    features: [
      "Zero-Frame Acoustic Glass Walls",
      "Heavy-Duty Hydraulic Dorma Hinges",
      "Frosted Privacy Film Bands",
    ],
  },
  {
    id: "proj-5",
    title: "Independent Villa Architecture",
    category: "Luxury Villas",
    location: "Hayathnagar, Hyderabad",
    scope: "Custom Aluminium Casement Windows with Mosquito Mesh & Main Doors",
    timeline: "18 Days Handover",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    clientType: "Independent 3-Story Residence",
    features: [
      "Multi-Point Security Locking",
      "Architectural Wood-Finish Coating",
      "Triple Track Heavy Glazing",
    ],
  },
  {
    id: "proj-6",
    title: "Lakeside Luxury Duplex",
    category: "Apartments & Penthouses",
    location: "Banjara Hills, Hyderabad",
    scope: "Telescopic 45mm Sliding Partitions & Master Dressing Suite",
    timeline: "35 Days Handover",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    clientType: "Bespoke Villa Interiors",
    features: [
      "Synchronized Telescopic Soft-Brake",
      "Fluted Toughened Safety Glass",
      "Matt Black Anodized Aluminium",
    ],
  },
  {
    id: "proj-7",
    title: "Island Kitchen & Bar Lounge",
    category: "Modular Kitchens & Interiors",
    location: "Gachibowli, Hyderabad",
    scope: "Parallel Acrylic Kitchen with Breakfast Counter & Glass Cabinets",
    timeline: "28 Days Handover",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    clientType: "Gated Community Villa",
    features: [
      "Waterproof BWP Marine Core",
      "Hafele Servo-Drive Motorized Lifts",
      "Integrated Warm White Profile LEDs",
    ],
  },
  {
    id: "proj-8",
    title: "Commercial Facade & ACP Canopy",
    category: "Glass Facades & Partitions",
    location: "Madhapur, Hyderabad",
    scope: "Semi-Unitized Curtain Wall Glazing & 4mm PVDF ACP Cladding",
    timeline: "45 Days Handover",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    clientType: "Retail High-Rise Showroom",
    features: [
      "Reflective Solar Heat Control Glass",
      "Wind Pressure Structural Calculation",
      "Seismic Proof EPDM Gaskets",
    ],
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All Projects") return COMPLETED_PROJECTS;
    return COMPLETED_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full bg-white min-h-screen text-[#1F1F1F]">
      {/* 1. Header Section */}
      <section className="bg-[#FAFBFB] border-b border-gray-200/80 py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-2.5 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#E23744] bg-[#FFF1F2] border border-[#FFE4E6]">
            <Sparkles className="w-3.5 h-3.5 text-[#E23744]" />
            <span>VERIFIED SITE DELIVERIES IN HYDERABAD</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
            Homes By Sky Tech
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#555555] max-w-2xl mx-auto leading-relaxed">
            Explore verified architectural window installations, modular kitchens, and turnkey interior
            deliveries across Jubilee Hills, Kokapet, Gachibowli, and Hayathnagar.
          </p>
        </div>
      </section>

      {/* 2. Interactive Category Filter Bar (Touch-friendly & Horizontal Scroll on Mobile) */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="text-xs font-bold text-[#757575] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Category:
            </span>
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count =
                cat === "All Projects"
                  ? COMPLETED_PROJECTS.length
                  : COMPLETED_PROJECTS.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer flex items-center gap-1.5 ${isActive
                      ? "bg-[#111111] text-white shadow-xs"
                      : "bg-[#F3F4F6] text-[#4A4A4A] hover:bg-[#E5E7EB] hover:text-[#111111]"
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? "bg-white/20 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Projects Responsive Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Active Category Meta */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Showing <strong className="text-gray-900">{filteredProjects.length}</strong> verified projects in{" "}
            <span className="text-[#E23744] font-semibold">{selectedCategory}</span>
          </p>
        </div>

        {/* Card Grid (1 col on phone, 2 cols on tablet, 3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Container with Depth of Field & Clean Badges */}
              <div className="relative aspect-[16/11] bg-gray-100 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Location Badge (Top Left) */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow-xs">
                  <MapPin className="w-3 h-3 text-[#E23744]" />
                  <span>{proj.location}</span>
                </div>

                {/* Timeline (Bottom Right) */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-[#111111] text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#E23744]" />
                  <span>{proj.timeline}</span>
                </div>
              </div>

              {/* Card Information Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E23744] truncate">
                      {proj.clientType}
                    </span>
                    <span className="text-[10px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full shrink-0">
                      {proj.category}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#E23744] transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                    <strong className="text-gray-800">Scope: </strong>
                    {proj.scope}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-3.5 space-y-1.5 pt-3 border-t border-gray-100">
                    {proj.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-[#444444]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E23744] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons (Touch-friendly on mobile) */}
                <div className="grid grid-cols-2 gap-2 pt-4 mt-4 border-t border-gray-100">
                  <a
                    href={`https://wa.me/91${BUSINESS_INFO.mobile}?text=Hi%20SkyTech,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(proj.title)}%20in%20${encodeURIComponent(proj.location)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-50 hover:bg-[#E8F8EE] text-[#128C7E] font-bold text-xs transition-colors border border-gray-200 text-center"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <Link
                    href="/contact-us"
                    className="flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#111111] hover:bg-[#E23744] text-white font-bold text-xs transition-colors text-center shadow-2xs"
                  >
                    <span>Get Quote</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Bottom Consultation Strip */}
      <section className="bg-[#111111] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E23744] block">
            HAYATHNAGAR FABRICATION FACILITY • DIRECT HYDERABAD EXECUTION
          </span>
          <h2 className="text-xl sm:text-3xl font-display font-extrabold tracking-tight">
            Want to see your home built with zero-compromise precision?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Book a complimentary laser site survey across Hyderabad. We inspect openings, provide acoustic recommendations, and generate a 3D BOM estimate.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#E23744] hover:bg-[#C92531] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              Book Free Site Survey
            </Link>
            <a
              href={CONTACT_LINKS.phoneBusiness}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider transition-colors border border-white/20"
            >
              Call: {BUSINESS_INFO.businessPhone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
