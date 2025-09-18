"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";

// Counter animation hook
const useCounter = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      let startTime: number;
      const animateCount = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOutQuart * end));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [isInView, end, duration, hasAnimated]);

  return { count, ref };
};

const AboutPreview: React.FC = () => {
  const { count: eventsCount, ref: eventsRef } = useCounter(125, 2.5);
  const { count: yearsCount, ref: yearsRef } = useCounter(8, 2);
  const { count: clientsCount, ref: clientsRef } = useCounter(500, 3);

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

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-card-background to-neutral/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-elements-secondary-main/10 to-elements-primary-main/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Content Section */}
          <div className="space-y-8">
            {/* Section Badge */}

            <SectionHeader
              badge="About Our Story"
              title="Crafting Extraordinary"
              subtitle="Culinary Experiences"
              description="At the OCC , we believe every event deserves more than just a meal —
            it deserves a culinary experience that brings people together and
            leaves lasting memories. Our promise is to deliver exceptional food,
            flawless service, and genuine hospitality at every event, big or
            small."
              alignment="left"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />

            {/* Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base leading-relaxed text-text-tertiary font-light">
                From intimate gatherings to grand celebrations, every detail is
                meticulously crafted to reflect your vision. We don&apos;t just
                cater events – we create lasting memories through the universal
                language of exceptional food.
              </p>
            </motion.div>

            {/* Stats Counter */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 py-8"
            >
              <div ref={eventsRef} className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-light text-elements-primary-main">
                  {eventsCount}+
                </div>
                <div className="text-sm text-text-tertiary font-medium tracking-wide uppercase">
                  Events Hosted
                </div>
              </div>

              <div
                ref={yearsRef}
                className="text-center space-y-2 border-x border-border-dimmed/30"
              >
                <div className="text-2xl sm:text-3xl font-light text-elements-primary-main">
                  {yearsCount}+
                </div>
                <div className="text-sm text-text-tertiary font-medium tracking-wide uppercase">
                  Years Experience
                </div>
              </div>

              <div ref={clientsRef} className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-light text-elements-primary-main">
                  {clientsCount}+
                </div>
                <div className="text-sm text-text-tertiary font-medium tracking-wide uppercase">
                  Happy Clients
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button
                type="elegant-primary"
                href="/about"
                extraClassNames="group"
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
                Read Our Story
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div variants={imageVariants} className="relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              {/* Main Image */}
              <Image
                src="/images/about-preview.jpg"
                alt="Elegant dining setup showcasing OCC Events culinary artistry"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-shadow-heavy/20 via-transparent to-transparent" />

              {/* Decorative Frame */}
              <div className="absolute inset-4 border border-border-white/20 rounded-lg pointer-events-none" />
            </div>

            {/* Floating Quote Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-card-background/95 backdrop-blur-md border border-border-dimmed/20 rounded-xl p-6 shadow-xl max-w-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-elements-primary-main fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-text-secondary italic font-light">
                  &quot;Exceptional service and exquisite flavors that made our
                  celebration truly memorable.&quot;
                </p>
                <div className="text-xs text-text-tertiary font-medium">
                  — Sarah & James, Wedding Clients
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
