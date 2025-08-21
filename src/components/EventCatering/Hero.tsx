"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";

const Hero: React.FC = () => {
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
    <section className="relative py-24 lg:py-36 bg-gradient-to-br from-neutral-dimmed via-main-background to-neutral overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-24 right-10 w-40 h-40 bg-gradient-to-br from-elements-primary-highlight/20 to-elements-secondary-highlight/20 rounded-full blur-3xl" />
      <div className="absolute bottom-24 left-10 w-32 h-32 bg-gradient-to-tl from-elements-secondary-highlight/20 to-elements-primary-highlight/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-5xl mx-auto text-center"
        >
          <SectionHeader
            badge="Event Catering Services"
            title="Catering for Life's"
            subtitle="Most Memorable Moments"
            description="From intimate gatherings to grand celebrations, we bring authentic flavours and personalised service to make your special day extraordinary."
            alignment="center"
            maxWidth="4xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
          >
            <Button
              type="hero-primary"
              href="/contact"
              extraClassNames="!px-10 !py-4"
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
              Begin Your Journey
            </Button>
            <Button
              type="hero-secondary"
              href="/gallery"
              extraClassNames="!px-10 !py-4 text-text-primary"
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
              View Gallery
            </Button>
          </motion.div>

          {/* Image Collage */}
          <motion.div
            variants={fadeInUp}
            className="mt-20 flex justify-center gap-4 md:gap-8"
          >
            <div className="relative w-36 md:w-48 transform rotate-[-8deg] shadow-xl hover:shadow-elements-primary-main transition duration-500">
              <img
                src="/images/gallery/gallery-1.jpg"
                alt="Event 1"
                className="rounded-2xl"
              />
            </div>
            <div className="relative w-36 md:w-48 transform rotate-[4deg] z-10 shadow-xl hover:shadow-elements-primary-main transition duration-500">
              <img
                src="/images/gallery/gallery-2.jpg"
                alt="Event 2"
                className="rounded-2xl"
              />
            </div>
            <div className="relative w-36 md:w-48 transform rotate-[-6deg] shadow-xl hover:shadow-elements-primary-main transition duration-500">
              <img
                src="/images/gallery/gallery-3.jpg"
                alt="Event 3"
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
