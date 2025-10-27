"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaSun, FaMoon, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-xl shadow-xl border-b border-gray-200/50 dark:border-gray-700/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {"<NR />"}
                </div>
                {/* Underline animation */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium rounded-lg group"
                >
                  {item.name}
                  {/* Hover underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
              
              {/* Divider */}
              <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
              
              {/* Language Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-border text-gray-800 dark:text-gray-200 hover:from-primary-100 hover:to-purple-100 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 transition-all flex items-center space-x-1.5 shadow-md hover:shadow-lg"
                aria-label="Toggle language"
              >
                <FaGlobe size={16} />
                <span className="text-sm font-bold">{language.toUpperCase()}</span>
              </motion.button>
              
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05, rotate: 180 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-card dark:to-dark-border text-gray-800 dark:text-gray-200 hover:from-primary-100 hover:to-purple-100 dark:hover:from-primary-900/30 dark:hover:to-purple-900/30 transition-all shadow-md hover:shadow-lg"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                className="p-2 rounded-lg bg-gray-200 dark:bg-dark-card text-gray-800 dark:text-gray-200 flex items-center space-x-1"
                aria-label="Toggle language"
              >
                <FaGlobe size={16} />
                <span className="text-xs font-semibold">{language.toUpperCase()}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-dark-card text-gray-800 dark:text-gray-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="absolute top-0 right-0 bottom-0 w-64 bg-white dark:bg-dark-card shadow-2xl"
            >
              <div className="flex flex-col p-6 space-y-6 mt-16">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.href)}
                    className="text-left text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
