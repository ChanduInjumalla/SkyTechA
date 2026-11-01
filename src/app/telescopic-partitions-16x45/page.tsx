import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Telescopic Partitions 16x45 Hyderabad | Synchronized Glass Sliding | SkyTech",
  description:
    "16x45mm ultra-slim telescopic sliding glass partition systems. Synchronized multi-track opening with zero floor track trip hazards for kitchens and living rooms.",
};

export default function TelescopicPartitionsPage() {
  const catalog = getDesignCatalog("telescopic-partitions-16x45");
  return <DesignCatalogPage catalog={catalog} />;
}
