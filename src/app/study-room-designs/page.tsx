import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Modern Study Room & Home Office Designs Hyderabad | SkyTech",
  description:
    "Acoustic home office study setups with soundproof glass sliding doors, ergonomic desk joinery, and minimalist book shelving.",
};

export default function StudyRoomDesignsPage() {
  const catalog = getDesignCatalog("office-aluminium-partitions");
  return <DesignCatalogPage catalog={catalog} />;
}
