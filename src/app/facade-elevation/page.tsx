import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Modern Facade Elevation & Architectural Cladding Hyderabad | SkyTech",
  description:
    "Luxury villa and commercial exterior elevations featuring high-grade aluminium louvers, perforated panels, structural glazing, and exterior tiles.",
};

export default function FacadeElevationPage() {
  const catalog = getDesignCatalog("facade-elevation");
  return <DesignCatalogPage catalog={catalog} />;
}
