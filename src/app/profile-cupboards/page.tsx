import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Aluminium Profile Cupboards & Crockery Units Hyderabad | SkyTech",
  description:
    "Luxury glass crockery cabinets, bar storage, and dining room display cupboards engineered with slim anodized aluminium profiles and sensor LEDs.",
};

export default function ProfileCupboardsPage() {
  const catalog = getDesignCatalog("profile-cupboards");
  return <DesignCatalogPage catalog={catalog} />;
}
