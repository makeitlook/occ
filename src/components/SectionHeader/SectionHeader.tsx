"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "full";
  showDecorator?: boolean;
  itemVariants?: any;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  description,
  alignment = "center",
  maxWidth = "4xl",
  showDecorator = true,
  itemVariants,
  className = "",
}) => {
  const defaultItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const variants = itemVariants || defaultItemVariants;

  const getAlignmentClasses = () => {
    switch (alignment) {
      case "left":
        return {
          container: "text-left",
          badge: "",
          decorator: "justify-start",
          description: "",
        };
      case "right":
        return {
          container: "text-right",
          badge: "",
          decorator: "justify-end",
          description: "ml-auto",
        };
      case "center":
      default:
        return {
          container: "text-center",
          badge: "",
          decorator: "justify-center",
          description: "mx-auto",
        };
    }
  };

  const getMaxWidthClass = () => {
    const widthMap = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      full: "max-w-full",
    };
    return widthMap[maxWidth];
  };

  const alignmentClasses = getAlignmentClasses();
  const maxWidthClass = getMaxWidthClass();

  return (
    <div
      className={`${maxWidthClass} ${alignment === "center" ? "mx-auto" : ""} ${
        alignmentClasses.container
      } space-y-8 ${className}`}
    >
      {/* Badge */}
      {badge && (
        <motion.div variants={variants}>
          <span
            className={`inline-block px-6 py-3 rounded-sm bg-elements-primary-main/20 border border-elements-primary-main/25 text-elements-primary-main text-sm font-light tracking-[0.2em] uppercase ${alignmentClasses.badge}`}
          >
            {badge}
          </span>
        </motion.div>
      )}

      {/* Title and Subtitle */}
      <motion.div variants={variants} className="space-y-6">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-wide text-text-primary leading-[1.1]">
          {subtitle ? (
            <>
              {title}
              <span className="block font-serif italic text-elements-primary-main font-light">
                {subtitle}
              </span>
            </>
          ) : (
            title
          )}
        </h2>

        {/* Decorative Line */}
        {showDecorator && (
          <div className={`flex ${alignmentClasses.decorator}`}>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-elements-primary-main to-transparent" />
          </div>
        )}
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          variants={variants}
          className={`text-lg lg:text-xl leading-relaxed text-text-secondary font-light max-w-3xl tracking-wide ${alignmentClasses.description}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
