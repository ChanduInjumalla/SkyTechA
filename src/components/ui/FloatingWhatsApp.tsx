"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex items-center select-none"
    >
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with Yousuf Shaik"
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle breathing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366] relative z-10" />

        {/* Desktop Tooltip */}
        <span className="hidden sm:inline-block absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-gray-900/90 text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none backdrop-blur-xs">
          Chat on WhatsApp • Quick Response
        </span>
      </a>
    </aside>
  );
}
