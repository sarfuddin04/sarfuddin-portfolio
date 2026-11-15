import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { RESUME_PATH, RESUME_FILENAME } from "../constants/resume";

/**
 * Reusable Download Resume button — primary or outline variant.
 * Usage: <ResumeDownloadBtn variant="primary" size="sm|md" label="..." />
 */
export default function ResumeDownloadBtn({
  variant = "primary",
  size = "md",
  label = "Download Resume",
  className = "",
}) {
  const sizeClass = size === "sm"
    ? "text-sm py-2 px-4 gap-1.5"
    : "text-base py-2.5 px-6 gap-2";

  return (
    <motion.a
      href={RESUME_PATH}
      download={RESUME_FILENAME}
      className={`${variant === "primary" ? "btn-primary" : "btn-outline"} ${sizeClass} ${className}`}
      whileHover={{ scale: 1.05, y: -1 }}
      whileTap={{ scale: 0.96 }}
      aria-label="Download Mohammad Sarfuddin Resume PDF"
    >
      <motion.span
        whileHover={{ rotate: -12, y: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="inline-flex"
      >
        <Download size={size === "sm" ? 14 : 16} />
      </motion.span>
      {label}
    </motion.a>
  );
}
