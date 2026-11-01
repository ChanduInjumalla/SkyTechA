import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "European Domal Aluminium Windows Series Hyderabad | Sky Tech",
  description: "Domal 27mm & 45mm series aluminium windows with acoustic weatherproofing.",
};

export default function DomalWindowsPage() {
  const catalog = getDesignCatalog("aluminium-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
