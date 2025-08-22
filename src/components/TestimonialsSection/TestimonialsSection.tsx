"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotation for testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const testimonialVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -20,
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral/5 via-divider-main to-neutral overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-elements-primary-main/4 to-elements-secondary-main/4 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-elements-secondary-main/4 to-elements-primary-main/4 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Section Header - Left Side */}
          <div className="lg:col-span-4">
            <SectionHeader
              badge="Client Stories"
              title="Trusted by Those"
              subtitle="Who Matter Most"
              description="Discover what our clients say about their extraordinary dining experiences with The OCC Events and Catering."
              alignment="left"
              maxWidth="full"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </div>

          {/* Testimonials Carousel - Right Side */}
          <motion.div variants={itemVariants} className="lg:col-span-8">
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Main Testimonial Display */}
              <div className="relative min-h-[400px] lg:min-h-[350px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    variants={testimonialVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-card-background/80 backdrop-blur-sm border border-border-dimmed/20 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-500 w-full">
                      {/* Quote Icon */}
                      <div className="text-center mb-6">
                        <div className="inline-flex p-3 rounded-full bg-elements-primary-main/10">
                          <svg
                            className="w-6 h-6 text-elements-primary-main"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                          </svg>
                        </div>
                      </div>

                      {/* Testimonial Content */}
                      <div className="text-center space-y-6">
                        {/* Quote */}
                        <blockquote className="text-lg lg:text-xl font-light leading-relaxed text-text-primary italic tracking-wide">
                          &quot;{testimonials[currentIndex].quote}&quot;
                        </blockquote>

                        {/* Author Information */}
                        <div className="space-y-3">
                          {/* Star Rating */}
                          <div className="flex justify-center space-x-1">
                            {[...Array(testimonials[currentIndex].rating)].map(
                              (_, i) => (
                                <svg
                                  key={i}
                                  className="w-4 h-4 text-elements-primary-main fill-current"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              )
                            )}
                          </div>

                          {/* Author Details */}
                          <div className="space-y-1">
                            <p className="font-medium text-text-primary text-base">
                              {testimonials[currentIndex].author}
                            </p>
                            <div className="text-text-tertiary text-sm space-y-1">
                              <p className="font-light">
                                {testimonials[currentIndex].occasion}
                              </p>
                              <p className="text-xs tracking-wide">
                                {testimonials[currentIndex].location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-elements-primary-main scale-125"
                        : "bg-border-dimmed hover:bg-elements-primary-main/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
