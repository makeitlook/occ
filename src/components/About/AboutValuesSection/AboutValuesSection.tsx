"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface Value {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

interface AboutValuesSectionProps {
  containerVariants: any;
  itemVariants: any;
}

const AboutValuesSection: React.FC<AboutValuesSectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  const values: Value[] = [
    {
      number: "01",
      title: "Personal Touch",
      description:
        "Every event is crafted with individual attention, reflecting your unique story and vision. We believe in creating intimate connections through exceptional culinary experiences.",
      highlight: "Individual Attention",
    },
    {
      number: "02",
      title: "Authentic Excellence",
      description:
        "We honor traditional flavors while embracing modern presentation and dietary preferences. Our heritage recipes meet contemporary sophistication.",
      highlight: "Traditional Heritage",
    },
    {
      number: "03",
      title: "Trust & Reliability",
      description:
        "Your special moments deserve unwavering commitment. We deliver on every promise, every time, ensuring peace of mind throughout your celebration.",
      highlight: "Unwavering Commitment",
    },
    {
      number: "04",
      title: "Creative Innovation",
      description:
        "From intimate gatherings to grand celebrations, we bring fresh ideas and artistic flair to every plate and presentation.",
      highlight: "Fresh Ideas",
    },
    {
      number: "05",
      title: "Lasting Memories",
      description:
        "We don't just cater events; we create experiences that you and your guests will treasure forever. Every detail contributes to unforgettable moments.",
      highlight: "Unforgettable Moments",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-card-background via-neutral/10 to-card-background overflow-hidden">
      {/* Modern geometric background */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-elements-primary-main/20 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-px h-24 bg-gradient-to-t from-elements-secondary-main/15 to-transparent -rotate-45" />
        <div className="absolute top-1/2 right-12 w-2 h-2 bg-elements-primary-main/30 rounded-full" />
        <div className="absolute bottom-1/4 left-16 w-1 h-1 bg-elements-secondary-main/40 rounded-full" />
      </div> */}

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <SectionHeader
              badge="Our Values"
              title="Principles That"
              subtitle="Define Excellence"
              description="Five core values that guide every decision we make and every service we provide, ensuring your experience with us is nothing short of exceptional."
              alignment="left"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Values Row - Elegant Modern Layout */}
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  {/* Elegant Value Card */}
                  <div className="relative h-full bg-gradient-to-b from-card-background/30 via-card-background/10 to-transparent backdrop-blur-xl border border-border-dimmed/5 rounded-3xl p-4  hover:bg-gradient-to-b hover:from-elements-primary-main/3 hover:via-card-background/20 hover:to-transparent transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-elements-primary-main/5">
                    {/* Elegant Number */}
                    <div className="mb-8">
                      <span className="text-6xl lg:text-7xl font-extralight text-elements-primary-main/20 group-hover:text-elements-primary-main/40 transition-all duration-700 tracking-tight">
                        {value.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      {/* Title with refined typography */}
                      <h3 className="text-xl lg:text-2xl font-light text-text-primary group-hover:text-elements-primary-main transition-colors duration-500 leading-tight">
                        {value.title}
                      </h3>

                      {/* Elegant separator */}
                      <div className="w-12 h-px bg-gradient-to-r from-elements-primary-main/30 to-transparent group-hover:from-elements-primary-main/60 group-hover:w-16 transition-all duration-500" />

                      {/* Refined highlight */}
                      <div className="inline-flex items-center">
                        <div className="w-1.5 h-1.5 bg-elements-primary-main/60 rounded-full mr-3 group-hover:bg-elements-primary-main transition-colors duration-300" />
                        <span className="text-xs font-medium text-elements-primary-main/80 uppercase tracking-widest">
                          {value.highlight}
                        </span>
                      </div>

                      {/* Refined description */}
                      <p className="text-sm lg:text-base text-text-tertiary leading-relaxed font-light group-hover:text-text-secondary transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom glow effect */}
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-elements-primary-main to-transparent group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Refined connecting element */}
                  {index < values.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 items-center z-10">
                      <div className="w-8 h-px bg-gradient-to-r from-border-dimmed/20 via-elements-primary-main/10 to-transparent" />
                      <div className="w-1 h-1 bg-elements-primary-main/20 rounded-full ml-2" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Elegant bottom flourish */}
            {/* <motion.div
              variants={itemVariants}
              className="flex justify-center mt-16 pt-12 border-t border-gradient-to-r from-transparent via-border-dimmed/10 to-transparent"
            >
              <div className="flex items-center space-x-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-elements-primary-main/30" />
                <div className="w-2 h-2 bg-elements-primary-main/30 rounded-full" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-elements-primary-main/30" />
              </div>
            </motion.div> */}
          </div>

          {/* Bottom Statement */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-elements-primary-main/50 to-transparent" />
              <p className="text-xl lg:text-2xl font-light text-text-primary leading-relaxed">
                These values aren't just words on a page—they're the foundation
                of every dish we prepare, every event we craft, and every
                relationship we build.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
