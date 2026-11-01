import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Office Aluminium Partitions Hyderabad | Commercial Glazing | SkyTech",
  description:
    "Demountable modular office aluminium partitions with integrated switchable privacy glass, double glazing acoustic insulation, and cable management channels.",
};

export default function OfficeAluminiumPartitionsPage() {
  const catalog = getDesignCatalog("office-aluminium-partitions");
  return <DesignCatalogPage catalog={catalog} />;
}
