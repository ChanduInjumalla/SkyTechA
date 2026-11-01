import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, ChevronRight, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Homes By Sky Tech | Recent Completed Projects in Hyderabad",
  description:
    "View our recent architectural window installations, modular kitchens, and turnkey interior projects delivered across Jubilee Hills, Kokapet, Gachibowli, and Hayathnagar.",
};

const COMPLETED_PROJECTS = [
  {
    id: "proj-1",
    title: "The Glass Pavilion Villa",
    location: "Jubilee Hills, Hyderabad",
    scope: "Domal 27mm Sliding Windows & 15mm Frameless Glass Balustrades",
    timeline: "25 Days Handover",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    clientType: "Luxury Duplex Residence",
  },
  {
    id: "proj-2",
    title: "High-Rise Sky Penthouse",
    location: "Kokapet Golden Mile, Hyderabad",
    scope: "Acoustic DGU Glass & Slim Profile Walk-In Wardrobes",
    timeline: "30 Days Handover",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    clientType: "4 BHK Luxury Apartment",
  },
  {
    id: "proj-3",
    title: "Modern Minimalist Turnkey Home",
    location: "Financial District, Gachibowli",
    scope: "710 BWP Modular Kitchen, TV Louvers & False Ceilings",
    timeline: "40 Days Handover",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
    clientType: "3 BHK Premium Residence",
  },
  {
    id: "proj-4",
    title: "Acoustic Studio & Corporate Suites",
    location: "Hitec City, Hyderabad",
    scope: "12mm Toughened Glass Office Partitions with Floor Springs",
    timeline: "14 Days Handover",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    clientType: "Commercial Office Floor",
  },
  {
    id: "proj-5",
    title: "Hayathnagar Khalsa Independent Villa",
    location: "Hayathnagar, Hyderabad",
    scope: "Custom Aluminium Casement Windows with Mosquito Mesh & Main Doors",
    timeline: "18 Days Handover",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80",
    clientType: "Independent 3-Story Residence",
  },
  {
    id: "proj-6",
    title: "Lakeside Luxury Duplex",
    location: "Banjara Hills, Hyderabad",
    scope: "Telescopic 45mm Sliding Partitions & Master Dressing Suite",
    timeline: "35 Days Handover",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    clientType: "Bespoke Villa Interiors",
  },
];

export default function ProjectsPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#1F1F1F]">
      {/* Header */}
      <section className="bg-[#FAFAFA] border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E23744]">
            VERIFIED SITE DELIVERIES ACROSS TELANGANA
          </span>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#1F1F1F] tracking-tight">
            Homes By Sky Tech
          </h1>
          <p className="text-sm text-[#555555] max-w-2xl mx-auto">
            Browse our portfolio of completed architectural windows, glass facades, and turnkey
            modular interior residences across Hyderabad.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {COMPLETED_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/11] bg-gray-100 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#E23744]" />
                  <span>{proj.location}</span>
                </div>
                <div className="absolute bottom-3 right-3 bg-white/90 text-[#1F1F1F] text-[11px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                  {proj.timeline}
                </div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-[#E23744] block mb-1">
                    {proj.clientType}
                  </span>
                  <h3 className="text-lg font-bold text-[#1F1F1F] group-hover:text-[#E23744] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#666666] mt-2 leading-relaxed">
                    {proj.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> 100% Verified Site
                  </span>
                  <Link
                    href="/contact-us"
                    className="text-xs font-bold text-[#1F1F1F] hover:text-[#E23744] flex items-center gap-1"
                  >
                    Request Similar <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
