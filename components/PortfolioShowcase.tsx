"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFolder, FaCertificate, FaCode } from "react-icons/fa";
import ProjectsTab from "./ProjectsTab";
import CertificatesTab from "./CertificatesTab";
import TechStackTab from "./TechStackTab";

type TabType = "projects" | "certificates" | "techstack";

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>("projects");

  const tabs = [
    {
      id: "projects" as TabType,
      label: "Projects",
      icon: FaFolder,
      description: "Innovative web & mobile solutions crafted",
    },
    {
      id: "certificates" as TabType,
      label: "Certificates",
      icon: FaCertificate,
      description: "Professional skills validated",
    },
    {
      id: "techstack" as TabType,
      label: "Tech Stack",
      icon: FaCode,
      description: "Technologies and tools I work with",
    },
  ];

  return (
    <section id="portfolio" className="section-container bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-dark-bg dark:via-dark-card/30 dark:to-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Portfolio Showcase</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Explore my journey through projects, certifications, and technical expertise.
            Each section represents a milestone in my continuous learning path.
          </p>
        </motion.div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl min-w-[200px] transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-primary-500 to-purple-600 text-white shadow-2xl shadow-primary-500/50"
                    : "bg-white dark:bg-dark-card border-2 border-gray-200 dark:border-dark-border hover:border-primary-400 dark:hover:border-primary-400 text-gray-700 dark:text-gray-300"
                }`}
              >
                {/* Icon */}
                <div
                  className={`mb-3 p-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-white/20"
                      : "bg-primary-100 dark:bg-primary-900/30 group-hover:bg-primary-200 dark:group-hover:bg-primary-900/50"
                  }`}
                >
                  <Icon
                    className={`text-3xl ${
                      isActive
                        ? "text-white"
                        : "text-primary-600 dark:text-primary-400"
                    }`}
                  />
                </div>

                {/* Label */}
                <span className="text-lg font-bold mb-1">{tab.label}</span>
                
                {/* Description */}
                <span
                  className={`text-xs text-center ${
                    isActive
                      ? "text-white/90"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {tab.description}
                </span>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "projects" && <ProjectsTab />}
            {activeTab === "certificates" && <CertificatesTab />}
            {activeTab === "techstack" && <TechStackTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
