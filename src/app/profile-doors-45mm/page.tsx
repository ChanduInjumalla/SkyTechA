import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "45mm Profile Doors & Slim Telescopic Partitions Hyderabad | Sky Tech",
  description:
    "Explore 45mm profile doors, slim glass sliding systems, and pooja room doors fabricated with Italian and European profile dies in Hyderabad.",
};

export default function ProfileDoorsRoutePage() {
  const catalog = getDesignCatalog("aluminium-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
