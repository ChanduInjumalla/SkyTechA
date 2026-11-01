import React from "react";
import { Metadata } from "next";
import PriceEstimatorSection from "@/components/home/PriceEstimatorSection";

export const metadata: Metadata = {
  title: "Cost Estimators & Budget Calculator | Sky Tech Windows Hyderabad",
  description:
    "Calculate instant factory-direct estimates for modular kitchens, wardrobes, and aluminium windows in Hyderabad. Transparent pricing with zero hidden contractor margins.",
};

export default function PriceCalculatorPage() {
  return (
    <div className="w-full bg-white min-h-screen py-6">
      <PriceEstimatorSection />
    </div>
  );
}
