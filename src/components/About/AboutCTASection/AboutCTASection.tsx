"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import { aboutCTAData } from "@/data";

interface AboutCTASectionProps {
  itemVariants: any;
}

const AboutCTASection: React.FC<AboutCTASectionProps> = ({ itemVariants }) => {
  return (
    <section className="relative py-24 lg:py-40 text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('${aboutCTAData.backgroundImage}')`,
        }}
      >
        {/* Primary colour overlay */}
        <div className="absolute inset-0 bg-elements-primary-main/70 mix-blend-multiply" />
        {/* Optional secondary overlay for soft fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
      </div>

      {/* CTA Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-light leading-tight mb-6">
            {aboutCTAData.heading.preface}{" "}
            <span className="font-serif italic text-white">
              {aboutCTAData.heading.highlight}
            </span>
          </h2>

          <p className="text-lg lg:text-xl font-light opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
            {aboutCTAData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Get Quote
            </Button>

            <Button
              type="hero-secondary"
              href="/gallery"
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
              View Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
