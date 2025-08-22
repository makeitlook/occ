"use client";

import React from "react";
import Hero from "@/components/EventCatering/Hero";
import WhatWeOffer from "@/components/EventCatering/WhatWeOffer";
import KeyFeatures from "@/components/EventCatering/KeyFeatures";
import Venues from "@/components/EventCatering/Venues";
import Testimonials from "@/components/EventCatering/Testimonials";
import CTASection from "@/components/CTASection/CTASection";
import { eventCateringCTAData } from "@/data";

const EventCatering = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeOffer />
      <KeyFeatures />
      <Venues />
      <Testimonials />
      <CTASection
        itemVariants={fadeInUp}
        backgroundImage={eventCateringCTAData.backgroundImage}
        headingPreface={eventCateringCTAData.heading.preface}
        headingHighlight={eventCateringCTAData.heading.highlight}
        description={eventCateringCTAData.description}
        primaryAction={eventCateringCTAData.primaryAction}
        secondaryAction={eventCateringCTAData.secondaryAction}
      />
    </div>
  );
};

export default EventCatering;
