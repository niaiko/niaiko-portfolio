"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, skills, stats } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,
  SiAngular,
  SiStrapi,
  SiGraphql,
  SiSwagger,
  SiAmazon,
} from "react-icons/si";
import { FaCode, FaSmile, FaBriefcase, FaTools, FaServer } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiFigma,
  SiPostman,
  SiAngular,
  SiStrapi,
  SiGraphql,
  SiSwagger,
  SiAmazon,
  SiOpenapi: SiSwagger, // Fallback pour REST API
  SiMicroservices: FaServer, // Fallback pour Microservices
  SiAmazonaws: SiAmazon, // Fallback pour AWS
  FaCode,
  FaSmile,
  FaBriefcase,
  FaTools,
};

// Couleurs officielles des technologies
const techColors: Record<string, string> = {
  SiJavascript: "#F7DF1E",
  SiTypescript: "#3178C6",
  SiHtml5: "#E34F26",
  SiCss3: "#1572B6",
  SiPython: "#3776AB",
  SiReact: "#61DAFB",
  SiNextdotjs: "#000000",
  SiVuedotjs: "#4FC08D",
  SiTailwindcss: "#06B6D4",
  SiRedux: "#764ABC",
  SiNodedotjs: "#339933",
  SiExpress: "#000000",
  SiNestjs: "#E0234E",
  SiPostgresql: "#4169E1",
  SiMongodb: "#47A248",
  SiGit: "#F05032",
  SiDocker: "#2496ED",
  SiFigma: "#F24E1E",
  SiPostman: "#FF6C37",
  SiAngular: "#DD0031",
  SiStrapi: "#8E75FF",
  SiGraphql: "#E10098",
  SiSwagger: "#85EA2D",
  SiAmazon: "#FF9900",
  SiOpenapi: "#85EA2D",
  SiMicroservices: "#4B5563",
  SiAmazonaws: "#FF9900",
};

// Composant pour une icône de technologie dans la section "Main Technologies"
function MainTechCard({ 
  skill, 
  index 
}: { 
  skill: { name: string; level: number; icon: string };
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[skill.icon];
  const iconColor = techColors[skill.icon] || "#4B5563";

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-card rounded-lg border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ color: isHovered ? iconColor : undefined }}>
        <Icon className="text-4xl mb-2 transition-colors duration-300" />
      </div>
      <span className="text-xs text-center text-gray-600 dark:text-gray-400">
        {skill.name}
      </span>
    </motion.div>
  );
}

// Composant pour un élément de compétence avec sa barre de progression
function SkillItem({ 
  skill 
}: { 
  skill: { name: string; level: number; icon: string };
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[skill.icon];
  const iconColor = techColors[skill.icon] || "#4B5563";

  return (
    <div 
      key={skill.name} 
      className="space-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div style={{ color: isHovered ? iconColor : undefined }}>
            <Icon className="text-xl transition-colors duration-300" />
          </div>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
}

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-container bg-gradient-to-br from-gray-50 via-white to-purple-50 dark:from-dark-card/30 dark:via-dark-bg dark:to-dark-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t("about.title")}</h2>
          <p className="section-subtitle">
            {t("about.subtitle")}
          </p>
        </motion.div>

        {/* Stats Grid - Enhanced Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="relative bg-white dark:bg-dark-card rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-border group-hover:border-primary-500 dark:group-hover:border-primary-500 transition-all shadow-lg group-hover:shadow-2xl overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl shadow-lg"
                      >
                        <Icon className="text-3xl text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Value */}
                    <motion.h3
                      initial={{ scale: 1 }}
                      whileInView={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-2"
                    >
                      {stat.value}
                    </motion.h3>
                    
                    {/* Label */}
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bio and Skills */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t("about.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("about.description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  📧 {t("contact.info.email")}:
                </span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  📍 {t("contact.info.location")}:
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  {personalInfo.location}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">
                  ✅ {t("contact.info.availability")}:
                </span>
                <span className="text-green-600 dark:text-green-400">
                  {personalInfo.availability}
                </span>
              </div>
            </div>
            <motion.a
              href={personalInfo.cv}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block btn-primary"
            >
              Download CV
            </motion.a>
          </motion.div>

          {/* Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Main Technologies
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[...skills.frontend.slice(0, 6), ...skills.backend.slice(0, 3)].map(
                (skill, index) => (
                  <MainTechCard key={skill.name} skill={skill} index={index} />
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Detailed Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Technical Skills
          </h3>

          {/* Frontend Skills */}
          <div className="card">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend Development
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.frontend.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="card">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.backend.map((skill) => (
                <SkillItem key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
