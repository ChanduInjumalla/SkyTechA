import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Master & Guest Bedroom Interior Designs Hyderabad | SkyTech Aluminium",
  description:
    "Contemporary master bedroom interior designs with acoustic soundproof windows, walk-in closets, and acoustic padded headboard panels.",
};

export default function BedroomDesignsPage() {
  const catalog = getDesignCatalog("master-bedroom-designs");
  return <DesignCatalogPage catalog={catalog} />;
}
