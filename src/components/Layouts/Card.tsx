"use client";
import { motion } from "framer-motion";

interface CardProps {
  children?: any;
  className?: string;
  header?: React.ReactNode;
  subtitle?: string;
  steps?: any;
  footer?: any;
}

export default function Card({
  children,
  className,
  header,
  subtitle,
  footer,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-card-background text-text-primary rounded-lg shadow-md p-4 divide-divider-main my-6 ${className}`}
    >
      {header && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className={`p-4 font-medium border-b border-border-main`}
        >
          {header}
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
              className="text-text-secondary"
            >
              : {subtitle}
            </motion.span>
          )}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className={`p-4`}
      >
        {children}
      </motion.div>

      {footer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          {footer}
        </motion.div>
      )}
    </motion.div>
  );
}
