import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Wrench,
  Truck,
  CheckCircle,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";

export const metadata: Metadata = {
  title: "Hayathnagar Fabrication Facility & Hyderabad Local Hub | SkyTech Aluminium",
  description:
    "Visit our state-of-the-art aluminium and uPVC fabrication plant in Hayathnagar Khalsa, Hyderabad. Laser-calibrated cutting, automated corner crimping, and citywide installation.",
};

const SERVICE_AREAS = [
  "Jubilee Hills & Banjara Hills",
  "Gachibowli & Financial District",
  "Kokapet Golden Mile",
  "Hitec City & Madhapur",
  "Kondapur & Kukatpally",
  "Manikonda & Puppalaguda",
  "Tellapur & Nallagandla",
  "Hayathnagar & LB Nagar",
  "Kompally & Medchal Corridor",
  "Miyapur & Chandanagar",
];

const MACHINERY_CAPABILITIES = [
  {
    title: "Double-Head CNC Aluminium Profile Saws",
    desc: "Precision 45° and 90° angle mitre cutting with 0.1mm repeatability for acoustic window frames.",
  },
  {
    title: "Heavy-Duty Hydraulic Corner Crimping Press",
    desc: "Seamless corner fusion providing maximum torsional stiffness and watertight seals against monsoons.",
  },
  {
    title: "Laser Site Measurement & Digital Templating",
    desc: "Zero-error Leica laser distance scanners utilized across every home and villa site in Hyderabad.",
  },
  {
    title: "Specialized Dust-Free Joinery Assembly Benches",
    desc: "Controlled environment for 710 BWP marine plywood modular kitchen and acrylic shutter assembly.",
  },
];

export default function HayathnagarHubPage() {
  return (
    <div className="w-full bg-white text-[#1F1F1F]">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-14 sm:py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#E23744] text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyderabad Manufacturing Unit</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111827] tracking-tight max-w-4xl mx-auto leading-tight">
            Hayathnagar <span className="text-[#E23744]">Fabrication Plant</span> &amp; Regional Operations
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to the beating heart of SkyTech Aluminium. Our Hayathnagar Khalsa engineering facility houses high-precision European CNC profile machinery, glass handling gantries, and turnkey interior assembly lines.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://maps.google.com/?q=Hayathnagar+Khalsa+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#E23744] hover:bg-[#C92531] text-white text-sm font-semibold rounded-full shadow-lg transition-all flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
            <a
              href="tel:9494600741"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded-full transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Facility: 9494600741</span>
            </a>
          </div>
        </div>
      </section>

      {/* Verified Business NAP & Timings */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E23744] flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900">Physical Address</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
              <span className="inline-block text-[11px] font-semibold text-[#E23744]">
                Landmark: Near Outer Ring Road (ORR) Exit
              </span>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E23744] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900">Working Hours</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li><strong>Monday – Saturday:</strong> 9:00 AM – 8:00 PM</li>
                <li><strong>Sunday:</strong> 10:00 AM – 4:00 PM (Site Surveys)</li>
                <li><strong>Dispatch Hours:</strong> 10:00 AM – 6:00 PM</li>
              </ul>
              <span className="inline-block text-[11px] font-semibold text-emerald-600">
                ● Active Workshop Operations
              </span>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-[#E23744] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-gray-900">Leadership &amp; Contact</h3>
              <div className="text-xs text-gray-600 space-y-1">
                <p><strong>Proprietor:</strong> {BUSINESS_INFO.owner}</p>
                <p><strong>Direct Mobile:</strong> {BUSINESS_INFO.mobile}</p>
                <p><strong>Office Phone:</strong> {BUSINESS_INFO.businessPhone}</p>
                <p><strong>Email:</strong> {BUSINESS_INFO.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Capabilities */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Advanced Fabrication Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Why our windows, sliding systems, and modular units fit with sub-millimeter precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MACHINERY_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-[#E23744] transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  <h3 className="font-bold text-base text-gray-900">{cap.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 pl-7 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyderabad Service Localities Grid */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h3 className="text-xl font-bold text-gray-900">
              Complimentary Laser Surveys Across Hyderabad
            </h3>
            <p className="text-xs text-gray-500">
              Our mobile site engineering teams visit your property across all major residential zones:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-center">
            {SERVICE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-3 bg-white border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 shadow-2xs hover:border-[#E23744] hover:text-[#E23744] transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
