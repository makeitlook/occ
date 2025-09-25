// components/VenueCard/VenueCard.tsx (Clean Minimal Design)
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Venue } from "@/types/venue";

interface VenueCardProps {
  venue: Venue;
  variants?: any;
  onCardClick: (venue: Venue) => void;
}

const VenueCard: React.FC<VenueCardProps> = ({
  venue,
  variants,
  onCardClick,
}) => {
  const handleClick = () => {
    onCardClick(venue);
  };

  return (
    <motion.div
      variants={variants}
      className="group cursor-pointer"
      onClick={handleClick}
    >
      <article className="h-full bg-card-background border border-elements-secondary-highlight/10 hover:border-elements-secondary-highlight/20 transition-all duration-300 hover:shadow-xl flex flex-col">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-102"
            loading="lazy"
          />

          {/* Minimal overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Type badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-block bg-card-background/95 backdrop-blur-sm px-3 py-1 text-xs font-medium text-elements-secondary-main uppercase tracking-wider border border-elements-secondary-highlight/20">
              {venue.type}
            </span>
          </div>
        </div>

        {/* Content - Flex grow to fill remaining space */}
        <div className="p-6 flex flex-col flex-1">
          <div className="space-y-3 flex-1">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-elements-primary-main transition-colors duration-200">
              {venue.name}
            </h3>

            <div className="flex items-center text-elements-secondary-main text-sm">
              <svg
                className="w-4 h-4 mr-2 opacity-70"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {venue.location}
            </div>

            <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
              {venue.description}
            </p>
          </div>

          {/* Footer - Always at bottom */}
          <div className="mt-6 pt-4 border-t border-elements-secondary-highlight/10">
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">
                {venue.capacity}
              </span>
              <div className="flex items-center text-elements-primary-main text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-x-2 group-hover:translate-x-0">
                <span className="mr-1">View Details</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
};

export default VenueCard;
