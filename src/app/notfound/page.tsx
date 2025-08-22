"use client";

import { motion } from "framer-motion";
import { FaGhost } from "react-icons/fa";
import IconWrapper from "@/components/IconWrapper/IconWrapper";
import PageLayout from "@/components/Layouts/PageLayout";
import Button from "@/components/Button/Button";

export default function NotFound() {
  return (
    <PageLayout fullHeight>
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1 }}
        >
          <IconWrapper
            icon={FaGhost}
            size={64}
            className="text-elements-primary-main"
          />
        </motion.div>
        <h1 className="text-4xl font-bold text-text-primary mt-6">
          404 - Page Not Found
        </h1>
        <p className="text-text-secondary mt-2">
          Oops! We couldn`&apos;`t find the page you`&apos;`re looking for.
        </p>
        <Button href="/" extraClassNames="mt-6">
          Go Home
        </Button>
      </div>
    </PageLayout>
  );
}
