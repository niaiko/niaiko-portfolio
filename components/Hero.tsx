"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaArrowDown, FaCode } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroBackground3D from "./HeroBackground3D";

export default function Hero() {
  const { t } = useLanguage();
  
  const socialLinks = [
    { icon: FaGithub, href: personalInfo.social.github, label: "GitHub" },
    { icon: FaLinkedin, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, href: personalInfo.social.twitter, label: "Twitter" },
    { icon: FaInstagram, href: personalInfo.social.instagram, label: "Instagram" },
  ];

  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Three.js Background */}
      <HeroBackground3D />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/90 dark:from-dark-bg/95 dark:via-dark-bg/90 dark:to-dark-card/95" />

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2"
            >
              <motion.div
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="text-3xl"
              >
                👋
              </motion.div>
              <span className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium shadow-lg">
                {t("hero.greeting")}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            >
              <span className="text-gray-900 dark:text-white">I&apos;m </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300"
            >
              {t("hero.title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-xl"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleScrollToProjects}
                className="btn-primary"
              >
                {t("hero.cta")}
              </button>
              <a
                href="#contact"
                className="btn-secondary"
              >
                {t("hero.contact")}
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-dark-card rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Animated Code Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden md:flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Code Window */}
              <div className="relative bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-gray-700 w-[400px]">
                {/* Window Header */}
                <div className="flex items-center space-x-2 px-4 py-3 bg-gray-800 dark:bg-gray-900 border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-gray-400 font-mono">developer.tsx</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-purple-400"
                  >
                    <span className="text-pink-500">const</span>{" "}
                    <span className="text-blue-400">developer</span> ={" "}
                    <span className="text-yellow-400">{"{"}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="pl-4 text-gray-300"
                  >
                    name: <span className="text-green-400">&apos;{personalInfo.name.split(" ")[0]}&apos;</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                    className="pl-4 text-gray-300"
                  >
                    role: <span className="text-green-400">&apos;Full Stack Dev&apos;</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pl-4 text-gray-300"
                  >
                    skills: <span className="text-yellow-400">{"["}</span>
                    <span className="text-green-400">&apos;React&apos;</span>,{" "}
                    <span className="text-green-400">&apos;Node.js&apos;</span>
                    <span className="text-yellow-400">{"]"}</span>,
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                    className="pl-4 text-gray-300"
                  >
                    passion: <span className="text-green-400">&apos;Building Cool Stuff&apos;</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 }}
                    className="text-yellow-400"
                  >
                    {"}"};
                  </motion.div>
                </div>

                {/* Decorative glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl -z-10" />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg"
              >
                <FaCode className="text-white text-2xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-6 -right-6 p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-lg"
              >
                <span className="text-white text-2xl">⚡</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <FaArrowDown />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
