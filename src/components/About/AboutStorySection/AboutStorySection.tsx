"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface AboutStorySectionProps {
  containerVariants: any;
  itemVariants: any;
}

const AboutStorySection: React.FC<AboutStorySectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-card-background via-neutral/5 to-card-background overflow-hidden">
      {/* Modern geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-1/4 w-px h-32 bg-gradient-to-b from-elements-primary-main/20 to-transparent rotate-12" />
        <div className="absolute bottom-32 left-1/4 w-px h-24 bg-gradient-to-t from-elements-secondary-main/15 to-transparent -rotate-12" />
        <div className="absolute top-1/2 right-8 w-2 h-2 bg-elements-primary-main/30 rounded-full" />
        <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-elements-secondary-main/40 rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Modern Header Layout */}
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

          {/* Story Grid - Clean Layout Without Cards */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Main Story Content */}
            <div className="lg:col-span-7 space-y-10">
              {/* Story Timeline */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-elements-primary-main rounded-full mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-text-primary mb-4">
                      2016 • The Beginning
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-light text-lg">
                      The OCC began with a simple dream: to share the rich
                      culinary traditions of India and Afghanistan with our
                      community. What started as intimate gatherings for friends
                      and family has blossomed into something extraordinary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-elements-secondary-main rounded-full mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-text-primary mb-4">
                      The Foundation
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-light text-lg">
                      Our founder, Amara Singh, grew up surrounded by aromatic
                      spices and time-honored recipes passed down through
                      generations. She recognized that food is more than
                      sustenance—it's the heart of every celebration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-elements-primary-main rounded-full mt-1" />
                  <div>
                    <h3 className="text-xl font-medium text-text-primary mb-4">
                      Today • Our Promise
                    </h3>
                    <p className="text-text-secondary leading-relaxed font-light text-lg">
                      We're proud to be the trusted choice for celebrations
                      throughout the region. While we've grown, our commitment
                      remains unchanged: every dish is prepared with love, every
                      event is planned with care.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Row - Simple Layout */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border-dimmed/20">
                <div className="text-center">
                  <p className="text-3xl font-light text-elements-primary-main mb-2">
                    500+
                  </p>
                  <p className="text-sm text-text-tertiary uppercase tracking-wide">
                    Events
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-elements-primary-main mb-2">
                    8+
                  </p>
                  <p className="text-sm text-text-tertiary uppercase tracking-wide">
                    Years
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-light text-elements-primary-main mb-2">
                    98%
                  </p>
                  <p className="text-sm text-text-tertiary uppercase tracking-wide">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Quote & Image */}
            <div className="lg:col-span-5 space-y-12">
              {/* Quote Section - No Card */}
              <motion.div variants={itemVariants} className="relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-elements-primary-main/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-elements-primary-main"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <blockquote className="text-2xl font-light text-text-primary leading-relaxed mb-8 italic pl-8">
                  "Every spice tells a story, every dish carries tradition, and
                  every event we cater becomes a bridge between cultures and
                  hearts."
                </blockquote>

                {/* Author */}
                <div className="pl-8 flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-elements-primary-main/20 to-elements-secondary-main/20 rounded-full"></div>
                  <div>
                    <p className="text-lg font-medium text-text-primary">
                      Amara Singh
                    </p>
                    <p className="text-text-tertiary">
                      Founder & Executive Chef
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Image - Clean Layout */}
              <motion.div
                variants={itemVariants}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/about/story-image.jpg"
                  alt="Traditional spices and ingredients"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                {/* Simple Image Caption */}
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-medium mb-1">Authentic Spices</p>
                  <p className="text-xs opacity-80">
                    Hand-selected ingredients from traditional sources
                  </p>
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
