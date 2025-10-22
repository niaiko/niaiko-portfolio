"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: () => "",
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function getTranslations(lang: Language): Record<string, string> {
  const translations = {
    fr: {
      // Navigation
      "nav.home": "Accueil",
      "nav.about": "À Propos",
      "nav.projects": "Projets",
      "nav.experience": "Expérience",
      "nav.contact": "Contact",
      
      // Hero
      "hero.greeting": "Prêt à innover",
      "hero.title": "Développeur Full Stack",
      "hero.subtitle": "Création d'applications web modernes et performantes",
      "hero.cta": "Voir mes projets",
      "hero.contact": "Me contacter",
      
      // About
      "about.title": "À Propos de Moi",
      "about.subtitle": "Découvrez mon parcours et mes compétences",
      "about.description": "Passionné par le développement web et mobile, je crée des applications modernes et performantes. Avec plus de 6 ans d'expérience, je maîtrise l'ensemble du stack JavaScript/TypeScript, de la conception à la mise en production.",
      "about.stats.experience": "Années d'expérience",
      "about.stats.projects": "Projets réalisés",
      "about.stats.clients": "Clients satisfaits",
      "about.stats.awards": "Certifications",
      "about.skills.title": "Compétences Techniques",
      "about.skills.languages": "Langages",
      "about.skills.frontend": "Frontend",
      "about.skills.backend": "Backend",
      "about.skills.tools": "Outils",
      
      // Projects
      "projects.title": "Mes Projets",
      "projects.subtitle": "Découvrez mes réalisations récentes",
      "projects.filter.all": "Tous",
      "projects.filter.webapp": "Applications Web",
      "projects.filter.mobile": "Mobile",
      "projects.filter.dashboard": "Dashboards",
      "projects.viewcode": "Voir le code",
      "projects.livedemo": "Démo en ligne",
      
      // Experience
      "experience.title": "Mon Parcours",
      "experience.subtitle": "Expérience professionnelle et formation",
      "experience.present": "Présent",
      
      // Contact
      "contact.title": "Me Contacter",
      "contact.subtitle": "Discutons de votre projet",
      "contact.description": "Une question ? Un projet en tête ? N'hésitez pas à me contacter !",
      "contact.form.name": "Nom complet",
      "contact.form.email": "Email",
      "contact.form.subject": "Sujet",
      "contact.form.message": "Message",
      "contact.form.send": "Envoyer le message",
      "contact.form.sending": "Envoi en cours...",
      "contact.form.success": "Message envoyé avec succès !",
      "contact.form.error": "Une erreur s'est produite. Veuillez réessayer.",
      "contact.info.email": "Email",
      "contact.info.location": "Localisation",
      "contact.info.availability": "Disponibilité",
      
      // Footer
      "footer.rights": "Tous droits réservés",
      "footer.built": "Créé avec",
      "footer.by": "par",
    },
    en: {
      // Navigation
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.contact": "Contact",
      
      // Hero
      "hero.greeting": "Ready to innovate",
      "hero.title": "Full Stack Developer",
      "hero.subtitle": "Building modern and performant web applications",
      "hero.cta": "View my work",
      "hero.contact": "Get in touch",
      
      // About
      "about.title": "About Me",
      "about.subtitle": "Discover my journey and skills",
      "about.description": "Passionate about web and mobile development, I create modern and performant applications. With over 6 years of experience, I master the entire JavaScript/TypeScript stack, from design to production deployment.",
      "about.stats.experience": "Years of experience",
      "about.stats.projects": "Projects completed",
      "about.stats.clients": "Happy clients",
      "about.stats.awards": "Certifications",
      "about.skills.title": "Technical Skills",
      "about.skills.languages": "Languages",
      "about.skills.frontend": "Frontend",
      "about.skills.backend": "Backend",
      "about.skills.tools": "Tools",
      
      // Projects
      "projects.title": "My Projects",
      "projects.subtitle": "Check out my recent work",
      "projects.filter.all": "All",
      "projects.filter.webapp": "Web Apps",
      "projects.filter.mobile": "Mobile",
      "projects.filter.dashboard": "Dashboards",
      "projects.viewcode": "View code",
      "projects.livedemo": "Live demo",
      
      // Experience
      "experience.title": "My Journey",
      "experience.subtitle": "Professional experience and education",
      "experience.present": "Present",
      
      // Contact
      "contact.title": "Get In Touch",
      "contact.subtitle": "Let's discuss your project",
      "contact.description": "Have a question? A project in mind? Feel free to contact me!",
      "contact.form.name": "Full name",
      "contact.form.email": "Email",
      "contact.form.subject": "Subject",
      "contact.form.message": "Message",
      "contact.form.send": "Send message",
      "contact.form.sending": "Sending...",
      "contact.form.success": "Message sent successfully!",
      "contact.form.error": "An error occurred. Please try again.",
      "contact.info.email": "Email",
      "contact.info.location": "Location",
      "contact.info.availability": "Availability",
      
      // Footer
      "footer.rights": "All rights reserved",
      "footer.built": "Built with",
      "footer.by": "by",
    },
  };

  return translations[lang];
}
