"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  DESIGN_IDEAS_COL1,
  DESIGN_IDEAS_COL2,
  SERVICES_COL1,
  SERVICES_COL2,
  MORE_DROPDOWN_LINKS,
} from "@/content/navigation";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";
import { X, ChevronDown, Phone, MessageSquare, MapPin, Sparkles, Wrench, MoreHorizontal } from "lucide-react";
import Button from "@/components/ui/Button";
import { BrandBadge } from "@/components/ui/BrandLogo";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const [openSection, setOpenSection] = useState<"design" | "services" | "more" | null>("design");

  if (!isOpen) return null;

  const toggleSection = (section: "design" | "services" | "more") => {
    setOpenSection(openSection === section ? null : section);
  };

  const allDesignIdeas = [...DESIGN_IDEAS_COL1, ...DESIGN_IDEAS_COL2];
  const allServices = [...SERVICES_COL1, ...SERVICES_COL2];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
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
              <span className="font-display font-bold text-lg tracking-tight text-[#1F1F1F] block leading-tight">
                SkyTech <span className="text-[#E23744]">Aluminium</span>
              </span>
              <span className="block text-[10px] text-gray-500 font-medium">
                Hayathnagar, Hyderabad
              </span>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-900 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {/* Quick Direct Links */}
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/projects"
              onClick={onClose}
              className="flex items-center justify-center px-2 py-2.5 bg-gray-50 hover:bg-[#FDF2F3] rounded-lg text-xs font-bold text-gray-800 hover:text-[#E23744] border border-gray-100"
            >
              Projects
            </Link>
            <Link
              href="/3d-visualization"
              onClick={onClose}
              className="flex items-center justify-center px-2 py-2.5 bg-gray-50 hover:bg-[#FDF2F3] rounded-lg text-xs font-bold text-gray-800 hover:text-[#E23744] border border-gray-100"
            >
              Gallery
            </Link>
          </div>

          {/* Accordion Categories */}
          <div className="space-y-2 border-t border-gray-100 pt-3">
            {/* 1. Design Ideas (20+ Items) */}
            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => toggleSection("design")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50"
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
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB] max-h-60 overflow-y-auto">
                  {allDesignIdeas.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="block px-2.5 py-1.5 rounded-md text-xs text-gray-700 hover:text-[#E23744] hover:bg-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 2. Services */}
            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => toggleSection("services")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-[#E23744]" />
                  <span>Services ({allServices.length})</span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    openSection === "services" ? "rotate-180 text-[#E23744]" : ""
                  }`}
                />
              </button>

              {openSection === "services" && (
                <div className="px-3 pb-3 pt-1 border-t border-gray-50 space-y-1 bg-[#FAFBFB] max-h-60 overflow-y-auto">
                  {allServices.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs text-gray-700 hover:text-[#E23744] hover:bg-white"
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

            {/* 3. More */}
            <div className="border border-gray-100 rounded-lg overflow-hidden bg-white">
              <button
                onClick={() => toggleSection("more")}
                className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-sm text-[#1F1F1F] hover:bg-gray-50"
              >
                <div className="flex items-center gap-2">
                  <MoreHorizontal className="w-4 h-4 text-[#E23744]" />
                  <span>More Company Links</span>
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
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs text-gray-700 hover:text-[#E23744] hover:bg-white"
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
          <div className="p-3.5 bg-gray-50 border border-gray-100 rounded-lg text-xs space-y-1.5 text-gray-600">
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
            className="w-full"
          >
            Consult Online Now
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={CONTACT_LINKS.phoneBusiness}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#E23744]" />
              <span>Call Us</span>
            </a>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-full bg-[#E8F8EE] hover:bg-[#D4F3E0] text-xs font-semibold text-[#128C7E] transition-colors"
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
