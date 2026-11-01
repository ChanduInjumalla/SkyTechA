"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Heart,
  Flame,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  CheckCircle,
  Phone,
  Shield,
  Clock,
  Award,
  Sparkles,
  X,
  MessageSquare,
  MapPin,
  Calendar,
} from "lucide-react";
import { DesignCatalog, DesignItem } from "@/content/designCatalogs";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";

interface Props {
  catalog: DesignCatalog;
}

const HYDERABAD_AREAS = [
  "Jubilee Hills",
  "Banjara Hills",
  "Gachibowli",
  "Kokapet",
  "Financial District",
  "Hitec City",
  "Madhapur",
  "Kondapur",
  "Kukatpally",
  "Hayathnagar & Khalsa",
  "Manikonda",
  "Tellapur",
  "Other Hyderabad Area",
];

const BHK_OPTIONS = [
  "1 BHK Apartment",
  "2 BHK Apartment",
  "3 BHK Apartment",
  "4+ BHK / Penthouse",
  "Independent Villa / Duplex",
  "Commercial / Office Studio",
];

export default function DesignCatalogPage({ catalog }: Props) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All Designs");
  const [wishlist, setWishlist] = useState<Record<string, boolean>>({});
  const [trendingSlideIndex, setTrendingSlideIndex] = useState(0);

  // Modal State for "Book Free Consultation" or "Get Quote"
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"consultation" | "quote">("quote");
  const [selectedDesign, setSelectedDesign] = useState<DesignItem | null>(null);

  // Form State for "Designs for Every Budget"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "Kokapet",
    bhk: "3 BHK Apartment",
    whatsappUpdates: true,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Toggle wishlist
  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setWishlist((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered designs
  const filteredDesigns = useMemo(() => {
    if (activeFilter === "All Designs") return catalog.designs;
    return catalog.designs.filter(
      (d) =>
        d.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        activeFilter.toLowerCase().includes(d.category.toLowerCase())
    );
  }, [catalog.designs, activeFilter]);

  const handleOpenModal = (design: DesignItem, mode: "consultation" | "quote") => {
    setSelectedDesign(design);
    setModalMode(mode);
    setModalOpen(true);
  };

  const handleTrendingNext = () => {
    setTrendingSlideIndex((prev) =>
      prev + 1 >= catalog.trendingDesigns.length ? 0 : prev + 1
    );
  };

  const handleTrendingPrev = () => {
    setTrendingSlideIndex((prev) =>
      prev - 1 < 0 ? catalog.trendingDesigns.length - 1 : prev - 1
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    // Optional instant WhatsApp notification
    const message = encodeURIComponent(
      `Hello Sky Tech Windows! I would like to get a quote / consultation for ${catalog.title}.\nName: ${formData.name}\nPhone: ${formData.phone}\nArea: ${formData.area}\nType: ${formData.bhk}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/917396991224?text=${message}`, "_blank");
    }, 800);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Hello Yousuf Shaik! I am interested in ${modalMode === "quote" ? "a Quote" : "Free Laser Consultation"} for: ${selectedDesign?.title} (${selectedDesign?.size}).`
    );
    window.open(`https://wa.me/917396991224?text=${message}`, "_blank");
    setModalOpen(false);
  };

  return (
    <div className="w-full bg-white min-h-screen text-[#1F1F1F]">
      {/* 1. Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-gray-100 bg-[#FAFAFA] py-2.5 px-4 sm:px-6 lg:px-8 text-xs text-[#757575]"
      >
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#E23744] transition-colors">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-[#222222]">Design Ideas</span>
          <span className="text-gray-400">/</span>
          <span className="text-[#E23744] font-medium">{catalog.title}</span>
        </div>
      </nav>

      {/* 2. Category Header / Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="max-w-4xl space-y-3">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#888888]">
            Showing {catalog.totalResults} Results for
          </p>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 sm:h-9 bg-[#E23744] rounded-full shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#1F1F1F] tracking-tight">
              {catalog.title}
            </h1>
          </div>

          <div className="pt-2 text-sm text-[#4A4A4A] leading-relaxed space-y-2">
            <p>
              <strong className="text-[#1F1F1F] font-semibold">
                {catalog.descriptionHeading}{" "}
              </strong>
              {catalog.description}
            </p>

            {isDescriptionExpanded && (
              <p className="pt-1 text-[#555555] animate-in fade-in duration-200">
                {catalog.expandedDescription}
              </p>
            )}

            <button
              type="button"
              onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#E23744] hover:underline pt-1 cursor-pointer"
            >
              <span>{isDescriptionExpanded ? "Read Less" : "Read More"}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  isDescriptionExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Top Trending Designs Carousel Ribbon (Soft Blush / Rose Livspace Style) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-[#FFF5F5] border border-[#FDE8E8] rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E23744] flex items-center justify-center text-white shadow-xs shrink-0">
                <Flame className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-display font-bold text-[#1F1F1F]">
                  {catalog.trendingHeadline}
                </h2>
                <p className="text-xs text-[#757575]">
                  {catalog.trendingSubheadline}
                </p>
              </div>
            </div>

            {/* Desktop / Tablet Prev-Next Arrows */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={handleTrendingPrev}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#E23744] hover:text-[#E23744] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous trending design"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleTrendingNext}
                className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#E23744] hover:text-[#E23744] flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next trending design"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trending Cards Grid (3 cards desktop, carousel on mobile) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {catalog.trendingDesigns.map((trend, idx) => (
              <div
                key={trend.id}
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={trend.image}
                    alt={trend.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
                    {trend.tag}
                  </div>
                </div>
                <div className="p-3.5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-sm font-bold text-[#1F1F1F] line-clamp-1 group-hover:text-[#E23744] transition-colors">
                      {trend.title}
                    </h3>
                    <p className="text-xs text-[#757575] mt-1 line-clamp-1">
                      {trend.specs}
                    </p>
                  </div>
                  <div className="pt-3 flex items-center justify-between border-t border-gray-100 mt-2">
                    <span className="text-[11px] font-semibold text-[#E23744]">
                      Factory-Direct Custom
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        handleOpenModal(
                          {
                            id: trend.id,
                            title: trend.title,
                            image: trend.image,
                            size: "Custom Hyderabad Site",
                            specs: trend.specs,
                            category: "Trending",
                          },
                          "consultation"
                        )
                      }
                      className="text-xs font-semibold text-[#1F1F1F] hover:text-[#E23744] flex items-center gap-0.5"
                    >
                      Enquire <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Filter Chips Bar */}
      <section className="sticky top-[72px] sm:top-[80px] z-30 bg-white/95 backdrop-blur-md border-y border-gray-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
            <span className="text-xs font-bold text-[#757575] uppercase tracking-wider shrink-0 mr-1 hidden sm:inline">
              Filter by:
            </span>
            {catalog.filterCategories.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 shrink-0 ${
                    isActive
                      ? "bg-[#1F1F1F] text-white shadow-xs font-semibold"
                      : "bg-[#F3F4F6] text-[#4A4A4A] hover:bg-[#E5E7EB] hover:text-[#1F1F1F]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Main Design Grid with In-Grid Promotional Banners (Exact Livspace Pattern) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredDesigns.map((design, index) => {
            const isLiked = wishlist[design.id] || false;

            return (
              <React.Fragment key={design.id}>
                {/* Standard Design Card */}
                <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  {/* Photo Container */}
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Wishlist Heart Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleWishlist(design.id, e)}
                      className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md transition-transform duration-200 active:scale-90 ${
                        isLiked ? "text-[#E23744]" : "text-gray-500 hover:text-[#E23744]"
                      }`}
                      aria-label="Add to wishlist"
                    >
                      <Heart
                        className={`w-4.5 h-4.5 ${
                          isLiked ? "fill-[#E23744] text-[#E23744]" : ""
                        }`}
                      />
                    </button>

                    {/* Optional Price Badge */}
                    {design.priceEstimate && (
                      <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                        Est. {design.priceEstimate}
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#1F1F1F] line-clamp-2 group-hover:text-[#E23744] transition-colors leading-snug">
                        {design.title}
                      </h3>

                      <p className="text-xs font-medium text-[#757575] mt-2">
                        {design.size}
                      </p>

                      <p className="text-xs text-[#888888] mt-1 line-clamp-1">
                        {design.specs}
                      </p>
                    </div>

                    {/* Dual Action Buttons (Exact Livspace Style: Outline Red + Solid Red) */}
                    <div className="grid grid-cols-2 gap-2.5 pt-5 mt-auto">
                      <button
                        type="button"
                        onClick={() => handleOpenModal(design, "consultation")}
                        className="w-full py-2 px-2 text-[12px] sm:text-[13px] font-semibold text-[#E23744] bg-white border border-[#E23744] rounded-lg hover:bg-[#FDF2F3] transition-colors text-center truncate"
                      >
                        Book Free Consultation
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenModal(design, "quote")}
                        className="w-full py-2 px-2 text-[12px] sm:text-[13px] font-semibold text-white bg-[#E23744] hover:bg-[#c92b37] rounded-lg transition-colors text-center shadow-xs truncate"
                      >
                        Get Quote
                      </button>
                    </div>
                  </div>
                </div>

                {/* Promotional In-Grid Card 1: Starting Price & EMI (After 3rd item) */}
                {index === 2 && (
                  <div className="bg-[#2D223B] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-md">
                    <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-white/5 blur-xl pointer-events-none" />
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[11px] font-medium tracking-wide mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-[#E23744]" />
                        <span>HYDERABAD FACTORY DIRECT</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                        {catalog.shortTitle} starting from {catalog.startingPrice}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                        Designs for all budgets with flexible milestone EMIs as low
                        as <strong className="text-white font-semibold">{catalog.startingEmi}</strong>.
                      </p>
                    </div>

                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenModal(
                            {
                              id: "budget-promo",
                              title: `${catalog.title} Starting Package`,
                              image: catalog.heroFeaturedImage,
                              size: "Custom 2BHK/3BHK",
                              specs: "710 BWP Plywood / Domal Aluminium",
                              category: "Promo",
                            },
                            "quote"
                          )
                        }
                        className="w-full py-3 px-4 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                      >
                        GET FREE {catalog.shortTitle.toUpperCase()} QUOTE
                      </button>
                    </div>
                  </div>
                )}

                {/* Promotional In-Grid Card 2: The Sky Tech Guarantee (After 6th item) */}
                {index === 5 && (
                  <div className="bg-white border-2 border-[#E23744]/20 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xs">
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-extrabold text-[#1F1F1F]">
                        The Sky Tech Promise
                      </h3>
                      <p className="text-xs text-[#757575] mt-1">
                        Precision factory fabrication in Hayathnagar
                      </p>

                      <div className="mt-5 space-y-3.5 text-xs text-[#333333]">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#FDF2F3] text-[#E23744] flex items-center justify-center shrink-0">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold block">10-Year Comprehensive Warranty</span>
                            <span className="text-[11px] text-[#757575]">Termite-proof & delamination safe</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#FDF2F3] text-[#E23744] flex items-center justify-center shrink-0">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold block">45-Day Handover Guarantee</span>
                            <span className="text-[11px] text-[#757575]">Strict adherence to milestone timelines</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#FDF2F3] text-[#E23744] flex items-center justify-center shrink-0">
                            <Award className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold block">146 Laser Quality Checks</span>
                            <span className="text-[11px] text-[#757575]">Zero-millimeter tolerance standard</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded-full bg-[#FDF2F3] text-[#E23744] flex items-center justify-center shrink-0">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold block">100% Customizable Designs</span>
                            <span className="text-[11px] text-[#757575]">Tailored to your Hyderabad floor plan</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 mt-5">
                      <button
                        type="button"
                        onClick={() =>
                          handleOpenModal(
                            {
                              id: "promise-card",
                              title: `Sky Tech Guarantee Consultation`,
                              image: catalog.heroFeaturedImage,
                              size: "Hyderabad Wide",
                              specs: "100% Custom Engineering",
                              category: "Promise",
                            },
                            "consultation"
                          )
                        }
                        className="w-full py-2.5 px-4 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        GET FREE QUOTE
                      </button>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 6. "Designs for Every Budget" Lead Capture Block (Exact Image 5 Re-Creation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-[#2C1F38] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
          {/* Left Visual Column */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] lg:min-h-full bg-gray-900">
            <img
              src={catalog.heroFeaturedImage}
              alt="Designs for Every Budget"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E23744] mb-1">
                EXPERT HYDERABAD CONSULTATION
              </span>
              <p className="text-white text-lg sm:text-xl font-bold">
                1,200+ Homes Transformed Across Hyderabad
              </p>
              <p className="text-gray-300 text-xs mt-1">
                Hayathnagar Workshop • Free Laser Site Measurements • 0% Middlemen
              </p>
            </div>
          </div>

          {/* Right Lead Capture Form Column (Dark Wine / Plum Card) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="space-y-1 mb-6">
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white tracking-tight">
                Designs for Every Budget
              </h2>
              <p className="text-xs sm:text-sm text-gray-300">
                Get your dream home today. Let our experts help you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 animate-in fade-in duration-300">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white">Thank You, {formData.name}!</h4>
                <p className="text-xs text-gray-200 mt-2">
                  Our engineering lead Yousuf Shaik (+91 73969 91224) has received your request
                  for {formData.area}. Connecting via WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="sr-only" htmlFor="budget-name">
                    Full Name
                  </label>
                  <input
                    id="budget-name"
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="budget-email">
                    Email Address
                  </label>
                  <input
                    id="budget-email"
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="budget-phone">
                    Phone Number
                  </label>
                  <div className="flex bg-white rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#E23744]">
                    <div className="px-3 py-2.5 bg-gray-100 border-r border-gray-200 text-xs font-semibold text-[#1F1F1F] flex items-center gap-1.5 shrink-0">
                      <span>🇮🇳 +91</span>
                    </div>
                    <input
                      id="budget-phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-[#1F1F1F] placeholder-gray-500 text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label className="sr-only" htmlFor="budget-area">
                      Select Area
                    </label>
                    <select
                      id="budget-area"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                    >
                      {HYDERABAD_AREAS.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="budget-bhk">
                      Select BHK
                    </label>
                    <select
                      id="budget-bhk"
                      value={formData.bhk}
                      onChange={(e) => setFormData({ ...formData, bhk: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                    >
                      {BHK_OPTIONS.map((bhk) => (
                        <option key={bhk} value={bhk}>
                          {bhk}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    id="budget-whatsapp"
                    type="checkbox"
                    checked={formData.whatsappUpdates}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsappUpdates: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-[#E23744] focus:ring-[#E23744] accent-[#E23744]"
                  />
                  <label htmlFor="budget-whatsapp" className="text-xs text-gray-200">
                    Send me updates & 3D designs on WhatsApp
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                  >
                    GET FREE QUOTE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. Category Specific FAQ Accordion */}
      {catalog.faqs.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#1F1F1F]">
              Frequently Asked Questions About {catalog.shortTitle}
            </h2>
            <p className="text-xs text-[#757575] mt-1">
              Everything you need to know before starting your Hyderabad project
            </p>
          </div>

          <div className="space-y-3">
            {catalog.faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-4 sm:p-5 bg-white shadow-xs"
              >
                <h3 className="font-bold text-sm sm:text-base text-[#1F1F1F]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Interactive Quick Consultation / Quote Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative">
            {/* Header */}
            <div className="bg-[#1F1F1F] text-white p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E23744] block">
                  {modalMode === "quote" ? "Instant Estimate" : "Free Laser Survey"}
                </span>
                <h4 className="text-base font-bold">
                  {selectedDesign?.title || catalog.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white p-1 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail */}
            {selectedDesign?.image && (
              <div className="h-32 bg-gray-100 overflow-hidden relative">
                <img
                  src={selectedDesign.image}
                  alt={selectedDesign.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-3 bg-black/70 text-white text-[11px] px-2 py-0.5 rounded-full">
                  {selectedDesign.size}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleModalSubmit} className="p-5 space-y-3.5">
              <p className="text-xs text-[#555555] leading-relaxed">
                Connect directly with Yousuf Shaik (+91 73969 91224) to lock in factory-direct pricing
                and schedule a zero-cost laser measurement anywhere in Hyderabad.
              </p>

              <div>
                <label className="block text-xs font-semibold text-[#1F1F1F] mb-1">
                  Your Hyderabad Locality
                </label>
                <select className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs font-medium focus:outline-none focus:border-[#E23744]">
                  {HYDERABAD_AREAS.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>
                    {modalMode === "quote"
                      ? "REQUEST QUOTE VIA WHATSAPP"
                      : "BOOK FREE SITE LASER SURVEY"}
                  </span>
                </button>
              </div>

              <div className="text-center pt-1">
                <a
                  href="tel:+917396991224"
                  className="inline-flex items-center gap-1.5 text-xs text-[#757575] hover:text-[#E23744] font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E23744]" />
                  <span>Or Call Directly: +91 73969 91224</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
