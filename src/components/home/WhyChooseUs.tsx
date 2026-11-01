"use client";

import React from "react";

interface WhyChooseUsCard {
  id: string;
  text: string;
  image: string;
  alt: string;
}

const CARDS: WhyChooseUsCard[] = [
  {
    id: "happy-homes",
    text: "1,00,000+ happy homes",
    image: "/images/why-choose-us/happy-homes.jpg",
    alt: "1,00,000+ happy homes",
  },
  {
    id: "cities",
    text: "100+ cities",
    image: "/images/why-choose-us/cities.jpg",
    alt: "100+ cities",
  },
  {
    id: "catalogue-products",
    text: "20 lakh+ catalogue products",
    image: "/images/why-choose-us/catalogue-products.jpg",
    alt: "20 lakh+ catalogue products",
  },
  {
    id: "designers",
    text: "2,000+ designers",
    image: "/images/why-choose-us/designers.jpg",
    alt: "2,000+ designers",
  },
  {
    id: "warranty",
    text: "Lifetime warranty¹",
    image: "/images/why-choose-us/warranty.png",
    alt: "Lifetime warranty¹",
  },
  {
    id: "move-in",
    text: "45-day move-in guarantee²",
    image: "/images/why-choose-us/move-in-guarantee.jpg",
    alt: "45-day move-in guarantee²",
  },
  {
    id: "quality-checks",
    text: "146 quality checks",
    image: "/images/why-choose-us/quality-checks.jpg",
    alt: "146 quality checks",
  },
];

export default function WhyChooseUs() {
  // Triple items for seamless continuous 60fps infinite right-to-left loop
  const infiniteCards = [...CARDS, ...CARDS, ...CARDS];

  return (
    <section className="py-8 sm:py-10 bg-[#FBFBFC] border-b border-gray-100 overflow-hidden select-none">
      {/* Self-contained 60fps GPU Hardware-Accelerated Right-to-Left Infinite Marquee */}
      <style>{`
        @keyframes whyChooseUsScroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333333%, 0, 0);
          }
        }
        .why-choose-us-scroller {
          display: flex !important;
          width: max-content !important;
          animation: whyChooseUsScroll 28s linear infinite !important;
          will-change: transform;
        }
        .why-choose-us-scroller:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1F1F1F] tracking-tight font-display text-center mb-6 sm:mb-7">
          Why choose us
        </h2>

        {/* Moving Marquee Container (Always Scrolling Right to Left) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="why-choose-us-scroller flex gap-4 sm:gap-6 py-2">
            {infiniteCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="w-[185px] sm:w-[195px] h-[175px] sm:h-[185px] p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 shrink-0 group cursor-pointer"
              >
                {/* 80x80 Livspace Icon Badge */}
                <div className="w-18 h-18 sm:w-20 sm:h-20 shrink-0 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={card.image}
                    alt={card.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Card Text */}
                <p className="text-[14px] sm:text-[15px] font-normal text-[#41303E] leading-snug w-full text-center">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
