"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  DESIGN_IDEAS_COL1,
  DESIGN_IDEAS_COL2,
  SERVICES_COL1,
  SERVICES_COL2,
  MORE_DROPDOWN_LINKS,
  EXPLORE_OFFERINGS,
  KITCHEN_OFFERINGS,
  WARDROBE_OFFERINGS,
  PRICE_CALCULATOR_LINKS,
} from "@/content/navigation";
import MobileDrawer from "@/components/layout/MobileDrawer";
import Button from "@/components/ui/Button";
import { BrandBadge } from "@/components/ui/BrandLogo";
import {
  Menu,
  Phone,
  ChevronDown,
  MapPin,
} from "lucide-react";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<"design-ideas" | "services" | "more" | null>(null);
  const [activeTier2Dropdown, setActiveTier2Dropdown] = useState<"offerings" | "calculators" | null>(null);
  const [kitchenComponentsOpen, setKitchenComponentsOpen] = useState(false);
  const [wardrobeComponentsOpen, setWardrobeComponentsOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const tier2TimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (dropdown: "design-ideas" | "services" | "more") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (tier2TimeoutRef.current) clearTimeout(tier2TimeoutRef.current);
    setActiveTier2Dropdown(null);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleTier2MouseEnter = (dropdown: "offerings" | "calculators") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (tier2TimeoutRef.current) clearTimeout(tier2TimeoutRef.current);
    setActiveDropdown(null);
    setActiveTier2Dropdown(dropdown);
  };

  const handleTier2MouseLeave = () => {
    tier2TimeoutRef.current = setTimeout(() => {
      setActiveTier2Dropdown(null);
    }, 180);
  };

  return (
    <>
      {/* Livspace Clean Header Shell */}
      <header
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
          isScrolled
            ? "shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-b border-gray-200"
            : "border-b border-gray-100"
        }`}
      >
        {/* Tier 1: Livspace Corporate White Navigation Bar with subtle elevation shadow */}
        <div className="relative z-20 bg-white shadow-[0_3px_12px_rgba(0,0,0,0.06)] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Clean Minimalist Brand Logo & Name */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 sm:gap-3 select-none shrink-0"
              aria-label="SkyTech Aluminium - Home"
            >
              <BrandBadge size="md" />
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-[#1F1F1F]">
                SkyTech <span className="text-[#E23744]">Aluminium</span>
              </span>
            </Link>

            {/* Desktop Navigation Links - Centered & Spacious */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto">
              {/* 1. Design Ideas Dropdown Anchor */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("design-ideas")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "design-ideas" ? null : "design-ideas")}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium tracking-normal transition-colors rounded-md ${
                    activeDropdown === "design-ideas"
                      ? "text-[#E23744]"
                      : "text-[#222222] hover:text-[#E23744]"
                  }`}
                  aria-expanded={activeDropdown === "design-ideas"}
                >
                  <span>Design Ideas</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "design-ideas" ? "rotate-180 text-[#E23744]" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Pure 2-Column Clean Text List (Exact Livspace Clone) */}
                {activeDropdown === "design-ideas" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[60] animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={() => handleMouseEnter("design-ideas")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Column 1 */}
                      <div className="space-y-0.5">
                        {DESIGN_IDEAS_COL1.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-md text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-0.5">
                        {DESIGN_IDEAS_COL2.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-md text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. Services Dropdown Anchor */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium tracking-normal transition-colors rounded-md ${
                    activeDropdown === "services"
                      ? "text-[#E23744]"
                      : "text-[#222222] hover:text-[#E23744]"
                  }`}
                  aria-expanded={activeDropdown === "services"}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-[#E23744]" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Pure 2-Column Clean Text List */}
                {activeDropdown === "services" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-[480px] bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-gray-100 p-5 z-[60] animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={() => handleMouseEnter("services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="grid grid-cols-2 gap-x-6">
                      {/* Column 1 */}
                      <div className="space-y-0.5">
                        {SERVICES_COL1.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-md text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>

                      {/* Column 2 */}
                      <div className="space-y-0.5">
                        {SERVICES_COL2.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="block px-2.5 py-1.5 rounded-md text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Projects (Direct Link) */}
              <Link
                href="/projects"
                className="px-3 py-2 text-sm font-medium tracking-normal text-[#222222] hover:text-[#E23744] transition-colors rounded-md"
              >
                Projects
              </Link>

              {/* 4. Gallery (Direct Link) */}
              <Link
                href="/3d-visualization"
                className="px-3 py-2 text-sm font-medium tracking-normal text-[#222222] hover:text-[#E23744] transition-colors rounded-md"
              >
                Gallery
              </Link>

              {/* 5. More Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("more")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(activeDropdown === "more" ? null : "more")}
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium tracking-normal transition-colors rounded-md ${
                    activeDropdown === "more"
                      ? "text-[#E23744]"
                      : "text-[#222222] hover:text-[#E23744]"
                  }`}
                  aria-expanded={activeDropdown === "more"}
                >
                  <span>More</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === "more" ? "rotate-180 text-[#E23744]" : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Pure Clean Text List for More */}
                {activeDropdown === "more" && (
                  <div
                    className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-gray-100 p-4 z-[60] animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={() => handleMouseEnter("more")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-0.5">
                      {MORE_DROPDOWN_LINKS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-3 py-2 rounded-lg text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Desktop Right Cluster - Hyderabad Location Badge */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-700">
                <MapPin className="w-3.5 h-3.5 text-[#E23744]" />
                <span>Hyderabad</span>
              </div>
            </div>

            {/* Mobile / Tablet Toggle & Direct Phone */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href="tel:9494600741"
                className="p-2 bg-gray-100 hover:bg-gray-200 text-[#E23744] rounded-full"
                aria-label="Call Sky Tech Windows"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileDrawerOpen(true)}
                className="p-2 text-gray-800 hover:text-[#E23744] rounded-md hover:bg-gray-100"
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

        {/* Tier 2: Secondary Sub-Bar (Sub-rail tucked underneath Tier 1) */}
        <div className="hidden lg:block bg-[#FAFAFA] text-xs py-2.5 relative z-10 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Left Rail Links */}
            <div className="flex items-center gap-7 text-[#222222] font-medium text-[13px]">
              {/* 1. How it works */}
              <Link
                href="/#how-it-works"
                className="hover:text-[#E23744] whitespace-nowrap transition-colors"
                onClick={() => {
                  setActiveDropdown(null);
                  setActiveTier2Dropdown(null);
                }}
              >
                How it works
              </Link>

              {/* 2. Offerings Dropdown (Matches Image 3) */}
              <div
                className="relative"
                onMouseEnter={() => handleTier2MouseEnter("offerings")}
                onMouseLeave={handleTier2MouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveTier2Dropdown(
                      activeTier2Dropdown === "offerings" ? null : "offerings"
                    )
                  }
                  className={`flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 ${
                    activeTier2Dropdown === "offerings"
                      ? "text-[#E23744] font-semibold"
                      : "text-[#222222] hover:text-[#E23744]"
                  }`}
                  aria-expanded={activeTier2Dropdown === "offerings"}
                >
                  <span>Offerings</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeTier2Dropdown === "offerings"
                        ? "rotate-180 text-[#E23744]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Offerings Popover Card */}
                {activeTier2Dropdown === "offerings" && (
                  <div
                    className="absolute top-full left-0 mt-2.5 w-[830px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-gray-100 p-6 z-[60] animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={() => handleTier2MouseEnter("offerings")}
                    onMouseLeave={handleTier2MouseLeave}
                  >
                    <div className="flex gap-8">
                      {/* Left: Explore Offerings */}
                      <div className="w-[330px] pr-6 border-r border-gray-100">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 h-4 flex items-center">
                          Explore Offerings
                        </div>
                        <div className="space-y-1.5">
                          {EXPLORE_OFFERINGS.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => {
                                setActiveDropdown(null);
                                setActiveTier2Dropdown(null);
                              }}
                              className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                            >
                              <div className="relative w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                  loading="lazy"
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <div className="text-[13px] font-semibold text-gray-900 group-hover:text-[#E23744] transition-colors leading-tight">
                                  {item.title}
                                </div>
                                <div className="text-[11px] text-gray-500 truncate mt-0.5">
                                  {item.subtitle}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Middle: Kitchen */}
                      <div className="w-[215px]">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 h-4 flex items-center">
                          Kitchen
                        </div>
                        <div className="space-y-3">
                          <Link
                            href="/modular-kitchens"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveTier2Dropdown(null);
                            }}
                            className="block text-[13px] font-medium text-gray-800 hover:text-[#E23744] whitespace-nowrap transition-colors"
                          >
                            Know Your Kitchen
                          </Link>

                          <Link
                            href="/#estimate-calculator"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveTier2Dropdown(null);
                            }}
                            className="block text-[13px] font-medium text-gray-800 hover:text-[#E23744] whitespace-nowrap transition-colors"
                          >
                            Kitchen Price Calculator
                          </Link>

                          <div>
                            <button
                              type="button"
                              onClick={() => setKitchenComponentsOpen(!kitchenComponentsOpen)}
                              className={`w-full flex items-center justify-between text-[13px] font-medium transition-colors group cursor-pointer ${
                                kitchenComponentsOpen ? "text-[#E23744]" : "text-gray-800 hover:text-[#E23744]"
                              }`}
                              aria-expanded={kitchenComponentsOpen}
                            >
                              <span className="whitespace-nowrap">Kitchen Components</span>
                              <span className="text-sm font-semibold ml-2 select-none">
                                {kitchenComponentsOpen ? "—" : "+"}
                              </span>
                            </button>

                            {/* Collapsible Accordion Sub-Items */}
                            {kitchenComponentsOpen && (
                              <div className="space-y-2 pl-3 pt-2 animate-in fade-in-50 duration-150">
                                {KITCHEN_OFFERINGS.components.map((c, idx) => (
                                  <Link
                                    key={idx}
                                    href={c.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveTier2Dropdown(null);
                                    }}
                                    className="block text-[12px] text-gray-600 hover:text-[#E23744] transition-colors"
                                  >
                                    {c.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right: Wardrobe */}
                      <div className="w-[215px]">
                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 h-4 flex items-center">
                          Wardrobe
                        </div>
                        <div className="space-y-3">
                          <Link
                            href="/aluminium-wardrobes"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveTier2Dropdown(null);
                            }}
                            className="block text-[13px] font-medium text-gray-800 hover:text-[#E23744] whitespace-nowrap transition-colors"
                          >
                            Know Your Wardrobe
                          </Link>

                          <Link
                            href="/#estimate-calculator"
                            onClick={() => {
                              setActiveDropdown(null);
                              setActiveTier2Dropdown(null);
                            }}
                            className="block text-[13px] font-medium text-gray-800 hover:text-[#E23744] whitespace-nowrap transition-colors"
                          >
                            Wardrobe Price Calculator
                          </Link>

                          <div>
                            <button
                              type="button"
                              onClick={() => setWardrobeComponentsOpen(!wardrobeComponentsOpen)}
                              className={`w-full flex items-center justify-between text-[13px] font-medium transition-colors group cursor-pointer ${
                                wardrobeComponentsOpen ? "text-[#E23744]" : "text-gray-800 hover:text-[#E23744]"
                              }`}
                              aria-expanded={wardrobeComponentsOpen}
                            >
                              <span className="whitespace-nowrap">Wardrobe Components</span>
                              <span className="text-sm font-semibold ml-2 select-none">
                                {wardrobeComponentsOpen ? "—" : "+"}
                              </span>
                            </button>

                            {/* Collapsible Accordion Sub-Items */}
                            {wardrobeComponentsOpen && (
                              <div className="space-y-2 pl-3 pt-2 animate-in fade-in-50 duration-150">
                                {WARDROBE_OFFERINGS.components.map((c, idx) => (
                                  <Link
                                    key={idx}
                                    href={c.href}
                                    onClick={() => {
                                      setActiveDropdown(null);
                                      setActiveTier2Dropdown(null);
                                    }}
                                    className="block text-[12px] text-gray-600 hover:text-[#E23744] transition-colors"
                                  >
                                    {c.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Price Calculators Dropdown (Matches Image 4) */}
              <div
                className="relative"
                onMouseEnter={() => handleTier2MouseEnter("calculators")}
                onMouseLeave={handleTier2MouseLeave}
              >
                <button
                  type="button"
                  onClick={() =>
                    setActiveTier2Dropdown(
                      activeTier2Dropdown === "calculators" ? null : "calculators"
                    )
                  }
                  className={`flex items-center gap-1.5 whitespace-nowrap transition-colors py-1 ${
                    activeTier2Dropdown === "calculators"
                      ? "text-[#E23744] font-semibold"
                      : "text-[#222222] hover:text-[#E23744]"
                  }`}
                  aria-expanded={activeTier2Dropdown === "calculators"}
                >
                  <span>Price Calculators</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeTier2Dropdown === "calculators"
                        ? "rotate-180 text-[#E23744]"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Price Calculators Popover */}
                {activeTier2Dropdown === "calculators" && (
                  <div
                    className="absolute top-full left-0 mt-2.5 w-64 bg-white rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] border border-gray-100 p-2.5 z-[60] animate-in fade-in-50 zoom-in-95 duration-150"
                    onMouseEnter={() => handleTier2MouseEnter("calculators")}
                    onMouseLeave={handleTier2MouseLeave}
                  >
                    <div className="space-y-0.5">
                      {PRICE_CALCULATOR_LINKS.map((item, idx) => (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => {
                            setActiveDropdown(null);
                            setActiveTier2Dropdown(null);
                          }}
                          className="block px-3 py-2 rounded-lg text-[13px] font-normal text-[#222222] hover:text-[#E23744] hover:bg-[#FDF2F3] transition-colors"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 4. The Modular Journey */}
              <Link
                href="/#how-it-works"
                className="hover:text-[#E23744] whitespace-nowrap transition-colors"
                onClick={() => {
                  setActiveDropdown(null);
                  setActiveTier2Dropdown(null);
                }}
              >
                The Modular Journey
              </Link>
            </div>

            {/* Livspace Signature Coral Red Pill Button */}
            <Button
              variant="primary"
              size="sm"
              href="/contact-us"
              className="bg-[#E23744] hover:bg-[#C92531] text-white font-bold text-xs uppercase tracking-wider px-5 py-2 rounded-full shadow-xs shrink-0"
            >
              Consult Online Now
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
      />
    </>
  );
}
