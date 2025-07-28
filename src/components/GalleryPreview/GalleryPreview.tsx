"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button/Button";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

// Curated gallery showcasing different aspects of luxury catering
const galleryImages = [
  {
    id: 1,
    src: "/images/gallery/summer-garden-party.jpg",
    alt: "Elegant outdoor summer garden party setup",
    caption: "Summer Garden Party",
    description: "Al fresco dining under the stars",
    layout: "hero", // Large featured image
  },
  {
    id: 2,
    src: "/images/gallery/intimate-dinner.jpg",
    alt: "Intimate candlelit dinner for two",
    caption: "Intimate Evening",
    description: "Romance in every detail",
    layout: "portrait",
  },
  {
    id: 3,
    src: "/images/gallery/culinary-artistry.jpg",
    alt: "Exquisite plated dish presentation",
    caption: "Culinary Artistry",
    description: "Where flavors meet beauty",
    layout: "square",
  },
  {
    id: 4,
    src: "/images/gallery/corporate-elegance.jpg",
    alt: "Sophisticated corporate event setup",
    caption: "Corporate Elegance",
    description: "Professional dining refined",
    layout: "landscape",
  },
  {
    id: 5,
    src: "/images/gallery/wedding-celebration.jpg",
    alt: "Beautiful wedding reception table",
    caption: "Wedding Celebration",
    description: "Love served with perfection",
    layout: "portrait",
  },
  {
    id: 6,
    src: "/images/gallery/festive-gathering.jpg",
    alt: "Festive holiday gathering setup",
    caption: "Festive Gathering",
    description: "Traditions beautifully honored",
    layout: "square",
  },
];

const GalleryPreview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-card-background via-neutral/10 to-card-background overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-elements-primary-main/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-elements-secondary-main/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-20"
        >
          {/* Editorial Header */}
          <SectionHeader
            badge="Visual Stories"
            title="Moments that"
            subtitle="Matter Most"
            description="Every celebration tells a unique story. Through carefully curated visuals, we invite you to explore the artistry behind our culinary experiences—where every detail reflects our commitment to creating extraordinary moments."
            alignment="center"
            maxWidth="4xl"
            showDecorator={true}
            itemVariants={itemVariants}
          />

          {/* Magazine-Style Gallery Grid */}
          <motion.div variants={containerVariants} className="space-y-8">
            {/* First Row - Hero Image + Two Smaller */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Hero Image */}
              <motion.div
                variants={imageVariants}
                className="lg:col-span-2 group cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <Image
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    fill
                    className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />

                  {/* Soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/80 text-sm font-light tracking-wide mb-2 uppercase">
                        {galleryImages[0].description}
                      </p>
                      <h3 className="text-white text-2xl lg:text-3xl font-light tracking-wide">
                        {galleryImages[0].caption}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Two smaller images */}
              <div className="space-y-6 lg:space-y-8">
                {galleryImages.slice(1, 3).map((image, index) => (
                  <motion.div
                    key={image.id}
                    variants={imageVariants}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white/80 text-xs font-light tracking-wide mb-1 uppercase">
                            {image.description}
                          </p>
                          <h3 className="text-white text-lg font-light tracking-wide">
                            {image.caption}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Second Row - Three Equal Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {galleryImages.slice(3, 6).map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={imageVariants}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:blur-[1px]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/80 text-xs font-light tracking-wide mb-1 uppercase">
                          {image.description}
                        </p>
                        <h3 className="text-white text-lg font-light tracking-wide">
                          {image.caption}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Editorial Call-to-Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-8 pt-8"
          >
            <div className="space-y-6">
              <p className="text-text-tertiary font-light text-sm tracking-wide uppercase">
                Discover More
              </p>

              <Button
                type="elegant-secondary"
                href="/gallery"
                extraClassNames="group !px-12 !py-4"
                icon={
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                }
              >
                See More Moments
              </Button>
            </div>

            {/* Subtle footer text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              className="pt-6 border-t border-border-dimmed/20 max-w-2xl mx-auto"
            >
              <p className="text-text-tertiary font-light text-sm leading-relaxed">
                Each image represents a carefully crafted experience, where
                culinary excellence meets thoughtful design. View our complete
                portfolio to see how we bring your vision to life.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
