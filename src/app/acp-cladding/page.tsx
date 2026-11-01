import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "ACP Composite Cladding Work Hyderabad | Exterior Facades | SkyTech",
  description:
    "Premium aluminium composite panel (ACP) cladding for commercial elevations, showrooms, hospital facades, and modern residential exteriors in Hyderabad.",
};

export default function AcpCladdingPage() {
  const catalog = getDesignCatalog("acp-cladding");
  return <DesignCatalogPage catalog={catalog} />;
}
