// components/GalleryLightbox/GalleryLightbox.tsx
"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "@/types/gallery";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrevious) onPrevious();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!item) return null;

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
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
          />

          {/* Lightbox */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          >
            <div className="max-w-7xl w-full max-h-[95vh] relative">
              {/* Close Button - Enhanced for mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-12 h-12 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-md hover:bg-black/90 rounded-full flex items-center justify-center transition-colors duration-200 text-white touch-manipulation"
                style={{ touchAction: "manipulation" }}
                aria-label="Close lightbox"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Buttons - Enhanced for mobile */}
              {onPrevious && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrevious();
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 backdrop-blur-md hover:bg-black/90 rounded-full flex items-center justify-center transition-colors duration-200 text-white touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
              )}

              {onNext && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/80 backdrop-blur-md hover:bg-black/90 rounded-full flex items-center justify-center transition-colors duration-200 text-white touch-manipulation"
                  style={{ touchAction: "manipulation" }}
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}

              {/* Media Content */}
              <div
                className="bg-black rounded-lg sm:rounded-2xl overflow-hidden shadow-2xl max-h-[95vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Media Container */}
                <div className="flex-1 flex items-center justify-center p-2 sm:p-4">
                  {item.type === "video" ? (
                    <div className="w-full aspect-video max-h-[70vh]">
                      <iframe
                        src={item.src}
                        className="w-full h-full rounded-lg"
                        allow="autoplay; fullscreen; picture-in-picture"
                        title={item.title}
                      />
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="max-w-full max-h-[70vh] object-contain rounded-lg"
                    />
                  )}
                </div>

                {/* Content Info */}
                <div className="bg-card-background p-4 sm:p-6 border-t border-border-dimmed">
                  <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col gap-4">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-light text-text-primary mb-2">
                          {item.title}
                        </h2>
                        <p className="text-text-secondary leading-relaxed font-light text-sm sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex flex-col sm:flex-row gap-3 text-sm text-text-tertiary">
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 flex-shrink-0"
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
                          <div className="flex items-center gap-2">
                            <svg
                              className="w-4 h-4 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>{item.date}</span>
                          </div>
                        </div>

                        {/* Tags */}
                        {/* <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-elements-primary-bg text-elements-primary-main text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div> */}
                      </div>
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

export default GalleryLightbox;
