import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Wardrobe Designs & Glass Sliding Systems Hyderabad | Sky Tech",
  description:
    "Explore 980+ modern wardrobe designs in Hyderabad. European slim profile aluminium frames, tinted fluted toughened glass, walk-in closets, and silent sliding systems.",
};

export default function AluminiumWardrobesRoutePage() {
  const catalog = getDesignCatalog("aluminium-wardrobes");
  return <DesignCatalogPage catalog={catalog} />;
}
