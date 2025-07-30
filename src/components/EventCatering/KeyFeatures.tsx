"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const KeyFeatures: React.FC = () => {
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

  const keyFeatures = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-elements-primary-main"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Custom Menus",
      description:
        "Bespoke menus tailored to your preferences, dietary requirements, and cultural traditions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-elements-primary-main"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Expert Chefs",
      description:
        "Skilled culinary professionals who bring restaurant-quality cooking to your venue.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-elements-primary-main"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: "Elegant Presentation",
      description:
        "Beautiful plating and styling that makes every dish a visual masterpiece.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-elements-primary-main"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Reliable Service",
      description:
        "Professional, punctual service that lets you enjoy your event worry-free.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-neutral-dimmed via-main-background to-neutral overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-elements-primary-highlight/20 to-elements-secondary-highlight/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-tl from-elements-secondary-highlight/15 to-elements-primary-light/15 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            badge="Our Excellence"
            title="Why Choose"
            subtitle="The OCC"
            description="Four pillars of excellence that make every event exceptional"
            alignment="center"
            maxWidth="3xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mt-16 lg:mt-24"
          >
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative text-center"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-elements-primary-bg/30 to-elements-secondary-highlight/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 backdrop-blur-sm border border-elements-secondary-highlight/20">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-light text-text-primary group-hover:text-elements-primary-main transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-elements-secondary-main to-transparent mx-auto opacity-60"></div>
                  <p className="text-text-secondary leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
