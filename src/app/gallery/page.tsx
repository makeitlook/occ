"use client";

// Gallery.tsx (Main Gallery Page)
import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import GalleryItem from "@/components/Gallery/GalleryItem";
import GalleryLightbox from "@/components/Gallery/GalleryLightbox";
import CTASection from "@/components/CTASection/CTASection";
import { galleryCTAData } from "@/data";
import { useGalleryData } from "@/hooks/useGalleryData";
import { GalleryItem as GalleryItemType } from "@/types/gallery";

export default function Gallery() {
  const { items } = useGalleryData();

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

      {/* Gallery Grid */}
      <section className="py-24 bg-card-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {items.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={handleItemClick}
                variants={scaleIn}
              />
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
                Please check back later for more gallery content.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <CTASection
        itemVariants={fadeInUp}
        backgroundImage={galleryCTAData.backgroundImage}
        headingPreface={galleryCTAData.heading.preface}
        headingHighlight={galleryCTAData.heading.highlight}
        description={galleryCTAData.description}
        primaryAction={galleryCTAData.primaryAction}
        secondaryAction={galleryCTAData.secondaryAction}
      />

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
