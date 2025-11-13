"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="section-container bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-dark-card/30 dark:via-dark-bg dark:to-dark-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Plus épaisse et avec gradient */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-300 via-primary-400 to-primary-300 dark:from-primary-900/50 dark:via-primary-800/50 dark:to-primary-900/50 rounded-full shadow-lg" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experience.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.type === "work" ? FaBriefcase : FaGraduationCap;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    isEven ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`${
                      isEven ? "md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="relative group"
                    >
                      {/* Gradient Border Effect */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur"></div>
                      
                      <div className="relative bg-white dark:bg-dark-card rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-dark-border group-hover:shadow-2xl transition-all duration-300">
                        {/* Mobile Position Badge */}
                        <div className="md:hidden absolute -top-3 -right-3 bg-gradient-to-br from-primary-600 to-purple-600 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                          {index + 1}
                        </div>

                        {/* Icon Badge */}
                        <div
                          className={`inline-flex p-4 rounded-xl mb-6 shadow-md ${
                            item.type === "work"
                              ? "bg-gradient-to-br from-primary-500 to-primary-600"
                              : "bg-gradient-to-br from-purple-500 to-purple-600"
                          }`}
                        >
                          <Icon className="text-2xl text-white" />
                        </div>

                        {/* Role & Company */}
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-2">
                          {item.role}
                        </h3>
                        <h4 className="text-lg font-semibold bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
                          {item.company}
                        </h4>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-dark-border/50 rounded-lg text-sm">
                            <FaMapMarkerAlt className="text-primary-600 dark:text-primary-400" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.location}</span>
                          </div>
                          <div className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 dark:bg-dark-border/50 rounded-lg text-sm">
                            <FaCalendar className="text-primary-600 dark:text-primary-400" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.period}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-[15px]">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        {item.achievements && item.achievements.length > 0 && (
                          <div className="space-y-4 mb-6">
                            <div className="flex items-center space-x-2">
                              <div className="h-0.5 w-8 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"></div>
                              <h5 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                                Réalisations clés
                              </h5>
                            </div>
                            <ul className="space-y-3">
                              {item.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 + i * 0.05 }}
                                  className="flex items-start space-x-3 group/item"
                                >
                                  <FaCheckCircle className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies Used */}
                        {item.technologies && (
                          <div className="pt-6 border-t-2 border-gray-100 dark:border-dark-border/50">
                            <div className="flex items-center space-x-2 mb-4">
                              <div className="h-0.5 w-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                              <h5 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                                Technologies
                              </h5>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.split(', ').map((tech, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 + i * 0.03 }}
                                  whileHover={{ scale: 1.1, y: -2 }}
                                  className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-200/50 dark:border-primary-800/50 hover:border-primary-400 dark:hover:border-primary-600 shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 15
                      }}
                      className="relative"
                    >
                      {/* Pulse Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0.2, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`absolute inset-0 rounded-full ${
                          item.type === "work"
                            ? "bg-primary-400"
                            : "bg-purple-400"
                        }`}
                      />
                      
                      {/* Main Node */}
                      <div className={`relative w-14 h-14 rounded-full flex items-center justify-center border-4 shadow-xl ${
                        item.type === "work"
                          ? "bg-gradient-to-br from-primary-500 to-primary-600 border-white dark:border-dark-bg"
                          : "bg-gradient-to-br from-purple-500 to-purple-600 border-white dark:border-dark-bg"
                      }`}>
                        <Icon className="text-white text-xl" />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.a
            href="/cv.pdf"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span>Télécharger mon CV complet</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
