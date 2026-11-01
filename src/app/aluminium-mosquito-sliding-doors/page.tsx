import React from "react";
import { Metadata } from "next";
import { getDesignCatalog } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

export const metadata: Metadata = {
  title: "Aluminium Mosquito Mesh Sliding Doors & Windows Hyderabad | SkyTech",
  description:
    "Integrated SS 304 black wire mosquito mesh sliding systems for balconies, French doors, and windows with heavy-duty aluminium sash framing.",
};

export default function MosquitoSlidingDoorsPage() {
  const catalog = getDesignCatalog("aluminium-mosquito-sliding-doors");
  return <DesignCatalogPage catalog={catalog} />;
}
