// components/VenueModal/VenueModal.tsx (50/50 Split Layout)
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/Button/Button";
import { Venue } from "@/types/venue";
import Button from "@/components/Button/Button";

interface VenueModalProps {
  venue: Venue | null;
  isOpen: boolean;
  onClose: () => void;
}

const VenueModal: React.FC<VenueModalProps> = ({ venue, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Reset image index when venue changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [venue]);

  if (!venue) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % venue.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + venue.gallery.length) % venue.gallery.length
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card-background rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl border border-border-dimmed">
              {/* 50/50 Split Layout */}
              <div className="flex flex-col lg:flex-row h-[95vh]">
                {/* Left Side - Image Gallery (50%) */}
                <div className="relative lg:w-1/2 h-64 lg:h-full bg-gradient-to-br from-elements-primary-light/10 to-elements-secondary-main/10 flex-shrink-0">
                  <Image
                    src={venue.gallery[currentImageIndex]}
                    alt={`${venue.name} - Image ${currentImageIndex + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    loading="lazy"
                  />

                  {/* Image Navigation */}
                    {venue.gallery.length > 1 && (
                      <>
                        <Button
                          type="icon"
                          onClick={prevImage}
                          extraClassNames="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card-background/90 backdrop-blur-md hover:bg-card-background rounded-full transition-colors duration-200 border border-border-dimmed/30 text-text-primary p-0"
                          icon={
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M15 19l-7-7 7-7"
                              />
                            </svg>
                          }
                        />
                        <Button
                          type="icon"
                          onClick={nextImage}
                          extraClassNames="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-card-background/90 backdrop-blur-md hover:bg-card-background rounded-full transition-colors duration-200 border border-border-dimmed/30 text-text-primary p-0"
                          icon={
                            <svg
                              className="w-5 h-5"
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
                          }
                        />

                      {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                          {venue.gallery.map((_, index) => (
                            <Button
                              key={index}
                              type="text"
                              onClick={() => setCurrentImageIndex(index)}
                              extraClassNames={`w-2.5 h-2.5 rounded-full p-0 transition-all duration-200 ${
                                index === currentImageIndex
                                  ? "bg-elements-primary-main"
                                  : "bg-card-background/60 hover:bg-card-background/80"
                              }`}
                            />
                          ))}
                        </div>
                    </>
                  )}
                </div>

                {/* Right Side - Content (50%) */}
                <div className="lg:w-1/2 flex flex-col min-h-0 flex-1">
                  {/* Header with Close Button */}
                  <div className="flex justify-between items-start p-6 border-b border-border-dimmed flex-shrink-0">
                    <div>
                      <h2 className="text-2xl font-light text-text-primary mb-2">
                        {venue.name}
                      </h2>
                      <div className="flex items-center gap-2 text-elements-secondary-main text-sm">
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
                        <span>{venue.location}</span>
                        <span className="text-text-tertiary">•</span>
                        <span>{venue.capacity}</span>
                      </div>
                    </div>

                      <Button
                        type="icon"
                        onClick={onClose}
                        extraClassNames="w-8 h-8 bg-elements-primary-bg hover:bg-elements-primary-light rounded-full transition-colors duration-200 text-text-primary p-0"
                        icon={
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        }
                      />
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Description */}
                    <div>
                      <p className="text-text-secondary leading-relaxed font-light">
                        {venue.description}
                      </p>
                    </div>

                    {/* Amenities */}
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-4">
                        Amenities
                      </h3>
                      <ul className="space-y-2">
                        {venue.amenities.map((amenity, index) => (
                          <li key={index} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-elements-primary-main rounded-full"></div>
                            <span className="text-text-secondary font-light text-sm">
                              {amenity}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h3 className="text-lg font-medium text-text-primary mb-4">
                        Pricing
                      </h3>
                      <div className="bg-elements-primary-bg rounded-2xl p-4 border border-border-dimmed">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-text-secondary text-sm">
                              Venue Hire:
                            </span>
                            <span className="font-medium text-elements-primary-main">
                              {venue.pricing.baseRate}
                            </span>
                          </div>
                          <div className="text-xs text-text-tertiary border-t border-border-dimmed pt-3">
                            <p>Includes: {venue.pricing.includes}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 border-t border-border-dimmed flex-shrink-0">
                    <div className="flex flex-col gap-3">
                      <Button
                        type="elegant-primary"
                        href="/contact"
                        extraClassNames="w-full py-3"
                        icon={
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
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        }
                      >
                        Book Consultation
                      </Button>
                      <Button
                        type="elegant-outline"
                        href="tel:02012345678"
                        extraClassNames="w-full py-3"
                        icon={
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
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        }
                      >
                        Call Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VenueModal;
