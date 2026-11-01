"use client";

import React, { useState } from "react";
import { BUSINESS_INFO, CONTACT_LINKS } from "@/content/business";
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, CheckCircle } from "lucide-react";

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white min-h-screen text-[#1F1F1F]">
      {/* Header */}
      <section className="bg-[#FAFAFA] border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E23744]">
            HYDERABAD FABRICATION FACILITY & ONSITE MEASUREMENTS
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-[#1F1F1F]">
            Contact Sky Tech Windows
          </h1>
          <p className="text-sm text-[#555555] max-w-2xl mx-auto">
            Book a complimentary laser site survey anywhere in Hyderabad or consult directly with
            our engineering team for factory-direct estimates.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF5F5] border border-[#FDE8E8] rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-display font-bold text-[#1F1F1F]">
                Direct Owner Contact
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E23744] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#757575] block">Direct Consultation / Mobile</span>
                    <a
                      href={`tel:+91${BUSINESS_INFO.mobile}`}
                      className="font-bold text-base text-[#1F1F1F] hover:text-[#E23744] transition-colors"
                    >
                      +91 {BUSINESS_INFO.mobile} (Yousuf Shaik)
                    </a>
                    <span className="text-xs text-[#757575] block mt-0.5">
                      Alternate: +91 {BUSINESS_INFO.businessPhone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#757575] block">WhatsApp Business</span>
                    <a
                      href={CONTACT_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-sm text-emerald-700 hover:underline"
                    >
                      Chat on WhatsApp (+91 73969 91224)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#1F1F1F] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#757575] block">Workshop & Fabrication Hub</span>
                    <p className="font-medium text-xs leading-relaxed text-[#333333]">
                      {BUSINESS_INFO.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gray-200 text-[#1F1F1F] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-[#757575] block">Operating Hours</span>
                    <p className="font-medium text-xs text-[#333333]">
                      {BUSINESS_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href={CONTACT_LINKS.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#1F1F1F] hover:bg-black text-white text-xs font-bold text-center block transition-colors shadow-xs"
                >
                  GET GOOGLE MAPS DIRECTIONS
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-xs text-[#555555] space-y-2">
              <span className="font-bold text-sm text-[#1F1F1F] block">
                Complimentary Site Survey Guarantee
              </span>
              <p>
                Our precision laser measurement service is 100% free across all Hyderabad localities
                including Jubilee Hills, Banjara Hills, Gachibowli, Kokapet, Financial District,
                Hitec City, and Hayathnagar.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-[#2C1F38] rounded-2xl p-6 sm:p-10 text-white shadow-xl flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E23744]">
                FAST TRACK ESTIMATE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold mt-1">
                Schedule Laser Measurement
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                Zero contractor markups. Itemized Bill of Materials (BOM) delivered within 24 hours.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Yousuf Shaik will connect with you on WhatsApp shortly.");
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-200">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1 text-gray-200">
                    Hyderabad Locality
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kokapet / Jubilee Hills"
                    className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-200">
                  Project Requirements
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]">
                  <option>Modular Kitchen (710 BWP)</option>
                  <option>Wardrobes & Walk-in Glass Closets</option>
                  <option>Aluminium & Domal Windows</option>
                  <option>12mm Glass Partitions & Shower Enclosures</option>
                  <option>Glass Railings for Balcony / Staircase</option>
                  <option>Complete Full Home Turnkey Interiors</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold mb-1 text-gray-200">
                  Additional Notes or Floor Plan Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your room dimensions, preferred finish, or timeline..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white text-[#1F1F1F] text-sm focus:outline-none focus:ring-2 focus:ring-[#E23744]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#E23744] hover:bg-[#c92b37] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  CONFIRM FREE SITE VISIT REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
