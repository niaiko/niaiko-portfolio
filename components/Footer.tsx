"use client";

import { FaHeart, FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t("nav.home"), href: "home" },
    { name: t("nav.about"), href: "about" },
    { name: t("nav.projects"), href: "projects" },
    { name: t("nav.experience"), href: "experience" },
    { name: t("nav.contact"), href: "contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-dark-card border-t border-gray-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">{"<AD />"}</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
              {t("contact.title")}
            </h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.location}</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-dark-border text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} {personalInfo.name}. {t("footer.built")}</span>
            <FaHeart className="text-red-500 animate-pulse" />
            <span>Next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
