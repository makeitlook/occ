"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface AboutIntroSectionProps {
  containerVariants: any;
  itemVariants: any;
  imageVariants: any;
}

const AboutIntroSection: React.FC<AboutIntroSectionProps> = ({
  containerVariants,
  itemVariants,
  imageVariants,
}) => {
  return (
    <section className="relative py-20 lg:py-48 bg-gradient-to-b from-neutral via-card-background to-neutral overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
        >
          {/* Text Content - Left Side */}
          <div>
            <SectionHeader
              badge="About The OCC"
              title="Crafting Moments"
              subtitle="Creating Memories"
              description="At The OCC Events and Catering, we believe every celebration deserves to be extraordinary. Born from a passion for authentic Indian and Afghan cuisine, we've grown into a trusted partner for life's most meaningful moments."
              alignment="left"
              maxWidth="full"
              showDecorator={true}
              itemVariants={itemVariants}
            />

            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-text-tertiary font-light mb-8"
            >
              Our approach is simple: combine traditional flavors with modern
              elegance, delivered with the personal touch that makes each event
              uniquely yours. From intimate gatherings to grand celebrations, we
              bring authenticity and artistry to every plate.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-elements-primary-main/20 rounded-full border-2 border-card-background"></div>
                <div className="w-10 h-10 bg-elements-secondary-main/20 rounded-full border-2 border-card-background"></div>
                <div className="w-10 h-10 bg-elements-primary-main/30 rounded-full border-2 border-card-background"></div>
              </div>
              <p className="text-sm text-text-tertiary font-light">
                Trusted by families and businesses across the region
              </p>
            </motion.div>
          </div>

          {/* Images - Right Side */}
          <motion.div variants={imageVariants} className="space-y-6">
            {/* First Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/intro-main.jpg"
                alt="Elegant dining setup showcasing OCC Events culinary artistry"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Second Image */}
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/intro-secondary.jpg"
                alt="Traditional spices and cooking preparation"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
