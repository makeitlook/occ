"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";
import SectionHeader from "../SectionHeader/SectionHeader";
import { services } from "@/data/services";

const ServicesOverview: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const serviceVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-card-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center space-y-6 mb-16 max-w-3xl mx-auto"
        >
          <SectionHeader
            badge="Our Services"
            title="Exceptional Dining"
            subtitle="Tailored to Perfection"
            description="From intimate gatherings to grand celebrations, we craft
            extraordinary culinary experiences that reflect your unique vision
            and exceed every expectation."
            alignment="center"
            maxWidth="4xl"
            showDecorator={true}
            itemVariants={itemVariants}
          />
        </motion.div>
      </div>

      {/* Full Width Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 lg:grid-cols-4"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={serviceVariants}
            className="group relative h-[400px] lg:h-[500px] overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            />

            {/* Gradient Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${service.overlay} transition-opacity duration-500 group-hover:opacity-80`}
            />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              {/* Default State - Just Title */}
              <div className="transform transition-all duration-500 ease-out group-hover:-translate-y-8 group-hover:opacity-0">
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-2 tracking-wide">
                  {service.title}
                </h3>
                <div className="w-12 h-0.5 bg-white/60 rounded-full" />
              </div>

              {/* Hover State - Full Content */}
              <div className="absolute inset-x-6 lg:inset-x-8 bottom-6 lg:bottom-8 transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <div className="space-y-6">
                  {/* Title with Icon */}
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-light text-white tracking-wide">
                      {service.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-elements-primary-main to-elements-secondary-main rounded-full" />
                  </div>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed font-light text-sm lg:text-base">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    type="hero-secondary"
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    extraClassNames="!px-6 !py-2 !text-sm border-white/60 hover:border-white text-white"
                    icon={
                      <svg
                        className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
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
                    Learn More
                  </Button>
                </div>
              </div>

              {/* Hover Indicator */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                <div className="w-8 h-8 border border-white/40 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
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
                </div>
              </div>
            </div>

            {/* Subtle Border Between Items */}
            <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block last:hidden" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 md:hidden" />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center pt-16"
        >
          <Button
            type="elegant-primary"
            href="/services"
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
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;
