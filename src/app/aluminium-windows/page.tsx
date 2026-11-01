import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Aluminium & Domal Windows Hyderabad | European Precision Systems | Sky Tech",
  description:
    "Explore 750+ aluminium and European Domal window systems in Hyderabad. Acoustic sliding windows, casement systems, tilt & turn, and stainless mosquito mesh.",
};

export default function AluminiumWindowsRoutePage() {
  const catalog = getDesignCatalog("aluminium-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
