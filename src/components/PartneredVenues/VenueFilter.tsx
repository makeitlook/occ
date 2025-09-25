// components/VenueFilter/VenueFilter.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { VenueCategory } from "@/types/venue";

interface VenueFilterProps {
  categories: VenueCategory[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
  variants?: any;
}

const VenueFilter: React.FC<VenueFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  variants,
}) => {
  return (
    <motion.div variants={variants} className="flex justify-center mt-12">
      <div className="flex gap-2 bg-card-background/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-border-dimmed">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
              selectedCategory === category.id
                ? "bg-elements-primary-main text-elements-primary-contrastText shadow-lg"
                : "text-text-secondary hover:text-elements-primary-main hover:bg-elements-primary-bg"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default VenueFilter;
