"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";

export default function PartneredVenues() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Animation variants
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Venue categories
  const categories = [
    { id: "all", label: "All Venues", count: 12 },
    { id: "wedding", label: "Wedding Venues", count: 5 },
    { id: "corporate", label: "Corporate Events", count: 4 },
    { id: "private", label: "Private Parties", count: 3 },
  ];

  // Venue data
  const venues = [
    {
      id: 1,
      name: "The Royal Observatory",
      location: "Greenwich, London",
      category: "wedding",
      type: "Historic Landmark",
      capacity: "150 guests",
      features: [
        "Panoramic city views",
        "Historic architecture",
        "Garden terrace",
        "Exclusive access",
      ],
      description:
        "A magnificent historic venue offering breathtaking views across London, perfect for sophisticated weddings and celebrations.",
      priceRange: "£££",
      amenities: [
        "Bridal suite",
        "Catering kitchen",
        "Parking",
        "Audio/Visual",
      ],
      highlights:
        "UNESCO World Heritage Site with stunning London skyline views",
      image: "https://placehold.co/600x400",
      gallery: [
        "https://placehold.co/300x200",
        "https://placehold.co/300x200",
        "https://placehold.co/300x200",
      ],
    },
    {
      id: 2,
      name: "Riverside Manor Estate",
      location: "Surrey Countryside",
      category: "wedding",
      type: "Country Estate",
      capacity: "200 guests",
      features: [
        "Riverside location",
        "Historic manor house",
        "Landscaped gardens",
        "Marquee space",
      ],
      description:
        "An enchanting riverside estate combining elegant interiors with stunning natural surroundings.",
      priceRange: "££££",
      amenities: [
        "On-site accommodation",
        "Garden ceremony space",
        "Private dock",
        "Event coordination",
      ],
      highlights:
        "Award-winning gardens and historic charm dating back to the 16th century",
      image: "https://placehold.co/600x400",
      gallery: [
        "https://placehold.co/300x200",
        "https://placehold.co/300x200",
        "https://placehold.co/300x200",
      ],
    },
    // … add more venues as needed
  ];

  const filteredVenues =
    selectedCategory === "all"
      ? venues
      : venues.filter((venue) => venue.category === selectedCategory);

  return (
    <div className="min-h-screen bg-main-background">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-neutral-dimmed via-main-background to-neutral overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-elements-primary-light/10 to-elements-secondary-main/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-elements-secondary-main/10 to-elements-primary-light/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Partnered Venues"
              title="Exceptional Locations"
              subtitle="For Unforgettable Events"
              description="Discover our carefully curated collection of premium venues, each selected for their unique character, impeccable service, and ability to create magical moments."
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={fadeInUp}
              className="flex justify-center mt-12"
            >
              <div className="flex flex-wrap gap-4 justify-center bg-card-background/90 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-border-dimmed">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-elements-primary-main text-elements-primary-contrastText shadow-lg"
                        : "text-text-secondary hover:text-elements-primary-main hover:bg-elements-primary-bg"
                    }`}
                  >
                    {category.label}
                    <span className="ml-2 text-sm opacity-75">
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Venues Grid */}
      <section className="py-24 bg-card-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredVenues.map((venue) => (
              <motion.div
                key={venue.id}
                variants={scaleIn}
                className="group bg-card-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border-dimmed"
              >
                {/* Venue Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4 bg-card-background/90 backdrop-blur-md rounded-full px-3 py-1 text-sm font-medium text-text-secondary">
                    {venue.priceRange}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-elements-primary-main text-elements-primary-contrastText rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide">
                    {venue.type}
                  </div>

                  {/* Capacity */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white rounded-full px-3 py-1 text-sm">
                    {venue.capacity}
                  </div>
                </div>

                {/* Venue Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-text-primary mb-2 group-hover:text-elements-primary-main transition-colors duration-300">
                    {venue.name}
                  </h3>
                  <div className="flex items-center gap-2 text-text-secondary mb-3">
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
                    <span className="text-sm">{venue.location}</span>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {venue.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-medium text-text-primary mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {venue.features.slice(0, 4).map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-text-secondary"
                        >
                          <div className="w-1.5 h-1.5 bg-elements-primary-main rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight */}
                  <div className="bg-elements-primary-bg rounded-2xl p-4 mb-6 border border-border-dimmed">
                    <p className="text-sm text-elements-primary-main font-medium">
                      {venue.highlights}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      type="elegant-primary"
                      href={`/venues/${venue.id}`}
                      extraClassNames="flex-1 text-sm py-3"
                    >
                      View Details
                    </Button>
                    <Button
                      type="elegant-outline"
                      href="/contact"
                      extraClassNames="px-4 py-3"
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
