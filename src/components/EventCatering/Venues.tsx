"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";

const Venues: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const venues = [
    {
      name: "The Garden Estate",
      location: "Surrey",
      image: "/images/venues/garden-estate.jpg",
    },
    {
      name: "Riverside Manor",
      location: "Kent",
      image: "/images/venues/riverside-manor.jpg",
    },
    {
      name: "Historic Hall",
      location: "London",
      image: "/images/venues/historic-hall.jpg",
    },
    {
      name: "Modern Pavilion",
      location: "Essex",
      image: "/images/venues/modern-pavilion.jpg",
    },
    {
      name: "Country Club",
      location: "Hertfordshire",
      image: "/images/venues/country-club.jpg",
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-neutral-dimmed via-main-background to-card-background overflow-hidden">
      {/* Elegant decorative elements */}
      <div className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-br from-elements-primary-light/10 to-elements-secondary-highlight/10 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-16 w-36 h-36 bg-gradient-to-tl from-elements-secondary-highlight/8 to-elements-primary-bg/8 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <SectionHeader
            badge="Venue Partners"
            title="Our Trusted"
            subtitle="Venues"
            description="Exquisite locations where we've crafted countless memorable celebrations across London and the Southeast"
            alignment="center"
            maxWidth="3xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          {/* Desktop: Asymmetric grid layout */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 lg:mt-20 hidden lg:block"
          >
            <div className="grid grid-cols-12 gap-6 h-[600px]">
              {/* Large featured venue */}
              <div className="col-span-6 row-span-2 group cursor-pointer">
                <div className="relative h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 group-hover:-translate-y-2">
                  <img
                    src={venues[0].image}
                    alt={venues[0].name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-card-background/95 backdrop-blur-xl rounded-2xl p-6 border border-elements-secondary-highlight/20">
                      <h3 className="text-2xl font-light text-text-primary mb-2">
                        {venues[0].name}
                      </h3>
                      <p className="text-elements-secondary-main font-light flex items-center gap-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {venues[0].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medium venues */}
              <div className="col-span-3 group cursor-pointer">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={venues[1].image}
                    alt={venues[1].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card-background/90 backdrop-blur-lg rounded-xl p-4">
                      <h4 className="font-light text-text-primary text-lg mb-1">
                        {venues[1].name}
                      </h4>
                      <p className="text-sm text-elements-secondary-main">
                        {venues[1].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 group cursor-pointer">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={venues[2].image}
                    alt={venues[2].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card-background/90 backdrop-blur-lg rounded-xl p-4">
                      <h4 className="font-light text-text-primary text-lg mb-1">
                        {venues[2].name}
                      </h4>
                      <p className="text-sm text-elements-secondary-main">
                        {venues[2].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom row */}
              <div className="col-span-3 group cursor-pointer">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={venues[3].image}
                    alt={venues[3].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card-background/90 backdrop-blur-lg rounded-xl p-4">
                      <h4 className="font-light text-text-primary text-lg mb-1">
                        {venues[3].name}
                      </h4>
                      <p className="text-sm text-elements-secondary-main">
                        {venues[3].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-3 group cursor-pointer">
                <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1">
                  <img
                    src={venues[4].image}
                    alt={venues[4].name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card-background/90 backdrop-blur-lg rounded-xl p-4">
                      <h4 className="font-light text-text-primary text-lg mb-1">
                        {venues[4].name}
                      </h4>
                      <p className="text-sm text-elements-secondary-main">
                        {venues[4].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Horizontal scroll */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 lg:hidden overflow-x-auto pb-4"
          >
            <div className="flex gap-6 min-w-max">
              {venues.map((venue, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-72 group cursor-pointer"
                >
                  <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-card-background/95 backdrop-blur-xl rounded-xl p-5">
                        <h3 className="text-xl font-light text-text-primary mb-2">
                          {venue.name}
                        </h3>
                        <p className="text-elements-secondary-main font-light flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {venue.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-16">
            <Button
              type="elegant-secondary"
              href="/services/partnered-venues"
              extraClassNames="group !px-12 !py-4"
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
              See All Venues
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venues;
