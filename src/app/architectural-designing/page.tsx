import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Architectural Designing & Fenestration Engineering Hyderabad | SkyTech",
  description:
    "End-to-end architectural spatial planning, facade calculations, and interior engineering for high-end residential villas and commercial projects in Hyderabad.",
};

export default function ArchitecturalDesigningPage() {
  const catalog = getDesignCatalog("architectural-designing");
  return <DesignCatalogPage catalog={catalog} />;
}
