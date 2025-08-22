// components/VenueGrid/VenueGrid.tsx (Updated with Modal)
"use client";

import React from "react";
import { motion } from "framer-motion";
import VenueCard from "@/components/PartneredVenues/VenueCard";
import { Venue } from "@/types/venue";

interface VenueGridProps {
  venues: Venue[];
  variants?: any;
  itemVariants?: any;
  onCardClick: (venue: Venue) => void;
}

const VenueGrid: React.FC<VenueGridProps> = ({
  venues,
  variants,
  itemVariants,
  onCardClick,
}) => {
  return (
    <motion.div
      variants={variants}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {venues.map((venue) => (
        <VenueCard
          key={venue.id}
          venue={venue}
          variants={itemVariants}
          onCardClick={onCardClick}
        />
      ))}
    </motion.div>
  );
};

export default VenueGrid;
