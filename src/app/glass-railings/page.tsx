import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Frameless Glass Railings & Balustrades Hyderabad | Sky Tech",
  description:
    "Explore 450+ frameless glass railings for balconies and staircases in Hyderabad. Heavy-duty structural base shoe channels and 12mm–15mm toughened safety glass.",
};

export default function GlassRailingsRoutePage() {
  const catalog = getDesignCatalog("glass-railings");
  return <DesignCatalogPage catalog={catalog} />;
}
