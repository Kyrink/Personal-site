import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className="slide-in fixed top-0 left-0 w-full h-full transform origin-bottom z-50"
        style={{
          backgroundColor: "#000000",
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-full transform origin-top z-50"
        style={{
          backgroundColor: "#660000",
        }}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1,
        }}
      />
    </>
  );
};

export default PageTransition;
