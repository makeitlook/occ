// Gallery.tsx (Main Gallery Page)
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import GalleryItem from "@/components/Gallery/GalleryItem";
import GalleryLightbox from "@/components/Gallery/GalleryLightbox";
import { useGalleryData } from "@/hooks/useGalleryData";
import { GalleryItem as GalleryItemType } from "@/types/gallery";

export default function Gallery() {
  const {
    items,
    categories,
    selectedCategory,
    setSelectedCategory,
    viewMode,
    setViewMode,
  } = useGalleryData();

  const [selectedItem, setSelectedItem] = useState<GalleryItemType | null>(
    null
  );
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleItemClick = (item: GalleryItemType) => {
    setSelectedItem(item);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  const handleNext = () => {
    if (!selectedItem) return;
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelectedItem(items[nextIndex]);
  };

  const handlePrevious = () => {
    if (!selectedItem) return;
    const currentIndex = items.findIndex((item) => item.id === selectedItem.id);
    const previousIndex = (currentIndex - 1 + items.length) % items.length;
    setSelectedItem(items[previousIndex]);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="min-h-screen bg-card-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-neutral-dimmed via-main-background to-neutral overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-elements-primary-light/10 to-elements-secondary-main/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-elements-secondary-main/10 to-elements-primary-light/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Gallery"
              title="Moments of"
              subtitle="Culinary Excellence"
              description="Discover the artistry and elegance behind our events through our curated collection of images and videos showcasing unforgettable celebrations."
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="py-12 bg-card-background border-b border-border-dimmed/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            {/* Category Filters */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-elements-primary-main text-elements-primary-contrastText shadow-lg"
                      : "bg-card-background border border-border-dimmed text-text-secondary hover:text-elements-primary-main hover:border-elements-primary-main"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              <span className="text-text-secondary font-medium">View:</span>
              <div className="flex bg-elements-primary-bg rounded-xl p-1 border border-border-dimmed">
                <button
                  onClick={() => setViewMode("masonry")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === "masonry"
                      ? "bg-elements-primary-main text-elements-primary-contrastText shadow-sm"
                      : "text-text-secondary hover:text-elements-primary-main"
                  }`}
                >
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
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    viewMode === "grid"
                      ? "bg-elements-primary-main text-elements-primary-contrastText shadow-sm"
                      : "text-text-secondary hover:text-elements-primary-main"
                  }`}
                >
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
                      d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 002 2m0 0v10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-card-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className={`${
              viewMode === "masonry"
                ? "columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            }`}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={
                  viewMode === "masonry" ? "break-inside-avoid mb-8" : ""
                }
              >
                <GalleryItem
                  item={item}
                  onClick={handleItemClick}
                  variants={scaleIn}
                />
              </div>
            ))}
          </motion.div>

          {/* Empty State */}
          {items.length === 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-elements-primary-bg rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-elements-primary-main"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-3">
                No items found
              </h3>
              <p className="text-text-secondary font-light">
                Try selecting a different category to see more content.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-elements-primary-bg/30 to-elements-secondary-bg/20">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-text-primary mb-6">
              Ready to Create Your Own
              <span className="block font-normal text-elements-primary-main">
                Memorable Moments?
              </span>
            </h2>
            <p className="text-lg text-text-secondary font-light leading-relaxed mb-8">
              Let us help you craft an unforgettable celebration that will be
              remembered for years to come. From intimate gatherings to grand
              events, we'll make it extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-elements-primary-main text-elements-primary-contrastText rounded-2xl font-medium hover:bg-elements-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Planning Your Event
              </button>
              <button className="px-8 py-4 border-2 border-elements-primary-main text-elements-primary-main rounded-2xl font-medium hover:bg-elements-primary-main hover:text-elements-primary-contrastText transition-all duration-300">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <GalleryLightbox
        item={selectedItem}
        isOpen={isLightboxOpen}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}
