import { Code } from "lucide-react";
import { motion } from "framer-motion";

export const Logo = () => (
  <div className="group flex items-center gap-3">
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="h-24 w-24 flex justify-center items-center relative p-2 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ["-200%", "200%"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      />
      {/* Placeholder logo: Replace with your SVG or image if available */}
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white relative z-10">
        <rect width="50" height="50" rx="12" fill="#6366F1"/>
        <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold" fontFamily="Arial" dy=".3em">FC</text>
      </svg>
    </motion.div>
  </div>
);
