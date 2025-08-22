// hooks/useGalleryData.ts
import { useState, useMemo } from "react";
import { GalleryItem, GalleryCategory } from "@/types/gallery";
import { galleryItems } from "@/data/gallery";

const CATEGORIES: GalleryCategory[] = [
  { id: "all", label: "All Media", count: galleryItems.length },
  {
    id: "weddings",
    label: "Weddings",
    count: galleryItems.filter((item) => item.category === "weddings").length,
  },
  {
    id: "corporate",
    label: "Corporate",
    count: galleryItems.filter((item) => item.category === "corporate").length,
  },
  {
    id: "private",
    label: "Private Events",
    count: galleryItems.filter((item) => item.category === "private").length,
  },
  {
    id: "food",
    label: "Culinary",
    count: galleryItems.filter((item) => item.category === "food").length,
  },
  {
    id: "behind-scenes",
    label: "Behind Scenes",
    count: galleryItems.filter((item) => item.category === "behind-scenes")
      .length,
  },
];

export const useGalleryData = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("masonry");

  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return {
    items: filteredItems,
    categories: CATEGORIES,
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
  };
};
