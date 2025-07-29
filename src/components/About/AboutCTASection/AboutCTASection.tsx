"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

interface AboutCTASectionProps {
  itemVariants: any;
}

const AboutCTASection: React.FC<AboutCTASectionProps> = ({ itemVariants }) => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center text-white"
        >
          <h2 className="text-3xl lg:text-4xl font-light mb-6 leading-tight">
            Ready to Create Your{" "}
            <span className="font-serif italic">Perfect Event?</span>
          </h2>
          <p className="text-xl font-light mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your vision and bring it to life with our signature
            blend of authentic flavors and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="elegant-secondary"
              href="/contact"
              extraClassNames="group bg-white text-elements-primary-main hover:bg-neutral-50"
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
              Get Your Quote
            </Button>
            <Button
              type="elegant-outline"
              href="/gallery"
              extraClassNames="border-white text-white hover:bg-white hover:text-elements-primary-main"
            >
              View Our Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
