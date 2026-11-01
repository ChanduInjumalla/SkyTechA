import React from "react";
import Link from "next/link";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 text-[#4A4A4A] mt-auto">

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Exact NAP Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#1F1F1F] block">
                SkyTech <span className="text-[#E23744]">Aluminium</span>
              </span>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                Aluminium • uPVC • Glass • Cladding • Interior Execution
              </p>
            </div>

            <p className="text-xs text-[#666666] leading-relaxed max-w-sm">
              Custom fabrication and engineering systems for luxury residences, commercial high-rises, retail spaces, and institutional facilities across Hyderabad.
            </p>

            {/* Strict NAP Verification */}
            <div className="pt-2 space-y-2.5 text-xs text-[#333333]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E23744] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed text-[#4A4A4A]">
                  {BUSINESS_INFO.address.full}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E23744] shrink-0" />
                <div className="flex flex-wrap gap-x-3 font-medium">
                  <a
                    href={CONTACT_LINKS.phoneBusiness}
                    className="hover:text-[#E23744] transition-colors"
                  >
                    Office: {BUSINESS_INFO.businessPhone}
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href={CONTACT_LINKS.phoneOwner}
                    className="hover:text-[#E23744] transition-colors"
                  >
                    Direct: {BUSINESS_INFO.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E23744] shrink-0" />
                <a
                  href={CONTACT_LINKS.email}
                  className="hover:text-[#E23744] transition-colors"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <svg
                  className="w-4 h-4 text-[#E23744] shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <a
                  href={CONTACT_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E23744] transition-colors font-medium"
                >
                  {BUSINESS_INFO.instagramHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Aluminium & uPVC Columns */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] block">
              Aluminium & uPVC
            </span>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li>
                <Link href="/aluminium-windows" className="hover:text-[#E23744] transition-colors">
                  Aluminium Windows
                </Link>
              </li>
              <li>
                <Link href="/aluminium-domal-windows" className="hover:text-[#E23744] transition-colors">
                  Domal Windows Series
                </Link>
              </li>
              <li>
                <Link href="/aluminium-sliding-windows" className="hover:text-[#E23744] transition-colors">
                  Sliding Windows
                </Link>
              </li>
              <li>
                <Link href="/profile-doors-45mm" className="hover:text-[#E23744] transition-colors">
                  45mm Profile Doors
                </Link>
              </li>
              <li>
                <Link href="/telescopic-partitions-16x45" className="hover:text-[#E23744] transition-colors">
                  Telescopic Partition 16x45
                </Link>
              </li>
              <li>
                <Link href="/upvc-windows" className="hover:text-[#E23744] transition-colors">
                  uPVC Windows & Doors
                </Link>
              </li>
              <li>
                <Link href="/aluminium-mosquito-sliding-doors" className="hover:text-[#E23744] transition-colors">
                  Mosquito Sliding Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Glass & Facade Columns */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] block">
              Glass & Facade
            </span>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li>
                <Link href="/12mm-glass-partitions" className="hover:text-[#E23744] transition-colors">
                  12mm Toughened Glass
                </Link>
              </li>
              <li>
                <Link href="/glass-doors-office" className="hover:text-[#E23744] transition-colors">
                  Office Frameless Glass Doors
                </Link>
              </li>
              <li>
                <Link href="/structural-glazing" className="hover:text-[#E23744] transition-colors">
                  Structural Glazing
                </Link>
              </li>
              <li>
                <Link href="/glass-railings" className="hover:text-[#E23744] transition-colors">
                  Frameless Glass Railings
                </Link>
              </li>
              <li>
                <Link href="/acp-cladding" className="hover:text-[#E23744] transition-colors">
                  ACP Composite Cladding
                </Link>
              </li>
              <li>
                <Link href="/hpl-panelling" className="hover:text-[#E23744] transition-colors">
                  HPL Exterior Panelling
                </Link>
              </li>
              <li>
                <Link href="/diamond-mirror-work" className="hover:text-[#E23744] transition-colors">
                  Diamond Beveled Mirrors
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services & Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F1F1F] block">
              Design & Company
            </span>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li>
                <Link href="/interior-designing" className="hover:text-[#E23744] transition-colors">
                  Interior Designing
                </Link>
              </li>
              <li>
                <Link href="/architectural-designing" className="hover:text-[#E23744] transition-colors">
                  Architectural Designing
                </Link>
              </li>
              <li>
                <Link href="/3d-visualization" className="hover:text-[#E23744] transition-colors">
                  3D Visualization
                </Link>
              </li>
              <li>
                <Link href="/execution-works" className="hover:text-[#E23744] transition-colors">
                  Turnkey Execution
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#E23744] transition-colors">
                  Portfolio / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/wholesale-aluminium-iron-products" className="hover:text-[#E23744] transition-colors font-semibold text-[#E23744] flex items-center gap-1">
                  <span>Wholesale Enquiries</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link href="/hayathnagar-hyderabad" className="hover:text-[#E23744] transition-colors font-semibold text-[#1F1F1F]">
                  Hayathnagar Location Hub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Local Authority Row */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-[#757575] gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© {currentYear} SKY TECH WINDOWS. All rights reserved.</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span>Registration & Fabrication Facility: Hayathnagar Khalsa, Hyderabad</span>
            <span className="hidden md:inline text-gray-300">•</span>
            <span>Proprietor: Yousuf Shaik</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/contact-us" className="hover:text-[#E23744] transition-colors">
              Contact & Map
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/hayathnagar-hyderabad" className="hover:text-[#E23744] transition-colors">
              Local Authority Hub
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
