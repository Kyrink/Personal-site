import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className="slide-in fixed top-0 left-0 w-full h-full bg-gray transform origin-bottom z-50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-full bg-gray transform origin-top z-50"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;
