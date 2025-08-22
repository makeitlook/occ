"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variant, Variants } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button/Button";
import { carouselImages } from "@/data/hero";

interface TextVariants extends Variants {
  hidden: Variant;
  visible: Variant;
}

// Animation variants
const textVariant: TextVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};


const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(
      currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    );
  };

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${carouselImages[currentIndex].src})`,
              }}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-neutral-shadow-heavy/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
        <Button
          type="icon"
          onClick={handlePrev}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          aria-label="Previous image"
          extraClassNames="absolute left-2 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 bg-border-white/5 backdrop-blur-md border border-border-white/10 text-text-clear hover:bg-border-white/10 hover:text-text-clear transition-all duration-500 group rounded-md shadow-sm"
        >
          <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
        </Button>

        <Button
          type="icon"
          onClick={handleNext}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          aria-label="Next image"
          extraClassNames="absolute right-2 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-4 bg-border-white/5 backdrop-blur-md border border-border-white/10 text-text-clear hover:bg-border-white/10 hover:text-text-clear transition-all duration-500 group rounded-md shadow-sm"
        >
          <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
        </Button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-4">
          {carouselImages.map((_, index) => (
            <Button
              key={index}
              type="text"
              onClick={() => handleDotClick(index)}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              aria-label={`Go to slide ${index + 1}`}
              extraClassNames={`w-6 sm:w-8 h-px p-0 rounded-none transition-all duration-500 ${
                index === currentIndex
                  ? "bg-border-white"
                  : "bg-border-white/30 hover:bg-border-white/60"
              }`}
            />
          ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="relative mx-auto max-w-4xl text-center w-full">
          {/* Dynamic slide content */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 sm:mb-8"
          >
            <span className="inline-block px-3 py-1 sm:px-6 sm:py-2 rounded-sm bg-border-white/10 backdrop-blur-md border border-border-white/20 text-text-clear text-xs sm:text-sm font-light tracking-widest uppercase">
              {carouselImages[currentIndex].subtitle}
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
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight tracking-wide text-text-clear mb-4 sm:mb-8 leading-tight px-2"
          >
            Memorable Events
            <br />
            <span className="font-serif italic bg-gradient-to-r from-elements-primary-main to-elements-secondary-main bg-clip-text text-transparent">
              Crafted by OCC
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mx-auto max-w-2xl text-sm sm:text-lg md:text-xl text-text-clear/90 leading-relaxed mb-8 sm:mb-12 font-light tracking-wide px-4"
          >
            At OCC Events & Catering, we specialise in bespoke Indian and Afghan
            menus that make every occasion unforgettable. Let&apos;s bring your
            celebration to life.
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
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="absolute -bottom-40 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center space-y-4 text-text-clear/60">
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

      {/* Progress bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-border-white/20 z-30">
        <motion.div
          key={currentIndex}
          className="h-full bg-gradient-to-r from-elements-primary-main to-elements-secondary-main"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 5,
            ease: "linear",
            repeat: isAutoPlaying ? Infinity : 0,
          }}
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
