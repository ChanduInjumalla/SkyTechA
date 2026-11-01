"use client";

import React from "react";
import Link from "next/link";
import { NavLink, DESIGN_IDEAS_COL1, DESIGN_IDEAS_COL2 } from "@/content/navigation";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function MegaMenu({ isOpen, onClose, title = "Design Ideas" }: MegaMenuProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 right-0 w-full bg-white border-b border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-200 z-50 text-[#1F1F1F]"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#E23744]">
              Architectural Systems & Offerings
            </span>
            <h3 className="text-xl font-display font-bold text-[#1F1F1F] mt-0.5">
              {title}
            </h3>
          </div>
          <Link
            href="/interior-designing"
            onClick={onClose}
            className="text-xs font-semibold text-[#E23744] hover:text-[#C92531] flex items-center gap-1 transition-colors"
          >
            <span>Explore All Designs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1F1F1F] block uppercase tracking-wider">
              Interior Collections
            </span>
            <ul className="space-y-1">
              {DESIGN_IDEAS_COL1.slice(0, 7).map((item: NavLink, idx: number) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs text-gray-600 hover:text-[#E23744] hover:underline block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1F1F1F] block uppercase tracking-wider">
              Custom Space Planning
            </span>
            <ul className="space-y-1">
              {DESIGN_IDEAS_COL1.slice(7).map((item: NavLink, idx: number) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs text-gray-600 hover:text-[#E23744] hover:underline block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1F1F1F] block uppercase tracking-wider">
              Architectural Elements
            </span>
            <ul className="space-y-1">
              {DESIGN_IDEAS_COL2.slice(0, 7).map((item: NavLink, idx: number) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs text-gray-600 hover:text-[#E23744] hover:underline block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#1F1F1F] block uppercase tracking-wider">
              Doors & Partitions
            </span>
            <ul className="space-y-1">
              {DESIGN_IDEAS_COL2.slice(7).map((item: NavLink, idx: number) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs text-gray-600 hover:text-[#E23744] hover:underline block py-1"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
