"use client";

import { motion } from "framer-motion";

const baseContainer =
  "bg-card-background text-text-primary rounded-lg shadow-md p-4";

export default function AnimatedDiv({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      className={`${baseContainer} ${className}`}
    >
      {children}
    </motion.div>
  );
}
