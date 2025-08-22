// components/VenueFilter/VenueFilter.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
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
            <Button
              key={category.id}
              type={
                selectedCategory === category.id ? "continue" : "text"
              }
              extraClassNames="px-6 py-3 rounded-xl font-medium transition-all duration-300"
              onClick={() => onCategoryChange(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </motion.div>
    );
  };

export default VenueFilter;
