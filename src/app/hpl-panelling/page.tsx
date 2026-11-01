import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "HPL Exterior Cladding & Wall Panelling Hyderabad | SkyTech",
  description:
    "Weather-proof High Pressure Laminate (HPL) exterior wall panelling and wooden texture ventilated facades for luxury villas in Jubilee Hills and Kokapet.",
};

export default function HplPanellingPage() {
  const catalog = getDesignCatalog("hpl-panelling");
  return <DesignCatalogPage catalog={catalog} />;
}
