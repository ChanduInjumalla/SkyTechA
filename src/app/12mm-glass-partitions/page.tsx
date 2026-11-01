import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "12mm Toughened Glass Partitions & Shower Enclosures Hyderabad | Sky Tech",
  description:
    "Explore 620+ frameless 12mm glass partitions, luxury walk-in shower enclosures, and office acoustic cabins in Hyderabad with SS 304 and solid brass hardware.",
};

export default function GlassPartitionsRoutePage() {
  const catalog = getDesignCatalog("12mm-glass-partitions");
  return <DesignCatalogPage catalog={catalog} />;
}
