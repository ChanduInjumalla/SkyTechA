import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Slim Profile Glass Doors Hyderabad | Concealed Pivot & Sliding | SkyTech",
  description:
    "Ultra-narrow stile aluminium glass doors, floor-to-ceiling pivot partitions, and synchronized soft-close sliding systems for modern luxury homes in Hyderabad.",
};

export default function SlimProfileDoorsPage() {
  const catalog = getDesignCatalog("slim-profile-doors");
  return <DesignCatalogPage catalog={catalog} />;
}
