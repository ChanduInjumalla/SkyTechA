"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/content/business";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "accuracy",
    question: "How accurate is the online cost estimate?",
    answer:
      "Our online calculator provides realistic price benchmarks calibrated directly to our Hayathnagar fabrication rates and typical Hyderabad apartment dimensions. Following our free on-site laser measurement, we generate an itemized 3D Bill of Materials (BOM) with transparent line items and zero hidden contractor markups.",
    category: "Cost & Pricing",
  },
  {
    id: "warranty",
    question: "What warranty is provided on aluminium systems and modular interiors?",
    answer:
      "We provide up to a 10-year comprehensive factory warranty. This covers aluminium profile structural stability, weather-resistant powder coatings, and premium sliding hardware. Our interior modular cabinetry is backed by a 10-year warranty against termite infestation and surface delamination.",
    category: "Warranty & Quality",
  },
  {
    id: "timeline",
    question: "What is the typical execution timeline from measurement to handover?",
    answer:
      "Window and sliding door installations typically take 15–20 business days from final measurement approval. Complete turnkey home interiors and modular kitchens are engineered and installed within 35–45 days, adhering strictly to pre-agreed milestone schedules.",
    category: "Execution Timeline",
  },
  {
    id: "measurement",
    question: "Do you offer free on-site laser measurements across Hyderabad?",
    answer:
      "Yes. Our engineering technicians provide complimentary laser surveys across all localities in Hyderabad—including Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Financial District, Hitec City, Madhapur, and Hayathnagar—to inspect structural openings and ensure zero millimeter tolerances.",
    category: "Site Survey",
  },
  {
    id: "materials",
    question: "What materials and hardware specifications do you utilize?",
    answer:
      "For modular interiors, we exclusively use genuine 710 BWP (Boiling Water Proof) marine plywood, high-density HDHMR cores, and world-class German hardware from Blum and Hettich. For windows and architectural partitions, we use virgin-grade Domal aluminium profiles and certified Saint-Gobain toughened safety glass.",
    category: "Materials & Hardware",
  },
  {
    id: "single-source",
    question: "Can Sky Tech handle both exterior windows/facades and interior woodwork?",
    answer:
      "Yes. Sky Tech is a single-source manufacturer and turnkey execution partner. Consolidating exterior glazing, acoustic sliding doors, glass partitions, and interior joinery under one roof eliminates miscommunication between separate vendors, guaranteeing flawless acoustic sealing and coherent aesthetics.",
    category: "Turnkey Execution",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("accuracy");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FDFDFE] border-b border-gray-100 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#E23744] bg-[#FFF1F2] border border-[#FFE4E6] mb-3 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#111111] font-display tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#666666] mt-2 font-normal leading-relaxed">
            Everything you need to know about our fabrication standards, pricing models, warranties, and timelines.
          </p>
        </div>

        {/* Clean Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#E23744]/40 shadow-[0_4px_16px_rgba(226,55,68,0.06)]"
                    : "bg-white border-gray-200/80 hover:border-gray-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-4.5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer transition-colors"
                >
                  <span className={`text-sm sm:text-base font-semibold font-display tracking-tight ${
                    isOpen ? "text-[#E23744]" : "text-[#1F1F1F]"
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#FFF1F2] text-[#E23744]" : "bg-gray-100 text-gray-500"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-[13px] text-[#555555] leading-relaxed border-t border-gray-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Prompt */}
        <div className="mt-10 pt-8 border-t border-gray-200/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-5 border shadow-2xs">
          <div className="text-left">
            <span className="font-bold text-sm text-[#111111] block">
              Still have questions about your specific floorplan?
            </span>
            <span className="text-xs text-[#777777]">
              Speak directly with our technical fabrication head Yousuf Shaik.
            </span>
          </div>

          <a
            href={`https://wa.me/91${BUSINESS_INFO.mobile}?text=${encodeURIComponent(
              "Hello Sky Tech Windows, I have a specific question about my residential project in Hyderabad."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-colors shadow-xs shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
