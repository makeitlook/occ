"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

// Counter animation hook
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const animateCount = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration, hasAnimated]);

  return { count, ref };
};

interface AboutWhyChooseSectionProps {
  containerVariants: any;
  itemVariants: any;
}

const AboutWhyChooseSection: React.FC<AboutWhyChooseSectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  // Counter hooks for stats
  const { count: eventsCount, ref: eventsRef } = useCounter(500, 2.5);
  const { count: clientsCount, ref: clientsRef } = useCounter(98, 3);
  const { count: yearsCount, ref: yearsRef } = useCounter(8, 2);
  const { count: specialtiesCount, ref: specialtiesRef } = useCounter(15, 2);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral/15 via-card-background to-elements-primary-main/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-elements-primary-main/4 to-elements-secondary-main/4 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionHeader
              badge="Why Choose Us"
              title="Trusted by Hundreds"
              subtitle="of Clients"
              description="Our track record speaks for itself. Here's what sets us apart and why clients return to us for their most important celebrations."
              alignment="center"
              maxWidth="2xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <div ref={eventsRef} className="text-center">
              <div className="bg-card-background/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border-dimmed/20 hover:shadow-xl transition-shadow duration-300">
                <p className="text-3xl lg:text-4xl font-light text-elements-primary-main mb-2">
                  {eventsCount}+
                </p>
                <p className="text-text-tertiary font-light">
                  Events Celebrated
                </p>
              </div>
            </div>

            <div ref={clientsRef} className="text-center">
              <div className="bg-card-background/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border-dimmed/20 hover:shadow-xl transition-shadow duration-300">
                <p className="text-3xl lg:text-4xl font-light text-elements-primary-main mb-2">
                  {clientsCount}%
                </p>
                <p className="text-text-tertiary font-light">
                  Client Retention
                </p>
              </div>
            </div>

            <div ref={yearsRef} className="text-center">
              <div className="bg-card-background/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border-dimmed/20 hover:shadow-xl transition-shadow duration-300">
                <p className="text-3xl lg:text-4xl font-light text-elements-primary-main mb-2">
                  {yearsCount}+
                </p>
                <p className="text-text-tertiary font-light">
                  Years Excellence
                </p>
              </div>
            </div>

            <div ref={specialtiesRef} className="text-center">
              <div className="bg-card-background/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-border-dimmed/20 hover:shadow-xl transition-shadow duration-300">
                <p className="text-3xl lg:text-4xl font-light text-elements-primary-main mb-2">
                  {specialtiesCount}+
                </p>
                <p className="text-text-tertiary font-light">
                  Cuisine Specialties
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Statements */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-card-background/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-border-dimmed/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-elements-primary-main"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-4">
                Award-Winning Service
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                Recognized for excellence in catering and event management by
                industry professionals and clients alike.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card-background/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-border-dimmed/20"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-elements-primary-main"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-4">
                98% Client Retention
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                Our clients don't just book us once—they become part of our
                family and return for every celebration.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-card-background/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-border-dimmed/20 md:col-span-2 lg:col-span-1"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-elements-primary-main"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-text-primary mb-4">
                Bespoke Everything
              </h3>
              <p className="text-text-secondary font-light leading-relaxed">
                No two events are the same. We customize every detail to reflect
                your unique vision and preferences.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhyChooseSection;
