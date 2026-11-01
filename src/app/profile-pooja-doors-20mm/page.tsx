import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "20mm Slim Profile Pooja Room Doors Hyderabad | Fluted Glass | SkyTech",
  description:
    "Traditional meets contemporary: Anodized gold and rose-gold slim 20mm aluminium profile pooja mandir doors with fluted and frosted glass inserts.",
};

export default function PoojaRoomDoorsPage() {
  const catalog = getDesignCatalog("profile-pooja-doors-20mm");
  return <DesignCatalogPage catalog={catalog} />;
}
