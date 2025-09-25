"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

interface CTAButton {
  label: string;
  href: string;
  type?: string;
  icon?: React.ReactNode;
}

interface CTASectionProps {
  itemVariants?: any;
  backgroundImage: string;
  headingPreface?: string;
  headingHighlight?: string;
  description?: string;
  primaryAction?: CTAButton;
  secondaryAction?: CTAButton;
}

const CTASection: React.FC<CTASectionProps> = ({
  itemVariants,
  backgroundImage,
  headingPreface,
  headingHighlight,
  description,
  primaryAction,
  secondaryAction,
}) => {
  const renderButton = (action: CTAButton, fallbackType: string) => (
    <Button
      type={action.type || fallbackType}
      href={action.href}
      extraClassNames="!px-10 !py-4"
      icon={
        action.icon || (
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
        )
      }
    >
      {action.label}
    </Button>
  );

  return (
    <section className="relative py-24 lg:py-40 text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <div className="absolute inset-0 bg-elements-primary-main/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
          className="text-center"
        >
          {(headingPreface || headingHighlight) && (
            <h2 className="text-3xl lg:text-5xl font-light leading-tight mb-6">
              {headingPreface}{" "}
              {headingHighlight && (
                <span className="font-serif italic text-white">
                  {headingHighlight}
                </span>
              )}
            </h2>
          )}

          {description && (
            <p className="text-lg lg:text-xl font-light opacity-90 max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryAction && renderButton(primaryAction, "hero-primary")}
            {secondaryAction && renderButton(secondaryAction, "hero-secondary")}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

