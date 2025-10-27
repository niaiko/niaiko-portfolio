"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProjectsTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.slice(0, 6).map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ y: -10 }}
          className="group bg-white dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-lg hover:shadow-2xl"
        >
          {/* Project Image */}
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/20 dark:to-purple-900/20">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 space-x-4">
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="View GitHub"
              >
                <FaGithub size={20} />
              </motion.a>
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary-600 hover:text-white transition-colors"
                aria-label="View Live Demo"
              >
                <FaExternalLinkAlt size={20} />
              </motion.a>
            </div>
          </div>

          {/* Project Info */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-400 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="text-xs px-3 py-1 bg-gray-100 dark:bg-dark-border text-gray-600 dark:text-gray-400 rounded-full">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
