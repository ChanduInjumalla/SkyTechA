import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Office Frameless Glass Doors Hyderabad | Patch Fitting & Pivot | SkyTech",
  description:
    "Commercial frameless glass doors with Dorma hydraulic floor springs, stainless steel architectural pull handles, and acoustic locksets for Hyderabad corporate offices.",
};

export default function OfficeGlassDoorsPage() {
  const catalog = getDesignCatalog("glass-doors-office");
  return <DesignCatalogPage catalog={catalog} />;
}
