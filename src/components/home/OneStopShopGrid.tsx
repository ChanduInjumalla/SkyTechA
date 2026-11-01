"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface OneStopCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

const CAROUSEL_CARDS: OneStopCard[] = [
  {
    id: "modular-interiors",
    title: "Modular Interiors",
    subtitle: "Functional kitchen, wardrobe and storage",
    image: "/images/one-stop/modular-interiors.jpg",
    href: "/modular-kitchens",
  },
  {
    id: "full-home-interiors",
    title: "Full Home Interiors",
    subtitle: "Turnkey interior solutions for your home",
    image: "/images/one-stop/full-home-interiors.jpg",
    href: "/interior-designing",
  },
  {
    id: "luxury-interiors",
    title: "Luxury Interiors",
    subtitle: "Tailored interiors that redefine elegance",
    image: "/images/one-stop/luxury-interiors.jpg",
    href: "/architectural-designing",
  },
  {
    id: "value-interiors",
    title: "Value Interiors",
    subtitle: "Quality interiors at affordable prices",
    image: "/images/one-stop/value-interiors.jpg",
    href: "/execution-works",
  },
  {
    id: "renovations",
    title: "Renovations",
    subtitle: "Expert solutions to upgrade your home",
    image: "/images/one-stop/renovations.jpg",
    href: "/execution-works",
  },
  {
    id: "aluminium-windows",
    title: "Aluminium & Domal Windows",
    subtitle: "Heavy-duty acoustic sliding & casement profiles",
    image: "/images/one-stop/aluminium-domal.jpg",
    href: "/aluminium-domal-windows",
  },
  {
    id: "upvc-windows",
    title: "uPVC Windows & Doors",
    subtitle: "Weatherproof acoustic multi-chamber systems",
    image: "/images/one-stop/upvc-windows.jpg",
    href: "/upvc-windows",
  },
  {
    id: "glass-partitions",
    title: "Glass Partitions & Facades",
    subtitle: "12mm toughened glass, balustrades & ACP cladding",
    image: "/images/one-stop/glass-partitions.jpg",
    href: "/12mm-glass-partitions",
  },
];

export default function OneStopShopGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScrollState = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    if (maxScroll > 0) {
      setScrollProgress(Math.min(Math.max(scrollLeft / maxScroll, 0), 1));
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    checkScrollState();
    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
    };
  }, [checkScrollState]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardStep = 320; // Scroll by one card step
    const delta = direction === "left" ? -cardStep : cardStep;
    scrollRef.current.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="pt-8 sm:pt-10 pb-4 sm:pb-6 bg-white select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Livspace Section Header (Matching Screenshots 1 & 2) */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#222222] tracking-tight leading-snug">
            One-stop shop for all things interiors
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] mt-2 leading-relaxed max-w-2xl mx-auto font-normal">
            Be it end-to-end interiors, renovation or modular solutions, we have it all for your home or office. With a wide range of furniture &amp; decor, we have your back from start to finish.
          </p>
        </div>

        {/* Carousel Container with Circular Floating Arrow Controls */}
        <div className="relative group/carousel">
          {/* Circular Left Arrow Button (Appears when scrolled right) */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleScroll("left");
            }}
            aria-label="Scroll left"
            className={`absolute -left-3 sm:-left-5 top-[40%] -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-[#222222] hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              canScrollLeft ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Circular Right Arrow Button (Matching Screenshots 1 & 2) */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleScroll("right");
            }}
            aria-label="Scroll right"
            className={`absolute -right-3 sm:-right-5 top-[40%] -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-gray-100 flex items-center justify-center text-[#222222] hover:text-black hover:scale-105 active:scale-95 transition-all cursor-pointer ${
              canScrollRight ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

          {/* Cards Horizontal Scroll Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth py-2 px-1 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {CAROUSEL_CARDS.map((card) => (
              <Link
                key={card.id}
                href={card.href}
                className="group snap-start shrink-0 w-[260px] sm:w-[275px] lg:w-[280px] bg-white rounded-xl border border-gray-100 shadow-[0_2px_14px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)] transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Image Section (Clean Proportion) */}
                <div className="relative h-44 sm:h-48 md:h-50 w-full overflow-hidden bg-gray-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Information Section */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col items-center text-center justify-between bg-white">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#E23744] transition-colors leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#666666] mt-1.5 leading-relaxed max-w-[220px]">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* Centered Chevron Right */}
                  <div className="mt-4 flex items-center justify-center">
                    <ChevronRight
                      className="w-4 h-4 text-[#222222] group-hover:text-[#E23744] group-hover:translate-x-1 transition-transform"
                      strokeWidth={2.5}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Scroll Progress Track with Sliding Dark Pill */}
        <div className="flex justify-center mt-6 sm:mt-7">
          <div className="w-24 sm:w-32 h-1 bg-gray-200 rounded-full relative overflow-hidden">
            <div
              className="h-full bg-[#222222] rounded-full absolute top-0 left-0 transition-transform duration-100 ease-out"
              style={{
                width: "35%",
                transform: `translateX(${scrollProgress * (100 / 0.35 - 100)}%)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
