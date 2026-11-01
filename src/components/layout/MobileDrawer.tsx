"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DESIGN_IDEAS_COL1,
  DESIGN_IDEAS_COL2,
  SERVICES_COL1,
  SERVICES_COL2,
  MORE_DROPDOWN_LINKS,
  PRICE_CALCULATOR_LINKS,
} from "@/content/navigation";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";
import {
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  MessageSquare,
  MapPin,
  Sparkles,
  Layers,
  Calculator,
  Building2,
  Eye,
  Info,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { BrandBadge } from "@/components/ui/BrandLogo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [openSection, setOpenSection] = useState<
    "design" | "windows" | "calculators" | "more" | null
  >(null);

  if (!isOpen) return null;

  const toggleSection = (section: "design" | "windows" | "calculators" | "more") => {
    setOpenSection(openSection === section ? null : section);
  };

  const allDesignIdeas = [...DESIGN_IDEAS_COL1, ...DESIGN_IDEAS_COL2];
  const allServices = [...SERVICES_COL1, ...SERVICES_COL2];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="relative ml-auto w-full max-w-sm sm:max-w-md bg-white h-full flex flex-col shadow-2xl z-50 text-[#1F1F1F]">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
          <Link href="/" onClick={onClose} className="select-none flex items-center gap-2.5 group">
            <BrandBadge size="sm" />
            <div>
              <span className="font-display font-extrabold text-lg tracking-tight text-[#1F1F1F] block leading-tight">
                SkyTech <span className="text-[#E23744]">Aluminium</span>
              </span>
              <span className="block text-[10px] text-gray-500 font-medium">
                Hayathnagar, Hyderabad
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 divide-y divide-gray-100">
          
          {/* Main Navigation Rows */}
          <div className="py-2 space-y-1">
            {/* 1. Design Ideas Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection("design")}
                className="w-full flex items-center justify-between py-3 text-left font-semibold text-[15px] text-[#1F1F1F] hover:text-[#E23744] transition-colors cursor-pointer"
                aria-expanded={openSection === "design"}
              >
                <div className="flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#E23744]" />
                  <span>Design Ideas</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FDF2F3] text-[#E23744]">
                    25+ Rooms
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "design" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "design" && (
                <div className="pl-6 pb-3 pt-1 space-y-1.5 border-l-2 border-[#E23744]/20 ml-2 max-h-72 overflow-y-auto">
                  {allDesignIdeas.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-xs font-medium text-gray-700 hover:text-[#E23744] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Windows, Doors & Glass Systems Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection("windows")}
                className="w-full flex items-center justify-between py-3 text-left font-semibold text-[15px] text-[#1F1F1F] hover:text-[#E23744] transition-colors cursor-pointer"
                aria-expanded={openSection === "windows"}
              >
                <div className="flex items-center gap-2.5">
                  <Layers className="w-4 h-4 text-[#E23744]" />
                  <span>Windows &amp; Systems</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "windows" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "windows" && (
                <div className="pl-6 pb-3 pt-1 space-y-1.5 border-l-2 border-[#E23744]/20 ml-2 max-h-72 overflow-y-auto">
                  {allServices.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-1.5 text-xs font-medium text-gray-700 hover:text-[#E23744] transition-colors pr-2"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 bg-[#FDF2F3] text-[#E23744] rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Cost Estimators & Pricing Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection("calculators")}
                className="w-full flex items-center justify-between py-3 text-left font-semibold text-[15px] text-[#1F1F1F] hover:text-[#E23744] transition-colors cursor-pointer"
                aria-expanded={openSection === "calculators"}
              >
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-4 h-4 text-[#E23744]" />
                  <span>Price Calculators &amp; BOM</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "calculators" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "calculators" && (
                <div className="pl-6 pb-3 pt-1 space-y-1.5 border-l-2 border-[#E23744]/20 ml-2">
                  {PRICE_CALCULATOR_LINKS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-xs font-medium text-gray-700 hover:text-[#E23744] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/#how-it-works"
                    onClick={onClose}
                    className="block py-1.5 text-xs font-medium text-gray-700 hover:text-[#E23744] transition-colors"
                  >
                    The Modular Journey &amp; Process
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Projects (Direct Link) */}
            <Link
              href="/projects"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-[15px] font-semibold text-[#1F1F1F] hover:text-[#E23744] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Building2 className="w-4 h-4 text-[#E23744]" />
                <span>Homes By Sky Tech (Projects)</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>

            {/* 5. 3D Visualization & Gallery (Direct Link) */}
            <Link
              href="/3d-visualization"
              onClick={onClose}
              className="flex items-center justify-between py-3 text-[15px] font-semibold text-[#1F1F1F] hover:text-[#E23744] transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Eye className="w-4 h-4 text-[#E23744]" />
                <span>3D Visualization &amp; Gallery</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </Link>

            {/* 6. Company & Workshop Dropdown */}
            <div>
              <button
                type="button"
                onClick={() => toggleSection("more")}
                className="w-full flex items-center justify-between py-3 text-left font-semibold text-[15px] text-[#1F1F1F] hover:text-[#E23744] transition-colors cursor-pointer"
                aria-expanded={openSection === "more"}
              >
                <div className="flex items-center gap-2.5">
                  <Info className="w-4 h-4 text-[#E23744]" />
                  <span>Company &amp; Workshop</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "more" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "more" && (
                <div className="pl-6 pb-3 pt-1 space-y-1.5 border-l-2 border-[#E23744]/20 ml-2">
                  {MORE_DROPDOWN_LINKS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block py-1.5 text-xs font-medium text-gray-700 hover:text-[#E23744] transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick NAP Details */}
          <div className="pt-4 pb-2">
            <div className="flex items-start gap-2 text-xs text-gray-600">
              <MapPin className="w-3.5 h-3.5 text-[#E23744] shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] leading-relaxed">
                  {BUSINESS_INFO.address.full}
                </p>
                <p className="text-[11px] font-semibold text-[#1F1F1F] mt-1">
                  Proprietor: {BUSINESS_INFO.owner}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-gray-100 bg-white space-y-2">
          <Button
            variant="primary"
            size="md"
            href="/contact-us"
            onClick={onClose}
            className="w-full py-3"
          >
            Consult Online Now
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={CONTACT_LINKS.phoneBusiness}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E23744]" />
              <span>Call Us</span>
            </a>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E8F8EE] hover:bg-[#D4F3E0] text-xs font-semibold text-[#128C7E] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
