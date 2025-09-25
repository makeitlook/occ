// components/VenueModal/VenueModal.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Venue } from "@/types/venue";
import Button from "@/components/Button/Button";

interface VenueModalProps {
  venue: Venue | null;
  isOpen: boolean;
  onClose: () => void;
}

const VenueModal: React.FC<VenueModalProps> = ({ venue, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Simple breakpoint check (avoids mobile body-lock bugs)
  const isDesktop = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 1024px)").matches;
  }, []);

  // Close modal on escape key + manage body scroll locking (desktop only)
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Lock body only on desktop to prevent iOS scroll issues
      if (isDesktop) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, isDesktop]);

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
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-0 lg:p-6"
          >
            {/* 
              Mobile: full-height sheet with its own scroll (h-[100dvh] + overflow-y-auto).
              Desktop: constrained height with overflow-hidden (details panel scrolls).
            */}
            <div className="bg-card-background w-full h-[100dvh] overflow-y-auto lg:h-auto lg:max-w-6xl lg:max-h-[90dvh] lg:overflow-hidden shadow-2xl border border-elements-secondary-highlight/20">
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-elements-secondary-highlight/10">
                <div>
                  <h2 className="text-2xl font-semibold text-text-primary mb-1">
                    {venue.name}
                  </h2>
                  <div className="flex items-center gap-4 text-elements-secondary-main text-sm">
                    <div className="flex items-center gap-1">
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
                    </div>
                    <span className="text-text-tertiary">•</span>
                    <span>{venue.capacity}</span>
                    <span className="text-text-tertiary">•</span>
                    <span className="text-xs uppercase tracking-wider">
                      {venue.type}
                    </span>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="w-10 h-10 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-elements-secondary-highlight/10 transition-colors duration-200"
                >
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content Area 
                  Use flex + min-h-0 so the right panel can scroll.
                  Mobile: column; Desktop: row.
              */}
              <div className="flex flex-col lg:flex-row flex-1 min-h-0">
                {/* Image Gallery */}
                <div className="relative lg:w-3/5 h-64 sm:h-80 lg:h-auto bg-neutral-100 flex-shrink-0">
                  <Image
                    src={venue.gallery[currentImageIndex]}
                    alt={`${venue.name} - Image ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                    loading="lazy"
                    priority={false}
                  />

                  {/* Navigation */}
                  {venue.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-text-primary flex items-center justify-center transition-colors duration-200 shadow-lg"
                      >
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
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white text-text-primary flex items-center justify-center transition-colors duration-200 shadow-lg"
                      >
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
                      </button>

                      {/* Image Counter */}
                      <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 text-sm">
                        {currentImageIndex + 1} / {venue.gallery.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Details Panel */}
                <div className="lg:w-2/5 flex flex-col bg-card-background min-h-0">
                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto p-6">
                    {/* Description */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-text-primary mb-3">
                        About
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {venue.description}
                      </p>
                    </div>

                    {/* Amenities */}
                    {venue.amenities && venue.amenities.length > 0 && (
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold text-text-primary mb-4">
                          Amenities
                        </h3>
                        <div className="grid grid-cols-1 gap-2">
                          {venue.amenities.map((amenity, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-3 py-1"
                            >
                              <div className="w-1.5 h-1.5 bg-elements-primary-main flex-shrink-0"></div>
                              <span className="text-text-secondary text-sm">
                                {amenity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 border-t border-elements-secondary-highlight/10 bg-card-background">
                    <div className="space-y-3">
                      <Button
                        type="elegant-primary"
                        extraClassNames="w-full justify-center py-3 text-sm sm:text-base"
                        onClick={(e) => {
                          e.preventDefault();
                          const message = encodeURIComponent(
                            `Hi! I'm interested in booking ${venue.name} for an event. Could you please provide more information?`
                          );
                          const phoneNumber = "447123456789"; // Replace with your WhatsApp business number
                          const isMobile =
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                              navigator.userAgent
                            );

                          if (isMobile) {
                            window.open(
                              `whatsapp://send?phone=${phoneNumber}&text=${message}`,
                              "_blank"
                            );
                          } else {
                            window.open(
                              `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`,
                              "_blank"
                            );
                          }
                        }}
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
                        Chat with Us
                      </Button>
                      <Button
                        type="elegant-outline"
                        href="tel:02012345678"
                        extraClassNames="w-full justify-center py-3"
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
