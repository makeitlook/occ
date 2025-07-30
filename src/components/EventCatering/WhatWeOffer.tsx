"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const WhatWeOffer: React.FC = () => {
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

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          <SectionHeader
            badge="What We Offer"
            title="Bringing Authentic Flavors"
            subtitle="to Every Occasion"
            description=""
            alignment="center"
            maxWidth="4xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          <motion.div
            variants={fadeInUp}
            className="space-y-6 text-lg text-gray-600 leading-relaxed font-light"
          >
            <p>
              The OCC Events & Catering specializes in creating unforgettable
              dining experiences for weddings, engagements, corporate events,
              and private celebrations. Our passion for authentic Indian and
              Afghan cuisine, combined with modern presentation and
              professional service, ensures your event is truly special.
            </p>

            <p>
              Every menu is personally crafted to reflect your vision, dietary
              preferences, and cultural traditions. From intimate family
              gatherings to grand celebrations, we bring the same level of
              care and attention to detail that has made us the trusted choice
              for discerning hosts across the region.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
