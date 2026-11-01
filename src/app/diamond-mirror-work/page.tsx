import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { CONTACT_LINKS } from "@/content/business";

export const metadata: Metadata = {
  title: "Diamond Beveled & Decorative Mirrors Hyderabad | SkyTech Aluminium",
  description:
    "Bespoke diamond cut beveled mirrors, fluted wall mirror panels, and intelligent touch-sensor LED backlit mirrors for luxury Hyderabad homes.",
};

const MIRROR_COLLECTION = [
  {
    title: "Diamond Grid Beveled Wall Mirror Panelling",
    desc: "Precision CNC V-groove and edge beveled mirror panels bonded with non-acidic neutral cure silicone.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    price: "₹450 – ₹750 / sq.ft",
    specs: "5mm Saint-Gobain Distortion-Free Silver Mirror with 25mm Diamond Bevel Edge",
  },
  {
    title: "Intelligent Touch-Sensor LED Vanity Mirror",
    desc: "CCT adjustable warm-to-cool LED temperature control with anti-fog defogger heating film.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
    price: "From ₹8,500 / piece",
    specs: "IP44 Waterproof Driver • Frosted Edge Illumination • 50,000 Hours Lifespan",
  },
  {
    title: "Fluted & Tinted Bronze Architectural Mirrors",
    desc: "High-end dining room, foyer and living room feature mirrors in rose gold, grey, and bronze tones.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    price: "₹620 – ₹980 / sq.ft",
    specs: "European Tinted Float Substrate • Anodized Slim Profile Border",
  },
];

export default function DiamondMirrorWorkPage() {
  return (
    <div className="w-full bg-white text-[#1F1F1F]">
      <section className="bg-gradient-to-b from-[#FAFBFB] to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E23744] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Luxury Glass &amp; Mirror Craftsmanship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Diamond Beveled &amp; <span className="text-[#E23744]">Decorative Wall Mirrors</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Elevate your foyer, living room, and vanity rooms with custom diamond-cut beveled wall mirrors, acoustic fluted panels, and intelligent touch-sensor illumination.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#E23744] hover:bg-[#C92531] text-white text-sm font-semibold rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Instant Mirror Quote</span>
            </a>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-full transition-colors"
            >
              Schedule Measurement Survey
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MIRROR_COLLECTION.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col"
              >
                <div className="h-60 w-full bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-bold text-base text-[#111827]">{item.title}</h3>
                    <p className="text-sm font-extrabold text-[#E23744] mt-1">{item.price}</p>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">{item.desc}</p>
                    <p className="text-[11px] text-gray-500 font-mono mt-2 bg-gray-50 p-2 rounded border border-gray-100">
                      {item.specs}
                    </p>
                  </div>
                  <a
                    href={CONTACT_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pt-2 text-xs font-bold text-[#E23744] flex items-center gap-1 hover:underline"
                  >
                    <span>Request Custom Dimensions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
