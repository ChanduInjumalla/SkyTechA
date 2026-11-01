import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Balcony French Doors & Glass Railings Hyderabad | SkyTech Aluminium",
  description:
    "Seamless European sliding patio doors, French openable doors, and frameless glass balcony railings for apartments and villas in Hyderabad.",
};

export default function BalconyFrenchDoorsPage() {
  const catalog = getDesignCatalog("balcony-designs");
  return <DesignCatalogPage catalog={catalog} />;
}
