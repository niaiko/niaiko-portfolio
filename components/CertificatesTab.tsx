"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates } from "@/lib/data";
import { FaAward, FaExternalLinkAlt, FaDownload, FaEye, FaTimes, FaCheckCircle } from "react-icons/fa";

export default function CertificatesTab() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const openPreview = (certId: number) => {
    setSelectedCert(certId);
  };

  const closePreview = () => {
    setSelectedCert(null);
  };

  // Fermer avec la touche ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert !== null) {
        closePreview();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedCert]);

  const currentCert = certificates.find(c => c.id === selectedCert);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            {/* Gradient Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500 blur"></div>
            
            <motion.div 
              className="relative bg-white dark:bg-dark-card rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 dark:border-dark-border hover:border-primary-500 dark:hover:border-primary-500 group-hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openPreview(cert.id)}
              whileHover={{ y: -8 }}
            >
              {/* PDF Preview Thumbnail - Full Card */}
              <div className="relative h-80 bg-gray-100 dark:bg-dark-border/30 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <iframe
                    src={`${cert.pdfUrl}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-full pointer-events-none scale-95 group-hover:scale-100 transition-transform duration-500"
                    title={`Aperçu ${cert.name}`}
                  />
                </div>
                
                {/* Overlay hover avec icône zoom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="bg-white dark:bg-dark-card rounded-full p-5 shadow-2xl">
                      <FaEye className="text-4xl text-primary-600 dark:text-primary-400" />
                    </div>
                  </motion.div>
                  
                  {/* Text hint */}
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="text-white font-bold text-lg drop-shadow-lg">
                      Cliquez pour voir les détails
                    </p>
                  </div>
                </div>

                {/* Award Icon Badge */}
                <div className="absolute top-4 right-4 p-3 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl shadow-lg">
                  <FaAward className="text-2xl text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {selectedCert && currentCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closePreview}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-7xl bg-white dark:bg-dark-card rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-200 dark:border-dark-border bg-gradient-to-r from-primary-50 via-purple-50 to-pink-50 dark:from-primary-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg shadow-lg">
                        <FaAward className="text-2xl text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                          {currentCert.name}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <FaCheckCircle className="text-primary-600 dark:text-primary-400" />
                          <p className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                            {currentCert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Certificate Details */}
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">ID:</span>
                        <span className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300">{currentCert.credential}</span>
                      </div>
                      <div className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-dark-card rounded-lg shadow-sm">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-semibold">Délivré:</span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{currentCert.date}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-2 ml-4">
                    <motion.a
                      href={currentCert.pdfUrl}
                      download
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg"
                      title="Télécharger le certificat"
                    >
                      <FaDownload className="text-lg" />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={closePreview}
                      className="p-3 bg-gray-200 dark:bg-dark-border text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-dark-border/80 transition-colors shadow-lg"
                      title="Fermer"
                    >
                      <FaTimes className="text-lg" />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* PDF Viewer with Zoom */}
              <div className="relative w-full h-[75vh] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-dark-bg dark:to-dark-border/50 overflow-auto">
                <div className="min-h-full flex items-center justify-center p-4">
                  <div className="w-full max-w-6xl bg-white dark:bg-dark-card shadow-2xl rounded-lg overflow-hidden">
                    <iframe
                      src={`${currentCert.pdfUrl}#view=FitH&zoom=125`}
                      className="w-full h-[70vh]"
                      title={currentCert.name}
                      style={{ border: 'none' }}
                    />
                  </div>
                </div>
                
                {/* Zoom indicator */}
                <div className="absolute top-4 right-4 bg-white dark:bg-dark-card px-3 py-2 rounded-lg shadow-lg border border-gray-200 dark:border-dark-border">
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center space-x-2">
                    <FaEye className="text-primary-600 dark:text-primary-400" />
                    <span>Vue agrandie</span>
                  </p>
                </div>
              </div>

              {/* Modal Footer with Details */}
              <div className="p-6 border-t-2 border-gray-200 dark:border-dark-border bg-gradient-to-r from-gray-50 to-white dark:from-dark-border/30 dark:to-dark-card">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-semibold">À propos de ce certificat:</span><br />
                      Ce certificat atteste de la réussite de la formation <span className="font-semibold text-gray-900 dark:text-white">{currentCert.name}</span> délivrée par <span className="font-semibold text-primary-600 dark:text-primary-400">{currentCert.issuer}</span>.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                        Certificat officiel
                      </span>
                      <span className="px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        Vérifiable en ligne
                      </span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={currentCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-primary-600 via-purple-600 to-pink-600 hover:from-primary-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl transition-all shadow-xl hover:shadow-2xl"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                    <span className="font-bold">Vérifier l&apos;authenticité</span>
                  </motion.a>
                </div>
                
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                  💡 Cliquez en dehors de cette fenêtre ou appuyez sur ESC pour fermer
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
