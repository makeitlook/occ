// components/GalleryItem/GalleryItem.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryItem as GalleryItemType } from "@/types/gallery";

interface GalleryItemProps {
  item: GalleryItemType;
  onClick: (item: GalleryItemType) => void;
  variants?: any;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  item,
  onClick,
  variants,
}) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <motion.div
      variants={variants}
      className="group cursor-pointer relative overflow-hidden rounded-2xl bg-card-background shadow-lg hover:shadow-2xl transition-all duration-500"
      onClick={handleClick}
    >
      {/* Image/Video Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.type === "video" ? item.thumbnail : item.src}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

        {/* Video Play Button */}
        {item.type === "video" && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <svg
                className="w-8 h-8 text-gray-900 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
          <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4">
            <h3 className="text-lg font-medium text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed font-light mb-3">
              {item.description}
            </p>
            <div className="flex items-center justify-between text-xs text-text-tertiary">
              <div className="flex items-center gap-1">
                <svg
                  className="w-3 h-3"
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
                <span>{item.location}</span>
              </div>
              <span>{item.date}</span>
            </div>
          </div>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-medium rounded-full uppercase tracking-wide">
          {item.type}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
