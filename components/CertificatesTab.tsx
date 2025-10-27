"use client";

import { motion } from "framer-motion";
import { certificates } from "@/lib/data";
import { FaCertificate, FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function CertificatesTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-dark-card dark:to-dark-border rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-lg hover:shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Certificate Icon Background */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <FaCertificate className="text-8xl text-primary-500" />
          </div>

          {/* Certificate Content */}
          <div className="relative z-10">
            {/* Award Icon */}
            <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl shadow-lg">
              <FaAward className="text-3xl text-white" />
            </div>

            {/* Certificate Name */}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {cert.name}
            </h3>

            {/* Issuer */}
            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
              {cert.issuer}
            </p>

            {/* Date */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Issued: {cert.date}
            </p>

            {/* Credential ID */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                {cert.credential}
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                aria-label="View Certificate"
              >
                <FaExternalLinkAlt />
              </motion.button>
            </div>
          </div>

          {/* Decorative Border Animation */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
