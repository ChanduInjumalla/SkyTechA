import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Kids Bedroom Designs Hyderabad | Playful & Safe Joinery | SkyTech",
  description:
    "Ergonomic, non-toxic, and functional kids bedroom interiors with child-safe safety glass, modular study desks, and ample toy storage.",
};

export default function KidsBedroomDesignsPage() {
  const catalog = getDesignCatalog("kids-bedroom-designs");
  return <DesignCatalogPage catalog={catalog} />;
}
