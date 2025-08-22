// PartneredVenues.tsx (Final with Modal)
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import VenueGrid from "@/components/PartneredVenues/VenueGrid";
import CTASection from "@/components/CTASection/CTASection";
import VenueModal from "@/components/PartneredVenues/VenueModal";
import { venues, venuesCTAData } from "@/data";
import { Venue } from "@/types/venue";

export default function PartneredVenues() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (venue: Venue) => {
    setSelectedVenue(venue);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedVenue to allow exit animation
    setTimeout(() => setSelectedVenue(null), 300);
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
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
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
              badge="Partnered Venues"
              title="Exceptional Locations"
              subtitle="For Unforgettable Events"
              description="Discover our carefully curated collection of premium venues, each selected for their unique character, impeccable service, and ability to create magical moments."
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />
          </motion.div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-24 bg-card-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <VenueGrid
              venues={venues}
              variants={staggerContainer}
              itemVariants={scaleIn}
              onCardClick={handleCardClick}
            />

            <CTASection
              itemVariants={fadeInUp}
              backgroundImage={venuesCTAData.backgroundImage}
              headingPreface={venuesCTAData.heading.preface}
              headingHighlight={venuesCTAData.heading.highlight}
              description={venuesCTAData.description}
              primaryAction={venuesCTAData.primaryAction}
            />
          </motion.div>
        </div>
      </section>

      {/* Venue Modal */}
      <VenueModal
        venue={selectedVenue}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}
