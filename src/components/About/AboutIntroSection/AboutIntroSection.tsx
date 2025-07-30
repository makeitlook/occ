"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const imageRef = useRef(null);
  const inView = useInView(imageRef, { once: true, amount: 0.2 });

  return (
    <section className="relative py-24 lg:py-48 bg-gradient-to-b from-neutral via-card-background to-neutral overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Text Content */}
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
              className="text-base leading-relaxed text-text-tertiary font-light py-8"
            >
              Our approach is simple: combine traditional flavours with modern
              elegance, delivered with the personal touch that makes each event
              uniquely yours. From intimate gatherings to grand celebrations, we
              bring authenticity and artistry to every plate.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 mt-6"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="text-4xl font-semibold text-elements-primary-main"
              >
                125+
              </motion.span>
              <p className="text-sm text-text-tertiary font-light max-w-xs">
                Events crafted with care, flavour, and unforgettable memories.
              </p>
            </motion.div>
          </div>

          {/* Single Image with Smooth Animation */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/about/intro-main.jpg"
              alt="Elegant dining setup showcasing OCC Events"
              width={700}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
