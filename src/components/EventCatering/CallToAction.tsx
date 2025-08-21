"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button/Button";

const CallToAction: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
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
            Ready to Make Your Event <span className="font-serif italic">Unforgettable?</span>
          </h2>
          <p className="text-xl font-light mb-8 opacity-90 leading-relaxed">
            Let's bring your vision to life with exceptional cuisine and flawless service. Get in touch today for a personalized quote.
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
              Call us at <span className="font-medium">020 1234 5678</span> or email <span className="font-medium">hello@theocccatering.co.uk</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
