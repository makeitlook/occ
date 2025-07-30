"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { whyChoose } from "@/data/about";

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
          1,
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

  const trustPoints = whyChoose.trustPoints;

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral/10 via-card-background to-neutral/10 overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-px h-40 bg-gradient-to-b from-elements-primary-main/15 to-transparent rotate-12" />
        <div className="absolute bottom-1/3 left-1/4 w-px h-32 bg-gradient-to-t from-elements-secondary-main/12 to-transparent -rotate-12" />
        <div className="absolute top-1/2 right-16 w-2 h-2 bg-elements-primary-main/20 rounded-full" />
        <div className="absolute bottom-1/4 left-20 w-1 h-1 bg-elements-secondary-main/30 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <SectionHeader
              badge={whyChoose.header.badge}
              title={whyChoose.header.title}
              subtitle={whyChoose.header.subtitle}
              description={whyChoose.header.description}
              alignment="left"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Stats - Elegant Minimal Layout */}
          <motion.div variants={containerVariants} className="relative">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
              <motion.div
                ref={eventsRef}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <span className="text-5xl lg:text-6xl font-extralight text-elements-primary-main group-hover:scale-110 transition-transform duration-500 block">
                      {eventsCount}+
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-elements-primary-main group-hover:w-full transition-all duration-700" />
                  </div>
                  <p className="text-text-tertiary font-light uppercase tracking-widest text-sm">
                    Events Celebrated
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={clientsRef}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <span className="text-5xl lg:text-6xl font-extralight text-elements-primary-main group-hover:scale-110 transition-transform duration-500 block">
                      {clientsCount}%
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-elements-primary-main group-hover:w-full transition-all duration-700" />
                  </div>
                  <p className="text-text-tertiary font-light uppercase tracking-widest text-sm">
                    Client Retention
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={yearsRef}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <span className="text-5xl lg:text-6xl font-extralight text-elements-primary-main group-hover:scale-110 transition-transform duration-500 block">
                      {yearsCount}+
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-elements-primary-main group-hover:w-full transition-all duration-700" />
                  </div>
                  <p className="text-text-tertiary font-light uppercase tracking-widest text-sm">
                    Years Excellence
                  </p>
                </div>
              </motion.div>

              <motion.div
                ref={specialtiesRef}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="space-y-4">
                  <div className="relative">
                    <span className="text-5xl lg:text-6xl font-extralight text-elements-primary-main group-hover:scale-110 transition-transform duration-500 block">
                      {specialtiesCount}+
                    </span>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-px bg-elements-primary-main group-hover:w-full transition-all duration-700" />
                  </div>
                  <p className="text-text-tertiary font-light uppercase tracking-widest text-sm">
                    Cuisine Specialties
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border-dimmed/20 to-transparent" />
          </motion.div>

          {/* Trust Points - Horizontal Layout */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col lg:flex-row justify-between gap-12 max-w-6xl mx-auto pt-8 border-t border-border-dimmed/10"
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group flex-1 flex items-start gap-6 border-b lg:border-b-0 lg:border-r last:border-r-0 border-border-dimmed/10 pb-8 lg:pb-0 lg:pr-8"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-2xl flex items-center justify-center">
                  {point.icon}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-text-primary group-hover:text-elements-primary-main transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-text-secondary font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Statement */}
          <motion.div variants={itemVariants} className="text-center pt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-elements-primary-main/50 to-transparent mx-auto" />
              <p className="text-xl lg:text-2xl font-light text-text-primary leading-relaxed">
                {whyChoose.bottomText}
              </p>
              <div className="inline-flex items-center space-x-3">
                <div className="w-2 h-2 bg-elements-primary-main/40 rounded-full" />
                <span className="text-sm text-elements-primary-main font-medium uppercase tracking-widest">
                  Excellence Delivered
                </span>
                <div className="w-2 h-2 bg-elements-primary-main/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWhyChooseSection;
