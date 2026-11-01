import React from "react";
import { Metadata } from "next";
import { getDesignCatalog, CATALOGS } from "@/content/designCatalogs";
import DesignCatalogPage from "@/components/design-catalog/DesignCatalogPage";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return [
    { category: "kitchen-designs" },
    { category: "wardrobe-designs" },
    { category: "bathroom-designs" },
    { category: "living-room-designs" },
    { category: "bedroom-designs" },
    { category: "window-designs" },
    { category: "door-designs" },
    { category: "balcony-designs" },
    { category: "modular-kitchens" },
    { category: "aluminium-wardrobes" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const catalog = getDesignCatalog(category);
  return {
    title: `${catalog.title} | Sky Tech Windows & Modular Interiors Hyderabad`,
    description: catalog.description,
  };
}

export default async function DesignCategoryPage({ params }: PageProps) {
  const { category } = await params;
  const catalog = getDesignCatalog(category);

  return <DesignCatalogPage catalog={catalog} />;
}
