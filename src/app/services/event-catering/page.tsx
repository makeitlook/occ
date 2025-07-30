"use client";

import React from "react";
import Hero from "@/components/EventCatering/Hero";
import WhatWeOffer from "@/components/EventCatering/WhatWeOffer";
import KeyFeatures from "@/components/EventCatering/KeyFeatures";
import Venues from "@/components/EventCatering/Venues";
import Testimonials from "@/components/EventCatering/Testimonials";
import CallToAction from "@/components/EventCatering/CallToAction";

const EventCatering = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatWeOffer />
      <KeyFeatures />
      <Venues />
      <Testimonials />
    </div>
  );
};

export default EventCatering;
