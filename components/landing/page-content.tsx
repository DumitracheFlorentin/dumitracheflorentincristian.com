"use client";

import { motion } from "framer-motion";

export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col mx-6 sm:mx-8 md:mx-0 gap-8 sm:gap-16"
    >
      {children}
    </motion.div>
  );
}
