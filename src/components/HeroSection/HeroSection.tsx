"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source src="/hero.webm" type="video/webm" />
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="relative mx-auto max-w-4xl text-center w-full">
          {/* Subtitle badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-8"
          >
            <span className="inline-block px-3 py-1 sm:px-6 sm:py-2 rounded-sm bg-border-white/10 backdrop-blur-md border border-border-white/20 text-white text-xs sm:text-sm font-light tracking-widest uppercase">
              Premium Catering
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-white mb-4 sm:mb-8 leading-tight px-2"
          >
            Big Enough to Deliver
            <br />
            <span className="font-serif italic bg-gradient-to-r from-elements-primary-main to-elements-secondary-main bg-clip-text text-transparent">
              Small Enough to Care
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto max-w-2xl text-sm sm:text-lg md:text-xl text-white leading-relaxed mb-8 sm:mb-12 font-light tracking-wide px-4"
          >
            At the OCC, we create unforgettable events by combining exceptional
            food, flawless service, and genuine hospitality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
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
              Get in Touch
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
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute -bottom-40 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-4 text-white">
              <span className="text-sm font-light tracking-[0.2em] uppercase">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-px h-12 bg-gradient-to-b from-transparent via-border-white/40 to-transparent"
              />
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-1 h-1 bg-border-white/60 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
