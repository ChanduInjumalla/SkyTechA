"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Calculator } from "lucide-react";
import { CONTACT_LINKS } from "@/content/business";

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Quick mobile actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] py-2.5 px-3 sm:hidden"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* 1. Quick Direct Call */}
        <a
          href={CONTACT_LINKS.phoneBusiness}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#1F1F1F] font-semibold text-xs transition-colors active:scale-95 text-center"
        >
          <Phone className="w-4 h-4 text-[#E23744]" />
          <span>Call</span>
        </a>

        {/* 2. Direct WhatsApp Chat */}
        <a
          href={CONTACT_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#E8F8EE] hover:bg-[#D4F3E0] text-[#128C7E] font-semibold text-xs transition-colors active:scale-95 text-center"
        >
          <MessageSquare className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* 3. Primary Red CTA: Get Free Estimate / Price Calculator */}
        <Link
          href="/price-calculators"
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#E23744] hover:bg-[#C92531] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs active:scale-95 text-center"
        >
          <Calculator className="w-4 h-4" />
          <span>Estimate</span>
        </Link>
      </div>
    </aside>
  );
}
