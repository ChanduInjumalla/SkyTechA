import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Aluminium Sliding Windows Series Hyderabad | SkyTech Aluminium",
  description:
    "Heavy-duty 2-track, 3-track, and 4-track acoustic aluminium sliding windows with concealed stainless steel rollers and EPDM weather-sealing.",
};

export default function AluminiumSlidingWindowsPage() {
  const catalog = getDesignCatalog("aluminium-sliding-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
