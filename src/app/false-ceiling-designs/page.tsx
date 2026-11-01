import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "False Ceiling Designs & Architectural Cove Lighting Hyderabad | SkyTech",
  description:
    "Gypsum and POP false ceiling designs with magnetic track lights, indirect warm cove illumination, and wooden rafter integrations across Hyderabad.",
};

export default function FalseCeilingDesignsPage() {
  const catalog = getDesignCatalog("false-ceiling-designs");
  return <DesignCatalogPage catalog={catalog} />;
}
