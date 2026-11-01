import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Turnkey Interior Execution Works Hyderabad | Civil, Carpentry & Fenestration | SkyTech",
  description:
    "End-to-end turnkey residential and commercial execution across Hyderabad. 100% factory-backed joinery, electrical, false ceiling, and exterior glazing.",
};

export default function ExecutionWorksPage() {
  const catalog = getDesignCatalog("execution-works");
  return <DesignCatalogPage catalog={catalog} />;
}
