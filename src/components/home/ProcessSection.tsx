"use client";

import React from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import { Ruler, MonitorCheck, Wrench, CheckCheck } from "lucide-react";

export default function ProcessSection() {
  const STEPS = [
    {
      step: "01",
      icon: <Ruler className="w-6 h-6 text-[#E23744]" />,
      title: "Free On-Site Laser Measurement",
      description: "Our technical team visits your site anywhere in Hyderabad to take high-precision millimeter measurements and inspect structural openings.",
    },
    {
      step: "02",
      icon: <MonitorCheck className="w-6 h-6 text-[#E23744]" />,
      title: "3D CAD Visualization & Transparent BOM",
      description: "We generate 3D section drawings, profile weight calculations, and a clear bill-of-materials with zero hidden installation charges.",
    },
    {
      step: "03",
      icon: <Wrench className="w-6 h-6 text-[#E23744]" />,
      title: "Hayathnagar Factory CNC Fabrication",
      description: "Extrusions are precision-milled, corner-crimped with hydraulic presses, glazed with structural silicone, and tested for acoustic sealing.",
    },
    {
      step: "04",
      icon: <CheckCheck className="w-6 h-6 text-[#E23744]" />,
      title: "Clean Installation & Warranty Certificate",
      description: "Our factory technicians handle on-site anchoring, perimeter silicone weatherproofing, hardware alignment, and handover your 10-year warranty.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-[#F8F9FA] border-b border-gray-200">
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E23744] bg-[#FDF2F3] px-3.5 py-1.5 rounded-full inline-block mb-3">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-[#1F1F1F] tracking-tight">
            Our 4-step precision process from site to handover
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Engineered workflows that guarantee zero gaps, zero air leaks, and exact delivery timelines across Hyderabad.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between"
            >
              {/* Step Number Watermark */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#FDF2F3] flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-gray-200">
                  {step.step}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-[#1F1F1F] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#E23744]">
                <span>Stage {step.step} Milestone</span>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
}
