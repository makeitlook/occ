"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Personal Touch",
      description:
        "Every event is crafted with individual attention, reflecting your unique story and vision.",
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
      title: "Authentic Excellence",
      description:
        "We honor traditional flavors while embracing modern presentation and dietary preferences.",
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
      title: "Trust & Reliability",
      description:
        "Your special moments deserve unwavering commitment. We deliver on every promise, every time.",
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
          />
        </svg>
      ),
      title: "Creative Innovation",
      description:
        "From intimate gatherings to grand celebrations, we bring fresh ideas and artistic flair.",
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
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      title: "Lasting Memories",
      description:
        "We don't just cater events; we create experiences that you and your guests will treasure forever.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-card-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <SectionHeader
              badge="Our Values"
              title="What Guides"
              subtitle="Us"
              description="These principles shape every decision we make and every service we provide, ensuring your experience with us is nothing short of exceptional."
              alignment="center"
              maxWidth="2xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group text-center"
              >
                <div className="bg-gradient-to-br from-elements-primary-main/5 to-elements-secondary-main/5 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-border-dimmed/20">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed font-light">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValuesSection;
