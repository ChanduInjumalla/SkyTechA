import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Structural Glazing & Curtain Wall Systems Hyderabad | SkyTech",
  description:
    "Unitized and semi-unitized structural glass facades, spider glazing, and exterior architectural curtain walls engineered for commercial elevations across Hyderabad.",
};

export default function StructuralGlazingPage() {
  const catalog = getDesignCatalog("structural-glazing");
  return <DesignCatalogPage catalog={catalog} />;
}
