import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Aluminium Casement Windows Hyderabad | Openable Windows | SkyTech Aluminium",
  description:
    "European style openable casement windows with friction hinges, multi-point perimeter locks, and maximum acoustic and thermal insulation.",
};

export default function AluminiumCasementWindowsPage() {
  const catalog = getDesignCatalog("aluminium-casement-windows");
  return <DesignCatalogPage catalog={catalog} />;
}
