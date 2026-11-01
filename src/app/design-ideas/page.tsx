import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Design Ideas | Sky Tech Windows & Modular Interiors Hyderabad",
  description:
    "Explore 3,000+ curated design ideas for modular kitchens, wardrobes, living rooms, and aluminium window systems in Hyderabad.",
};

export default function DesignIdeasIndexPage() {
  const catalog = getDesignCatalog("modular-kitchens");
  return <DesignCatalogPage catalog={catalog} />;
}
