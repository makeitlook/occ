// components/VenueCard/VenueCard.tsx (Updated with Modal)
"use client";

import React from "react";
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
      {/* Venue Card */}
      <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
        {/* Background Image */}
        <img
          src={venue.image}
          alt={venue.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="bg-card-background/95 backdrop-blur-xl rounded-2xl p-6 border border-elements-secondary-highlight/20">
            <div className="mb-4">
              <h3 className="text-2xl font-light text-text-primary mb-2">
                {venue.name}
              </h3>
              <div className="flex items-center gap-2 text-elements-secondary-main font-light mb-3">
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
            </div>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 font-light">
              {venue.description}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-xs text-elements-secondary-main font-medium uppercase tracking-wide">
                {venue.type}
              </span>
              <span className="text-sm text-text-secondary">
                {venue.capacity}
              </span>
            </div>
          </div>
        </div>

        {/* Click indicator - Updated text */}
        <div className="absolute top-6 right-6 w-10 h-10 bg-card-background/90 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <svg
            className="w-5 h-5 text-elements-primary-main"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>

        {/* Hover overlay with "View Details" text */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-3xl flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-card-background/95 backdrop-blur-md rounded-2xl px-6 py-3 border border-elements-secondary-highlight/20">
            <span className="text-text-primary font-medium">View Details</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default VenueCard;
