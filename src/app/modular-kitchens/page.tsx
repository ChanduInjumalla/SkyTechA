import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Modular Kitchen Designs Hyderabad | 710 BWP & German Fittings | Sky Tech",
  description:
    "Explore 1,400+ modular kitchen designs in Hyderabad. Direct factory manufacturing at Hayathnagar Khalsa, genuine 710 BWP Marine Plywood, Blum hardware, and 10-year warranty.",
};

export default function ModularKitchensRoutePage() {
  const catalog = getDesignCatalog("modular-kitchens");
  return <DesignCatalogPage catalog={catalog} />;
}
