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
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-orange-100/20 to-amber-100/20 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <SectionHeader
            badge="Event Catering Services"
            title="Catering for Life's"
            subtitle="Most Memorable Moments"
            description="From intimate gatherings to grand celebrations, we bring authentic flavors and professional service to make your special day extraordinary."
            alignment="center"
            maxWidth="4xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          <motion.div variants={fadeInUp} className="mt-8">
            <Button
              type="elegant-primary"
              href="/contact"
              extraClassNames="group"
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
              Get Your Quote Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
