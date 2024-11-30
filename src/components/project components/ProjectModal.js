import React, { useEffect } from "react";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({
  projectName,
  projectDescription,
  demoLink,
  codeLink,
  imageUrls,
  closeModal,
}) => {
  useEffect(() => {
    const rect = document.getElementById("rect");
    if (rect) {
      rect.style.overflow = "hidden";
    }
    return () => {
      if (rect) {
        rect.style.overflow = "auto";
      }
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-50 flex items-start justify-center bg-black/95"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="w-full h-full p-6 flex flex-col overflow-y-auto scrollbar-hide"
        >
          {/* Close button */}
          <div className="self-end mb-4">
            <button
              onClick={closeModal}
              className="text-white hover:text-orange transition-colors"
            >
              <FaTimes size="40px" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col items-center">
            <h1 className="text-4xl text-center tracking-[0.1em] uppercase font-medium mb-8">
              {projectName}
            </h1>

            <div className="max-w-2xl mx-auto text-center mb-8">
              <p className="tracking-[0.25em] leading-relaxed">
                {projectDescription}
              </p>
            </div>

            <div className="flex justify-center gap-8 mb-12">
              {demoLink && (
                <ProjectLink href={demoLink} icon={FaLink} text="Demo" />
              )}
              {codeLink && (
                <ProjectLink href={codeLink} icon={FaGithub} text="Code" />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
              {(imageUrls || []).map((imageUrl, index) => (
                <motion.img
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                  alt={`Project image ${index + 1}`}
                  src={imageUrl}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const ProjectLink = ({ href, icon: Icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2"
  >
    <Icon
      size="40"
      className="text-white group-hover:text-orange transition-colors"
    />
    <span className="text-sm tracking-[0.1em] uppercase group-hover:text-orange transition-colors">
      {text}
    </span>
  </a>
);

export default ProjectModal;
