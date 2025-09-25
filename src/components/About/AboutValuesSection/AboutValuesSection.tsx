"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { aboutValuesData } from "@/data";

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
  const values: Value[] = aboutValuesData.values;

  return (
    <section className="relative py-24 bg-gradient-to-b from-card-background via-neutral/20 to-card-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="space-y-24"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants}>
            <SectionHeader
              badge={aboutValuesData.header.badge}
              title={aboutValuesData.header.title}
              subtitle={aboutValuesData.header.subtitle}
              description={aboutValuesData.header.description}
              alignment="left"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Values Grid */}
          <div className="mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative h-full bg-gradient-to-b from-neutral/10 to-card-background p-5 hover:bg-gradient-to-b hover:from-elements-primary-main/3 hover:via-card-background/20 hover:to-transparent transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-elements-primary-main/5">
                    {/* Number */}
                    <div className="mb-8">
                      <span className="text-6xl lg:text-7xl font-extralight text-elements-primary-main/20 group-hover:text-elements-primary-main/40 transition-all duration-700 tracking-tight">
                        {value.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <h3 className="text-xl lg:text-2xl font-light text-text-primary group-hover:text-elements-primary-main transition-colors duration-500 leading-tight">
                        {value.title}
                      </h3>

                      <div className="w-12 h-px bg-gradient-to-r from-elements-primary-main/30 to-transparent group-hover:from-elements-primary-main/60 group-hover:w-16 transition-all duration-500" />

                      <div className="inline-flex items-center">
                        <div className="w-1.5 h-1.5 bg-elements-primary-main/60 rounded-full mr-3 group-hover:bg-elements-primary-main transition-colors duration-300" />
                        <span className="text-xs font-medium text-elements-primary-main/80 uppercase tracking-widest">
                          {value.highlight}
                        </span>
                      </div>

                      <p className="text-sm lg:text-base text-text-tertiary leading-relaxed font-light group-hover:text-text-secondary transition-colors duration-500">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom Glow Line */}
                    <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-elements-primary-main to-transparent group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Horizontal Connector */}
                  {index < values.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 items-center z-10">
                      <div className="w-8 h-px bg-gradient-to-r from-border-dimmed/20 via-elements-primary-main/10 to-transparent" />
                      <div className="w-1 h-1 bg-elements-primary-main/20 rounded-full ml-2" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-elements-primary-main/50 to-transparent" />
              <p className="text-xl lg:text-2xl font-light text-text-primary leading-relaxed">
                These values aren’t just words—they’re the foundation of every
                dish we prepare, every event we craft, and every relationship we
                build.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
