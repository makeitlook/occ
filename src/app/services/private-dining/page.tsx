"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";

export default function PrivateDining() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  // Data
  const diningExperiences = [
    {
      title: "Intimate Date Nights",
      description:
        "Romantic multi-course dinners crafted for two, with candlelit ambiance and personalized service in your home.",
      features: [
        "Personal chef service",
        "Table styling",
        "Wine pairing",
        "Ambient lighting",
      ],
      price: "From £150 per couple",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      title: "Family Celebrations",
      description:
        "Special occasion dining for family milestones, with traditional recipes and modern presentation.",
      features: [
        "Custom family menus",
        "Multi-generational options",
        "Celebration styling",
        "Photography-ready presentation",
      ],
      price: "From £45 per person",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Corporate Entertainment",
      description:
        "Sophisticated dining experiences for business entertaining, client dinners, and executive meetings.",
      features: [
        "Professional presentation",
        "Dietary accommodations",
        "Flexible timing",
        "Discrete service",
      ],
      price: "From £65 per person",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Chef's Table Experience",
      description:
        "Interactive culinary journey with our head chef preparing and presenting each course personally.",
      features: [
        "Live cooking demonstration",
        "Culinary storytelling",
        "Ingredient education",
        "Kitchen techniques",
      ],
      price: "From £95 per person",
      icon: (
        <svg
          className="w-8 h-8"
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
    },
  ];

  const menuHighlights = [
    {
      category: "Signature Appetizers",
      items: [
        "Saffron-infused seekh kebabs with mint chutney",
        "Tandoori prawns with pomegranate glaze",
        "Crispy paneer tikka with curry leaf oil",
      ],
    },
    {
      category: "Main Courses",
      items: [
        "Slow-braised lamb shank with aromatic pilaf",
        "Butter chicken with hand-pulled naan",
        "Seasonal vegetable biryani with raita",
      ],
    },
    {
      category: "Desserts",
      items: [
        "Cardamom crème brûlée with pistachio tuile",
        "Rose and saffron kulfi with honey drizzle",
        "Traditional gulab jamun with vanilla ice cream",
      ],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your preferences, dietary requirements, and event details to design the perfect menu.",
    },
    {
      step: "02",
      title: "Menu Creation",
      description:
        "Our chef crafts a bespoke menu tailored to your tastes and the occasion's significance.",
    },
    {
      step: "03",
      title: "Preparation",
      description:
        "We handle all shopping, preparation, and setup, arriving with everything needed for your meal.",
    },
    {
      step: "04",
      title: "Service",
      description:
        "Enjoy restaurant-quality service in your home while we cook, serve, and clean up.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Having Chef Ravi cook in our home was magical. The attention to detail and authentic flavors made our anniversary unforgettable.",
      author: "Sarah & James",
      occasion: "Anniversary Dinner",
    },
    {
      quote:
        "The perfect solution for our family gathering. Everyone from grandparents to children loved the food, and we could all enjoy the evening together.",
      author: "The Patel Family",
      occasion: "Birthday Celebration",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-36 bg-gradient-to-br from-gray-50 via-amber-50/30 to-orange-50/30 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-amber-200/10 to-orange-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tl from-orange-200/10 to-amber-300/10 rounded-full blur-2xl"></div>

        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Private Dining"
              title="Restaurant-Quality"
              subtitle="In Your Home"
              description="Transform your dining room into a world-class restaurant with our intimate private dining experiences. Enjoy bespoke menus, professional service, and the comfort of your own space."
              alignment="center"
              maxWidth="4xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
            >
              <Button
                type="elegant-primary"
                href="/contact"
                extraClassNames="text-lg px-10 py-4 shadow-xl group"
                icon={
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                Book Your Experience
              </Button>
              <Button
                type="elegant-outline"
                href="#experiences"
                extraClassNames="text-lg px-10 py-4"
              >
                Explore Options
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dining Experiences */}
      <section id="experiences" className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Dining Experiences"
              title="Curated for"
              subtitle="Every Occasion"
              description="Choose from our signature private dining experiences, each designed to create unforgettable moments"
              alignment="center"
              maxWidth="3xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              {diningExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform duration-300">
                      {experience.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-amber-600 font-medium mb-3">
                        {experience.price}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {experience.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Sample Menu"
              title="Signature"
              subtitle="Dishes"
              description="A taste of what awaits you - each menu is personally crafted for your event"
              alignment="center"
              maxWidth="3xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8 mt-16"
            >
              {menuHighlights.map((category, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 pb-3 border-b border-amber-200">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                All menus can be customized to accommodate dietary restrictions
                and personal preferences
              </p>
              <Button
                type="elegant-outline"
                href="/contact"
                extraClassNames="px-8 py-3"
              >
                Request Custom Menu
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="How It Works"
              title="Simple"
              subtitle="Process"
              description="From initial consultation to the final bite, we handle every detail"
              alignment="center"
              maxWidth="3xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 border-2 border-amber-200">
                      <span className="text-2xl font-bold text-amber-700">
                        {step.step}
                      </span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-amber-200 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <SectionHeader
              badge="Client Stories"
              title="Memorable"
              subtitle="Moments"
              description="Hear from guests who've experienced the magic of private dining"
              alignment="center"
              maxWidth="3xl"
              showDecorator={true}
              itemVariants={fadeInUp}
            />

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-8 mt-16"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50"
                >
                  <div className="mb-6">
                    <svg
                      className="w-10 h-10 text-amber-400 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                    </svg>
                  </div>

                  <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold text-gray-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.occasion}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Ready to Transform
              <span className="block font-normal bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Your Dining Room?
              </span>
            </h2>

            <p className="text-xl font-light mb-12 opacity-90 leading-relaxed">
              Let us bring the restaurant experience to you. Book your private
              dining experience today and create memories that will last a
              lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                type="elegant-primary"
                href="/contact"
                extraClassNames="text-lg px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 shadow-2xl group"
                icon={
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                Book Now
              </Button>
              <Button
                type="elegant-outline"
                href="tel:02012345678"
                extraClassNames="text-lg px-12 py-5 border-2 border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Call to Discuss
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center text-white/80">
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>020 1234 5678</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@theocccatering.co.uk</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
