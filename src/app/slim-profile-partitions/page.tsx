import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Slim Profile Glass Partitions Hyderabad | Living & Dining Dividers | SkyTech",
  description:
    "Acoustic slim profile partition walls with fluted, tinted, and clear glass dividers for dining areas, study rooms, and master suites.",
};

export default function SlimProfilePartitionsPage() {
  const catalog = getDesignCatalog("slim-profile-partitions");
  return <DesignCatalogPage catalog={catalog} />;
}
