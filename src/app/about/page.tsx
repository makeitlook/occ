"use client";

import React from "react";
import AboutIntroSection from "@/components/About/AboutIntroSection/AboutIntroSection";
import AboutStorySection from "@/components/About/AboutStorySection/AboutStorySection";
import AboutTeamSection from "@/components/About/AboutTeamSection/AboutTeamSection";
import AboutValuesSection from "@/components/About/AboutValuesSection/AboutValuesSection";
import AboutWhyChooseSection from "@/components/About/AboutWhyChooseSection/AboutWhyChooseSection";
import CTASection from "@/components/CTASection/CTASection";
import { aboutCTAData } from "@/data";

const AboutPage: React.FC = () => {
  // Animation variants - shared across components
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <div className="min-h-screen bg-card-background">
      {/* Intro Section with Two Photos */}
      <AboutIntroSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        imageVariants={imageVariants}
      />

      {/* Our Story Section */}
      <AboutStorySection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Meet the Team Section */}
      <AboutTeamSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Our Values Section */}
      <AboutValuesSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Why Clients Choose Us Section */}
      <AboutWhyChooseSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Call to Action Section */}
      <CTASection
        itemVariants={itemVariants}
        backgroundImage={aboutCTAData.backgroundImage}
        headingPreface={aboutCTAData.heading.preface}
        headingHighlight={aboutCTAData.heading.highlight}
        description={aboutCTAData.description}
        primaryAction={aboutCTAData.primaryAction}
        secondaryAction={aboutCTAData.secondaryAction}
      />
    </div>
  );
};

export default AboutPage;
