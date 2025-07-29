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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral/15 via-card-background to-neutral/15 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
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

          {/* Team Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} variants={itemVariants} className="group">
                <div className="bg-card-background/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-border-dimmed/20 hover:border-elements-primary-main/20">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="aspect-square bg-gradient-to-br from-elements-primary-main/10 to-elements-secondary-main/10 rounded-2xl overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 25vw"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-text-primary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-elements-primary-main font-light mb-4">
                      {member.role}
                    </p>
                    <p className="text-sm text-text-tertiary leading-relaxed font-light">
                      {member.bio}
                    </p>
                  </div>
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
