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
    { name: "The Garden Estate", location: "Surrey", image: "/images/venues/garden-estate.jpg" },
    { name: "Riverside Manor", location: "Kent", image: "/images/venues/riverside-manor.jpg" },
    { name: "Historic Hall", location: "London", image: "/images/venues/historic-hall.jpg" },
    { name: "Modern Pavilion", location: "Essex", image: "/images/venues/modern-pavilion.jpg" },
    { name: "Country Club", location: "Hertfordshire", image: "/images/venues/country-club.jpg" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <SectionHeader
            badge="Venue Partners"
            title="Our Trusted"
            subtitle="Venues"
            description="Beautiful locations where we've created countless memorable celebrations"
            alignment="center"
            maxWidth="2xl"
            showDecorator={true}
            itemVariants={fadeInUp}
          />

          {/* Horizontal scroll on mobile, grid on desktop */}
          <motion.div variants={fadeInUp} className="mt-16 overflow-x-auto pb-4">
            <div className="flex lg:grid lg:grid-cols-5 gap-6 min-w-max lg:min-w-0">
              {venues.map((venue, index) => (
                <div key={index} className="flex-shrink-0 w-64 lg:w-auto group cursor-pointer">
                  <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 hover:border-amber-200 group-hover:scale-105">
                    <div className="aspect-[4/3] bg-gradient-to-br from-amber-100/50 to-orange-100/50 relative overflow-hidden">
                      <img
                        src={venue.image}
                        alt={venue.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-medium text-gray-900 mb-2">{venue.name}</h3>
                      <p className="text-sm text-gray-500">{venue.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="text-center mt-12">
            <Button type="elegant-outline" href="/venues">
              View All Venues
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Venues;
