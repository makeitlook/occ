"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

interface AboutTeamSectionProps {
  containerVariants: any;
  itemVariants: any;
}

const AboutTeamSection: React.FC<AboutTeamSectionProps> = ({
  containerVariants,
  itemVariants,
}) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Amara Singh",
      role: "Founder & Executive Chef",
      image: "/images/team/amara.jpg",
      bio: "With over 15 years of culinary excellence, Amara brings authentic Indian and Afghan flavors to every celebration.",
    },
    {
      name: "James Mitchell",
      role: "Operations Director",
      image: "/images/team/james.jpg",
      bio: "James ensures every event runs seamlessly, coordinating logistics with precision and care.",
    },
    {
      name: "Priya Patel",
      role: "Creative Director",
      image: "/images/team/priya.jpg",
      bio: "Priya transforms visions into reality, crafting bespoke experiences that reflect each client's unique story.",
    },
    {
      name: "David Chen",
      role: "Head of Service",
      image: "/images/team/david.jpg",
      bio: "David leads our service team with warmth and professionalism, ensuring every guest feels valued.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-neutral/20 via-card-background to-neutral/20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-32 right-8 w-48 h-48 bg-elements-primary-main/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <SectionHeader
              badge="Our Team"
              title="The Hearts Behind"
              subtitle="Every Event"
              description="Meet the passionate individuals who bring creativity, expertise, and genuine care to every celebration we have the honor to be part of."
              alignment="center"
              maxWidth="2xl"
              showDecorator={true}
              itemVariants={itemVariants}
            />
          </motion.div>

          {/* Team Layout */}
          <motion.div
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`group flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative w-40 h-40 md:w-48 md:h-64 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                {/* Text */}
                <div className="text-center md:text-left md:max-w-lg space-y-4">
                  <h3 className="text-2xl font-medium text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-elements-primary-main text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-sm text-text-tertiary font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeamSection;
