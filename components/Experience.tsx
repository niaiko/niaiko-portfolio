"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendar } from "react-icons/fa";

export default function Experience() {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-dark-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t("experience.title")}</h2>
          <p className="section-subtitle">
            {t("experience.subtitle")}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-900/30" />

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
                      isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card"
                    >
                      {/* Icon Badge */}
                      <div
                        className={`inline-flex p-3 rounded-lg mb-4 ${
                          item.type === "work"
                            ? "bg-primary-100 dark:bg-primary-900/30"
                            : "bg-purple-100 dark:bg-purple-900/30"
                        }`}
                      >
                        <Icon
                          className={`text-2xl ${
                            item.type === "work"
                              ? "text-primary-600 dark:text-primary-400"
                              : "text-purple-600 dark:text-purple-400"
                          }`}
                        />
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.role}
                      </h3>
                      <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                        {item.company}
                      </h4>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-2">
                          <FaMapMarkerAlt />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FaCalendar />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements && item.achievements.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-gray-900 dark:text-white">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-2">
                            {item.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="text-primary-600 dark:text-primary-400 mt-1">
                                  ✓
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-4 ${
                        item.type === "work"
                          ? "bg-primary-600 border-primary-200 dark:border-primary-900"
                          : "bg-purple-600 border-purple-200 dark:border-purple-900"
                      }`}
                    >
                      <Icon className="text-white text-lg" />
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
          className="text-center mt-16"
        >
          <motion.a
            href="/cv.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
