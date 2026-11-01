import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Modular Wardrobes & Walk-In Closets Hyderabad | SkyTech Aluminium",
  description:
    "Floor-to-ceiling modular wardrobes, slim aluminium glass sliding closets, and open walk-in dressing units engineered in Hyderabad.",
};

export default function ModularWardrobesPage() {
  const catalog = getDesignCatalog("aluminium-wardrobes");
  return <DesignCatalogPage catalog={catalog} />;
}
