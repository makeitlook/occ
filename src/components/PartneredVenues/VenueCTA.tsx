// components/VenueCTA/VenueCTA.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

interface VenueCTAProps {
  variants?: any;
}

const VenueCTA: React.FC<VenueCTAProps> = ({ variants }) => {
  return (
    <motion.div variants={variants} className="text-center mt-20">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-light text-text-primary mb-4">
          Need Help Finding the Perfect Venue?
        </h3>
        <p className="text-text-secondary mb-8 leading-relaxed font-light">
          Our venue specialists can help you discover unique locations that
          perfectly match your vision and requirements.
        </p>
        <Button
          type="elegant-secondary"
          href="/contact"
          extraClassNames="group !px-8 !py-4"
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
          Request Venue Consultation
        </Button>
      </div>
    </motion.div>
  );
};

export default VenueCTA;
