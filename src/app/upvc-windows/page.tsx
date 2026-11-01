import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "uPVC Windows & Doors Hyderabad | Acoustic & Weatherproof | Sky Tech",
  description:
    "Explore multi-chambered tropical grade uPVC windows and sliding doors in Hyderabad with multi-point hardware and acoustic double glazing.",
};

export default function UpvcWindowsRoutePage() {
  const catalog = getDesignCatalog("aluminium-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
