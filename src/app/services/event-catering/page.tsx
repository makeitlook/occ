"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";

const EventCatering = () => {
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

  // Data
  const keyFeatures = [
    {
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Custom Menus",
      description:
        "Bespoke menus tailored to your preferences, dietary requirements, and cultural traditions.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
      title: "Expert Chefs",
      description:
        "Skilled culinary professionals who bring restaurant-quality cooking to your venue.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      title: "Elegant Presentation",
      description:
        "Beautiful plating and styling that makes every dish a visual masterpiece.",
    },
    {
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Reliable Service",
      description:
        "Professional, punctual service that lets you enjoy your event worry-free.",
    },
  ];

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

  const testimonials = [
    {
      quote:
        "The OCC made our wedding absolutely unforgettable. Every dish was perfect.",
      author: "Amira & Zain",
      event: "Wedding Reception, 2024",
    },
    {
      quote:
        "Professional, delicious, and stress-free. Couldn't have asked for better catering.",
      author: "Sarah Thompson",
      event: "Corporate Event, 2024",
    },
    {
      quote:
        "The authentic flavors and beautiful presentation exceeded all our expectations.",
      author: "The Patel Family",
      event: "Anniversary Celebration, 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-orange-100/20 to-amber-100/20 rounded-full blur-2xl" />

        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <SectionHeader
              badge="Event Catering Services"
              title="Catering for Life's"
              subtitle="Most Memorable Moments"
              description="From intimate gatherings to grand celebrations, we bring authentic flavors and professional service to make your special day extraordinary."
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div variants={fadeInUp} className="mt-8">
              <Button
                type="elegant-primary"
                href="/contact"
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
                Get Your Quote Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <SectionHeader
              badge="What We Offer"
              title="Bringing Authentic Flavors"
              subtitle="to Every Occasion"
              description=""
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={fadeInUp}
              className="space-y-6 text-lg text-gray-600 leading-relaxed font-light"
            >
              <p>
                The OCC Events & Catering specializes in creating unforgettable
                dining experiences for weddings, engagements, corporate events,
                and private celebrations. Our passion for authentic Indian and
                Afghan cuisine, combined with modern presentation and
                professional service, ensures your event is truly special.
              </p>

              <p>
                Every menu is personally crafted to reflect your vision, dietary
                preferences, and cultural traditions. From intimate family
                gatherings to grand celebrations, we bring the same level of
                care and attention to detail that has made us the trusted choice
                for discerning hosts across the region.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-100/30 to-orange-100/30 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Our Excellence"
              title="Why Choose"
              subtitle="The OCC"
              description="Four pillars of excellence that make every event exceptional"
              alignment="center"
              maxWidth="2xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-200/50 hover:border-amber-200 text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-200/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partnered Venues */}
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
            <motion.div
              variants={fadeInUp}
              className="mt-16 overflow-x-auto pb-4"
            >
              <div className="flex lg:grid lg:grid-cols-5 gap-6 min-w-max lg:min-w-0">
                {venues.map((venue, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-64 lg:w-auto group cursor-pointer"
                  >
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
                        <h3 className="font-medium text-gray-900 mb-2">
                          {venue.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {venue.location}
                        </p>
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

      {/* Client Testimonials */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-amber-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-amber-100/20 to-orange-100/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Client Stories"
              title="What Our"
              subtitle="Clients Say"
              description="Hear from families who trusted us with their special moments"
              alignment="center"
              maxWidth="2xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50 text-center"
                >
                  <div className="mb-6">
                    <svg
                      className="w-8 h-8 text-amber-600 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6 font-light">
                    {testimonial.quote}
                  </blockquote>

                  <div>
                    <p className="font-medium text-gray-900 mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl lg:text-5xl font-light mb-6 leading-tight">
              Ready to Make Your Event{" "}
              <span className="font-serif italic">Unforgettable?</span>
            </h2>
            <p className="text-xl font-light mb-8 opacity-90 leading-relaxed">
              Let's bring your vision to life with exceptional cuisine and
              flawless service. Get in touch today for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                type="elegant-secondary"
                href="/contact"
                extraClassNames="bg-white text-amber-600 hover:bg-gray-50"
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
                Get a Quote
              </Button>
              <Button
                type="elegant-outline"
                href="tel:02012345678"
                extraClassNames="border-white text-white hover:bg-white hover:text-amber-600"
              >
                Call Us Today
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/80 font-light">
                Call us at <span className="font-medium">020 1234 5678</span> or
                email{" "}
                <span className="font-medium">hello@theocccatering.co.uk</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EventCatering;
