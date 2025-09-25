"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { aboutStoryData } from "@/data";

interface AboutStorySectionProps {
  containerVariants: any;
  itemVariants: any;
}

const AboutStorySection: React.FC<AboutStorySectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-card-background via-neutral/5 to-card-background overflow-hidden">
      {/* Background flourishes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-1/4 w-px h-32 bg-elements-primary-main/20 rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-px h-24 bg-elements-secondary-main/15 -rotate-12" />
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-elements-primary-main/30 rounded-full" />
        <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-elements-secondary-main/40 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-24"
        >
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto">
            <SectionHeader
              badge="Our Journey"
              title="From Humble Beginnings"
              subtitle="to Culinary Excellence"
              description="Discover the passion and purpose that drives every dish we create and every celebration we craft."
              alignment="center"
              maxWidth="3xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Timeline + Stats */}
            <div className="lg:col-span-7 space-y-16">
              <div className="space-y-12">
                {/* Timeline Item */}
                {aboutStoryData.timeline.map(({ date, text, color }, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-5"
                  >
                    <div className={`w-3 h-3 rounded-full mt-2 ${color}`} />
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-3">
                        {date}
                      </h3>
                      <p className="text-lg text-text-secondary font-light leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border-dimmed/20">
                {aboutStoryData.stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <p className="text-3xl font-light text-elements-primary-main mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-text-tertiary uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image + Quote */}
            <div className="lg:col-span-5 space-y-12">
              {/* Image */}
              <motion.div
                variants={itemVariants}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={aboutStoryData.image.src}
                  alt={aboutStoryData.image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-semibold mb-1">Authentic Spices</p>
                  <p className="text-xs opacity-80">
                    Hand-selected ingredients from traditional sources
                  </p>
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                variants={itemVariants}
                className="relative pl-8 border-l-4 border-elements-primary-main/50"
              >
                <blockquote className="text-xl italic text-text-primary font-light leading-relaxed mb-4">
                  {aboutStoryData.quote}
                </blockquote>
                <div className="flex items-center space-x-4 mt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-elements-primary-main/20 to-elements-secondary-main/20 rounded-full" />
                  <div>
                    <p className="text-base font-medium text-text-primary">
                      {aboutStoryData.author}
                    </p>
                    <p className="text-sm text-text-tertiary">
                      {aboutStoryData.authorTitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStorySection;
