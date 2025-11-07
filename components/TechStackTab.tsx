"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
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
import { FaServer } from "react-icons/fa";

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
  SiOpenapi: SiSwagger,
  SiMicroservices: FaServer,
  SiAmazonaws: SiAmazon,
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

// Composant pour une carte de compétence individuelle
function SkillCard({ 
  skill, 
  index, 
  categoryIndex, 
  categoryColor 
}: { 
  skill: { name: string; level: number; icon: string };
  index: number;
  categoryIndex: number;
  categoryColor: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[skill.icon];
  const iconColor = techColors[skill.icon] || "#4B5563";

  return (
    <motion.div
      key={skill.name}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white dark:bg-dark-card rounded-2xl p-6 border-2 border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 transition-all shadow-lg hover:shadow-2xl">
        {/* Icon */}
        <div className="flex flex-col items-center space-y-3">
          <div className="relative">
            <Icon 
              className={`text-5xl transition-colors duration-300 ${!isHovered ? 'text-gray-700 dark:text-gray-300' : ''}`}
              style={{ 
                color: isHovered ? iconColor : undefined 
              }}
            />
            
            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 bg-gradient-to-br ${categoryColor} rounded-full`}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          {/* Name */}
          <span className="text-sm font-semibold text-center text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>

          {/* Level Bar */}
          <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: categoryIndex * 0.1 + index * 0.05 + 0.3 }}
              className={`h-full bg-gradient-to-r ${categoryColor}`}
            />
          </div>

          {/* Level Percentage */}
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {skill.level}%
          </span>
        </div>
      </div>

      {/* Floating Badge on Hover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute -top-2 -right-2 bg-gradient-to-br from-primary-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
      >
        Expert
      </motion.div>
    </motion.div>
  );
}

export default function TechStackTab() {
  const categories = [
    { title: "Languages", skills: skills.languages, color: "from-blue-500 to-cyan-500" },
    { title: "Frontend", skills: skills.frontend, color: "from-purple-500 to-pink-500" },
    { title: "Backend", skills: skills.backend, color: "from-green-500 to-emerald-500" },
    { title: "Tools & Others", skills: skills.tools, color: "from-orange-500 to-red-500" },
  ];

  return (
    <div className="space-y-12">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
        >
          {/* Category Title */}
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className={`w-2 h-8 rounded-full bg-gradient-to-b ${category.color} mr-3`} />
            {category.title}
          </h3>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {category.skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                categoryIndex={categoryIndex}
                categoryColor={category.color}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
