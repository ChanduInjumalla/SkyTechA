import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Toughened Glass Partitions & Shower Enclosures Hyderabad | SkyTech",
  description:
    "10mm & 12mm Saint-Gobain toughened glass shower cubicles, sliding bathroom partitions, and office acoustic glass walls across Hyderabad.",
};

export default function GlassPartitionsPage() {
  const catalog = getDesignCatalog("12mm-glass-partitions");
  return <DesignCatalogPage catalog={catalog} />;
}
