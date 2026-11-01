"use client";

import React from "react";
import SectionContainer from "@/components/ui/SectionContainer";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";
import Button from "@/components/ui/Button";
import { MessageSquare, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ConsultationCtaSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <SectionContainer>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1F1F1F] via-[#2A2A2A] to-[#141414] text-white p-8 sm:p-12 md:p-16 shadow-2xl">
          {/* Subtle Ambient Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E23744]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white font-mono text-xs uppercase tracking-wider border border-white/20">
              Hyderabad Factory Direct Consultation
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              Ready to engineer your windows, glass & interiors?
            </h2>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Book a free laser measurement at your site or visit our Hayathnagar fabrication facility to inspect actual aluminium extrusion profiles, 12mm glass systems, and hardware durability.
            </p>

            {/* Direct Action Buttons (Livspace Style) */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={`https://wa.me/91${BUSINESS_INFO.mobile}?text=${encodeURIComponent(
                  "Hello Yousuf Shaik, I would like to book a free site consultation and estimate for my project in Hyderabad."
                )}`}
                isExternal
                icon={<MessageSquare className="w-5 h-5 text-white" />}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold px-8 py-4 rounded-full text-sm shadow-xl"
              >
                Chat with Yousuf Shaik
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={CONTACT_LINKS.phoneBusiness}
                icon={<Phone className="w-4 h-4 text-[#E23744]" />}
                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#1F1F1F] font-bold px-8 py-4 rounded-full text-sm shadow-lg"
              >
                Call {BUSINESS_INFO.businessPhone}
              </Button>
            </div>

            {/* Trust Assurance Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Zero Consultation Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Same-Day Site Visit Available</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E23744]" />
                <span>Hayathnagar Khalsa, Hyderabad</span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
