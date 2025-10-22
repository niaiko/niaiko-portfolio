"use client";

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

const iconMap: { [key: string]: any } = {
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

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-dark-card/30">
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

        {/* Stats Grid */}
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
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Icon className="text-3xl text-primary-600 dark:text-primary-400" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
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
                (skill, index) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center justify-center p-4 bg-white dark:bg-dark-card rounded-lg border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-all group"
                    >
                      <Icon className="text-4xl mb-2 text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                      <span className="text-xs text-center text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                }
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
              {skills.frontend.map((skill) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="text-xl text-primary-600 dark:text-primary-400" />
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
              })}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="card">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend Development
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.backend.map((skill) => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="text-xl text-primary-600 dark:text-primary-400" />
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
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
