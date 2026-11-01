import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Luxury Living Room Interior Designs Hyderabad | SkyTech Aluminium",
  description:
    "Explore 500+ curated living room interior designs, acoustic glass patio doors, fluted TV panels, and Italian marble flooring integrations in Hyderabad.",
};

export default function LivingRoomInteriorsPage() {
  const catalog = getDesignCatalog("living-room-designs");
  return <DesignCatalogPage catalog={catalog} />;
}
