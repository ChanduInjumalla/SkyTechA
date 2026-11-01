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
  Phone,
  MessageSquare,
  MapPin,
  Sparkles,
  Wrench,
  Calculator,
  FolderKanban,
  MoreHorizontal,
  Home,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { BrandBadge } from "@/components/ui/BrandLogo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [openSection, setOpenSection] = useState<
    "design" | "services" | "calculators" | "more" | null
  >("design");

  if (!isOpen) return null;

  const toggleSection = (section: "design" | "services" | "calculators" | "more") => {
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
        <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-gray-100 bg-white">
          <Link href="/" onClick={onClose} className="select-none flex items-center gap-2.5 group">
            <BrandBadge size="sm" />
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#1F1F1F] block leading-tight">
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
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-4">
          {/* Quick Category Action Cards (LivSpace Mobile Grid) */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/design-ideas"
              onClick={onClose}
              className="flex flex-col p-3 bg-[#FAFBFB] hover:bg-[#FDF2F3] rounded-xl border border-gray-100 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Sparkles className="w-4 h-4 text-[#E23744]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Explore</span>
              </div>
              <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#E23744] transition-colors leading-tight">
                Design Ideas
              </span>
              <span className="text-[10px] text-gray-500 mt-0.5">25+ Room Layouts</span>
            </Link>

            <Link
              href="/price-calculators"
              onClick={onClose}
              className="flex flex-col p-3 bg-[#FAFBFB] hover:bg-[#FDF2F3] rounded-xl border border-gray-100 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Calculator className="w-4 h-4 text-[#E23744]" />
                <span className="text-[10px] font-bold text-[#0D7A68] bg-[#E6F4F1] px-1.5 py-0.2 rounded">Instant</span>
              </div>
              <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#E23744] transition-colors leading-tight">
                Cost Estimator
              </span>
              <span className="text-[10px] text-gray-500 mt-0.5">3D BOM Pricing</span>
            </Link>

            <Link
              href="/projects"
              onClick={onClose}
              className="flex flex-col p-3 bg-[#FAFBFB] hover:bg-[#FDF2F3] rounded-xl border border-gray-100 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <FolderKanban className="w-4 h-4 text-[#E23744]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">Verified</span>
              </div>
              <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#E23744] transition-colors leading-tight">
                Real Projects
              </span>
              <span className="text-[10px] text-gray-500 mt-0.5">Hyderabad Sites</span>
            </Link>

            <Link
              href="/3d-visualization"
              onClick={onClose}
              className="flex flex-col p-3 bg-[#FAFBFB] hover:bg-[#FDF2F3] rounded-xl border border-gray-100 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Home className="w-4 h-4 text-[#E23744]" />
                <span className="text-[10px] font-bold text-gray-400 uppercase">3D</span>
              </div>
              <span className="text-xs font-bold text-[#1F1F1F] group-hover:text-[#E23744] transition-colors leading-tight">
                Walkthroughs
              </span>
              <span className="text-[10px] text-gray-500 mt-0.5">Render Gallery</span>
            </Link>
          </div>

          {/* Accordion Categories */}
          <div className="space-y-2 border-t border-gray-100 pt-3">
            {/* 1. Design Ideas Accordion */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSection("design")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50 transition-colors cursor-pointer"
                aria-expanded={openSection === "design"}
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#E23744]" />
                  <span>Design Ideas ({allDesignIdeas.length})</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "design" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "design" && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB] max-h-64 overflow-y-auto">
                  {allDesignIdeas.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-[#E23744] hover:bg-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Services & Products Accordion */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSection("services")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50 transition-colors cursor-pointer"
                aria-expanded={openSection === "services"}
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#E23744]" />
                  <span>Windows &amp; Systems ({allServices.length})</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "services" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "services" && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB] max-h-64 overflow-y-auto">
                  {allServices.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-[#E23744] hover:bg-white transition-colors"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#FDF2F3] text-[#E23744] rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Cost Estimators & Pricing Accordion */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSection("calculators")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50 transition-colors cursor-pointer"
                aria-expanded={openSection === "calculators"}
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#E23744]" />
                  <span>Price Calculators &amp; Offerings</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "calculators" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "calculators" && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB]">
                  {PRICE_CALCULATOR_LINKS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-[#E23744] hover:bg-white transition-colors"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <Link
                    href="/#how-it-works"
                    onClick={onClose}
                    className="block px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-[#E23744] hover:bg-white transition-colors"
                  >
                    The Modular Journey &amp; Process
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Company & Fabrication Hub Accordion */}
            <div className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-2xs">
              <button
                type="button"
                onClick={() => toggleSection("more")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50 transition-colors cursor-pointer"
                aria-expanded={openSection === "more"}
              >
                <div className="flex items-center gap-2">
                  <MoreHorizontal className="w-4 h-4 text-[#E23744]" />
                  <span>Company &amp; Workshop</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "more" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "more" && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB]">
                  {MORE_DROPDOWN_LINKS.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-700 hover:text-[#E23744] hover:bg-white transition-colors"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 bg-[#E23744] text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick NAP Details */}
          <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-xl text-xs space-y-1.5 text-gray-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#E23744] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                {BUSINESS_INFO.address.full}
              </p>
            </div>
            <p className="text-[11px] font-medium text-gray-700 pl-5.5">
              Proprietor: <span className="font-bold text-[#1F1F1F]">{BUSINESS_INFO.owner}</span>
            </p>
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
