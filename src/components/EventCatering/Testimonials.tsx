"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Testimonials: React.FC = () => {
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

  const testimonials = [
    {
      quote: "The OCC made our wedding absolutely unforgettable. Every dish was perfect.",
      author: "Amira & Zain",
      event: "Wedding Reception, 2024",
    },
    {
      quote: "Professional, delicious, and stress-free. Couldn't have asked for better catering.",
      author: "Sarah Thompson",
      event: "Corporate Event, 2024",
    },
    {
      quote: "The authentic flavors and beautiful presentation exceeded all our expectations.",
      author: "The Patel Family",
      event: "Anniversary Celebration, 2024",
    },
  ];

  return (
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

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8 mt-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50 text-center"
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-amber-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6 font-light">
                  {testimonial.quote}
                </blockquote>

                <div>
                  <p className="font-medium text-gray-900 mb-1">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
