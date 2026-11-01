import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Truck,
  ShieldCheck,
  CheckCircle,
  Phone,
  MessageSquare,
  FileText,
  BadgePercent,
  Warehouse,
} from "lucide-react";
import { CONTACT_LINKS, BUSINESS_INFO } from "@/content/business";

export const metadata: Metadata = {
  title: "Wholesale Aluminium & Iron Fabrication Products Hyderabad | SkyTech Aluminium",
  description:
    "Direct wholesale supply of 6063-T6 architectural aluminium extrusions, MS structural steel, Domal window hardware, and bulk glass for contractors and fabricators in Hyderabad.",
};

const WHOLESALE_CATEGORIES = [
  {
    title: "Architectural Aluminium Extrusions",
    spec: "Alloy 6063-T6 virgin ingots • Anodized 15-25 microns • Powder coated AkzoNobel/Jotun",
    moq: "Min. Order: 250 kg",
    applications: "Domal 27mm & 45mm, Slim sliding, 16x45 telescopic profiles, Curtain wall sections",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Structural Mild Steel (MS) & Iron Works",
    spec: "IS 2062 Grade E250 structural steel • Anti-rust epoxy primer • Laser cut brackets",
    moq: "Min. Order: 500 kg",
    applications: "Staircase stringers, Balcony structural sub-frames, Facade outriggers, Heavy trusses",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Certified Toughened & Laminated Safety Glass",
    spec: "Saint-Gobain & AIS certified • 10mm, 12mm, 15mm Toughened • 11.52mm & 13.52mm DGU",
    moq: "Min. Order: 100 sq.ft",
    applications: "Frameless office partitions, Balcony balustrades, Structural facade spider glazing",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Heavy-Duty Sliding & Casement Hardware",
    spec: "Stainless steel SS 304 bearings • Multi-point flush locks • EPDM co-extruded gaskets",
    moq: "Min. Order: Bulk cartons",
    applications: "Smooth acoustic sliding window rollers, Hydraulic floor springs, Concealed hinges",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
];

export default function WholesaleProductsPage() {
  return (
    <div className="w-full bg-white text-[#1F1F1F]">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>B2B &amp; Fabricator Wholesale Division</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Direct Mill &amp; Factory Wholesale Supply for <span className="text-[#E23744]">Contractors &amp; Builders</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Source prime-grade aluminium extrusions, structural iron, safety glass, and European hardware directly from our Hayathnagar distribution facility at wholesale bulk pricing.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#E23744] hover:bg-[#C92531] text-white text-sm font-semibold rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Wholesale Price List (PDF)</span>
            </a>
            <a
              href={CONTACT_LINKS.phoneBusiness}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-full transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Direct B2B Desk: 9494600741</span>
            </a>
          </div>
        </div>
      </section>

      {/* Advantage Metrics */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-2xl font-black text-[#E23744]">15%–25%</span>
              <p className="text-xs text-gray-600">Lower than distributor retail margins</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-black text-[#111827]">24-Hour</span>
              <p className="text-xs text-gray-600">Dispatch across Hyderabad &amp; Telangana</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-black text-[#111827]">6063-T6</span>
              <p className="text-xs text-gray-600">100% Virgin Alloy with Mill Test Certificates</p>
            </div>
            <div className="space-y-1">
              <span className="text-2xl font-black text-[#E23744]">Ready Stock</span>
              <p className="text-xs text-gray-600">Over 50+ metric tons in Hayathnagar warehouse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Core Wholesale Supply Lines
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Manufactured and distributed according to strict Bureau of Indian Standards (BIS) specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHOLESALE_CATEGORIES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs flex flex-col sm:flex-row hover:shadow-lg transition-all"
              >
                <div className="sm:w-1/2 h-52 sm:h-auto bg-gray-100 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/80 text-white text-[10px] font-bold rounded">
                    {item.moq}
                  </span>
                </div>

                <div className="sm:w-1/2 p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-[#111827]">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-mono">
                      {item.spec}
                    </p>
                    <p className="text-xs text-gray-500">
                      <strong>Uses:</strong> {item.applications}
                    </p>
                  </div>

                  <a
                    href={CONTACT_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E23744] hover:underline"
                  >
                    <span>Request Bulk Quote &amp; Delivery Timeline</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Location & Dispatch Details */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <Warehouse className="w-10 h-10 text-[#E23744] mx-auto" />
          <h3 className="text-xl font-bold text-gray-900">
            Visit Our Hayathnagar Warehouse &amp; Fabrication Depot
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            {BUSINESS_INFO.address.full}. Direct contractor vehicle pickups, weighing bridges, and sample inspections available Monday through Saturday.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/contact-us"
              className="px-5 py-2.5 bg-[#111827] text-white text-xs font-semibold rounded-full hover:bg-black transition-colors"
            >
              Get Workshop Directions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
