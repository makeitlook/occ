"use client";

import React, { ReactNode } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

const backdropVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 15,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 20,
    },
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 18,
      delay: 0.05,
    },
  },
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  className = "",
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-shadow-heavy/80 p-4"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            className={`relative w-full max-w-2xl max-h-[80vh] bg-card-background text-text-primary rounded-lg shadow-md overflow-y-auto ${className}`}
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center border-b border-border-main p-4"
            >
              <h2 className="text-lg font-medium">{title}</h2>
              <motion.button
                onClick={onClose}
                className="text-text-dimmed hover:text-text-primary text-xl"
                aria-label="Close"
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  transition: {
                    type: "tween",
                    duration: 0.2,
                  },
                }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Body */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.1,
                type: "tween",
                duration: 0.3,
              }}
              className="p-4 space-y-4"
            >
              {children}
            </motion.div>

            {/* Footer */}
            <div className="border-t border-border-main flex justify-end p-4">
              <button
                onClick={onClose}
                className="rounded-lg shadow-md p-4 inline-flex items-center justify-center text-sm font-medium transition-colors bg-elements-primary-main text-elements-primary-contrastText hover:bg-elements-primary-shadow"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
