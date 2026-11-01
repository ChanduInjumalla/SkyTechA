import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Full Home & Living Interior Designs Hyderabad | Sky Tech Windows",
  description:
    "Explore 1,850+ full-home interiors, luxury living rooms, acoustic master bedrooms, false ceilings, and TV units fabricated directly at Hayathnagar Khalsa.",
};

export default function InteriorDesigningRoutePage() {
  const catalog = getDesignCatalog("interior-designing");
  return <DesignCatalogPage catalog={catalog} />;
}
