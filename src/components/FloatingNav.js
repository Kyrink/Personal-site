import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingNav = ({ navItems }) => {
  const [isHovering, setIsHovering] = useState(false);
  let timer;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial={{
          width: 50, // Start with a small width to form a circle (adjust as needed)
          scale: 0.5,
          opacity: 0,
          borderRadius: "50%", // Make it circular initially
          border: "2px solid red",
        }}
        animate={{
          width: isHovering ? "100%" : 70, // Expand to full width on hover
          height: isHovering ? "fit-content" : 70,
          scale: isHovering ? 1 : 0.5,
          opacity: 1,
          borderRadius: isHovering ? "25px" : "50%", // Smoothly transition to 25px corner radius on hover
          border: isHovering ? "none" : "2px solid red",
        }}
        transition={{
          duration: 0.3,
        }}
        className="flex max-w-fit flex-col lg:flex-row fixed top-4 right-4 lg:top-6 lg:inset-x-0 lg:mx-auto rounded-full dark:bg-white bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 lg:px-8 py-4 items-center justify-center space-y-5 lg:space-y-0"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {navItems.map((navItem, idx) => (
          <motion.a
            key={`link-${idx}`}
            href={navItem.link}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="relative dark:text-neutral-50 w-full sm:w-auto uppercase items-center flex space-x-1 text-neutral-600 dark:hover:text-orange hover:text-orange no-underline px-2.5 lg:px-0 lg:mx-2.5"
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="sm:block text-md">{navItem.name}</span>
          </motion.a>
        ))}
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNav;
