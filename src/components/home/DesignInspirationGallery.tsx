"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ChevronRight as ArrowIcon } from "lucide-react";

interface InspirationCard {
  id: string;
  title: string;
  image: string;
  href: string;
  isWide?: boolean;
}

const ROW_1_ITEMS: InspirationCard[] = [
  {
    id: "living-room",
    title: "Living Room",
    image: "/images/inspiration/living-room.jpg",
    href: "/living-room-interiors",
    isWide: true,
  },
  {
    id: "master-bedroom",
    title: "Master Bedroom",
    image: "/images/inspiration/master-bedroom.jpg",
    href: "/bedroom-designs",
    isWide: false,
  },
  {
    id: "false-ceiling",
    title: "False Ceiling",
    image: "/images/inspiration/false-ceiling.jpg",
    href: "/false-ceiling-designs",
    isWide: false,
  },
  {
    id: "kids-bedroom",
    title: "Kids Bedroom",
    image: "/images/inspiration/kids-bedroom.jpg",
    href: "/kids-bedroom-designs",
    isWide: true,
  },
  {
    id: "balcony",
    title: "Balcony & Sliding Systems",
    image: "/images/inspiration/balcony.jpg",
    href: "/balcony-french-doors",
    isWide: false,
  },
];

const ROW_2_ITEMS: InspirationCard[] = [
  {
    id: "homes-by-skytech",
    title: "Homes by Sky Tech",
    image: "/images/inspiration/dining-room.jpg",
    href: "/projects",
    isWide: false,
  },
  {
    id: "kitchen",
    title: "Kitchen",
    image: "/images/inspiration/kitchen.jpg",
    href: "/modular-kitchens",
    isWide: true,
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    image: "/images/inspiration/wardrobe.jpg",
    href: "/modular-wardrobes",
    isWide: false,
  },
  {
    id: "home-office",
    title: "Home Office",
    image: "/images/inspiration/home-office.jpg",
    href: "/study-room-designs",
    isWide: false,
  },
  {
    id: "bathroom",
    title: "Glass Partitions & Bathroom",
    image: "/images/inspiration/bathroom.jpg",
    href: "/glass-partitions",
    isWide: false,
  },
];

export default function DesignInspirationGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 600;
    scrollContainerRef.current.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-4 sm:pt-6 pb-10 sm:pb-14 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Row (Exact Livspace Clone) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 sm:gap-4 mb-5 sm:mb-6">
          <div>
            <h2 className="text-xl sm:text-3xl lg:text-[32px] font-bold text-[#1F1F1F] tracking-tight font-display leading-snug">
              Inspiration for home interior designs
            </h2>
            <p className="text-xs sm:text-[15px] text-[#666666] mt-1 font-body">
              Give your home a new look with these interior design ideas curated for you
            </p>
          </div>

          <Link
            href="/design-ideas"
            className="group inline-flex items-center gap-1 text-xs sm:text-base font-semibold text-[#E23744] hover:text-[#C92531] transition-colors shrink-0 select-none pb-0.5 sm:pb-1"
          >
            <span>View All</span>
            <ArrowIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Gallery Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow Button (Desktop & Tablet) */}
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => handleScroll("left")}
              aria-label="Scroll left"
              className="hidden md:flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-gray-800 shadow-[0_4px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.25)] items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer border border-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {/* Right Arrow Button (Desktop & Tablet) */}
          {canScrollRight && (
            <button
              type="button"
              onClick={() => handleScroll("right")}
              aria-label="Scroll right"
              className="hidden md:flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-gray-800 shadow-[0_4px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.25)] items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer border border-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          )}

          {/* Synchronized 2-Row Horizontal Scroll Container */}
          <div
            id="inspiration-scroll-container"
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-none flex flex-col gap-3 sm:gap-4 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Row 1 */}
            <div className="flex gap-3 sm:gap-4 shrink-0">
              {ROW_1_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group relative rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 shrink-0 block cursor-pointer transition-transform duration-300 ${
                    item.isWide
                      ? "w-[270px] sm:w-[480px] md:w-[640px]"
                      : "w-[190px] sm:w-[260px] md:w-[320px]"
                  } h-[175px] sm:h-[260px] md:h-[340px]`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Room Label Badge (Livspace Clone) */}
                  <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10">
                    <span className="inline-block bg-black/60 backdrop-blur-xs text-white text-[10px] sm:text-[13px] font-medium px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-md shadow-xs">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-3 sm:gap-4 shrink-0">
              {ROW_2_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`group relative rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 shrink-0 block cursor-pointer transition-transform duration-300 ${
                    item.isWide
                      ? "w-[270px] sm:w-[480px] md:w-[640px]"
                      : "w-[190px] sm:w-[260px] md:w-[320px]"
                  } h-[175px] sm:h-[260px] md:h-[340px]`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Room Label Badge (Livspace Clone) */}
                  <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-10">
                    <span className="inline-block bg-black/60 backdrop-blur-xs text-white text-[11px] sm:text-[13px] font-medium px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md shadow-xs">
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
