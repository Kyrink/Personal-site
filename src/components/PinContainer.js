import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [transform, setTransform] = useState("translate(-50%, -50%) scale(1)");

  const onMouseEnter = () => {
    setIsHovered(true);
    setTransform("translate(-50%, -50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setIsHovered(false);
    setTransform("translate(-50%, -50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      to={href || "/"}
      className={classNames(
        "relative group cursor-pointer flex items-center justify-center",
        containerClassName
      )}
      style={{ zIndex: 100, maxWidth: "230px", width: "100%" }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        style={{
          perspective: "1000px",
          transform: "translateX(-50%)",
          maxWidth: "230px",
          width: "100%",
        }}
        className="absolute left-1/2 top-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
            transformStyle: "preserve-3d",
          }}
          className="absolute left-[50%] max-w-[230px] rounded-2xl shadow-lg group-hover:border-white/[0.2] transition duration-700 overflow-hidden glass-effect"
        >
          <div className={classNames("relative z-50 p-4 w-[230px]", className)}>
            {children}
          </div>
          {isHovered && (
            <div
              style={{
                transform: transform,
                transformStyle: "preserve-3d",
                zIndex: 110, // Increased z-index even further for the beam
                left: "50%",
                top: "67%",
                position: "absolute",
              }}
            >
              <AnimatedCircles />
              <LaserBeams />
            </div>
          )}
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className="pointer-events-none w-96 h-80 flex items-center justify-center opacity-0 group-hover:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className="absolute inset-x-0 flex justify-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: "800px", // Adjusted perspective
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-0 mt-0 -translate-x-1/2 -translate-y-1/2"
        >
          <AnimatedCircles />
        </div>

        <LaserBeams />
      </div>
    </motion.div>
  );
};

const AnimatedCircles = () => (
  <>
    <motion.div
      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
      animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
      transition={{ duration: 6, repeat: Infinity, delay: 0 }}
      className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-orange/[0.8] shadow-lg"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
      animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
      transition={{ duration: 6, repeat: Infinity, delay: 2 }}
      className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-orange/[0.08] shadow-lg"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
      animate={{ opacity: [0, 1, 0.5, 0], scale: 1 }}
      transition={{ duration: 6, repeat: Infinity, delay: 4 }}
      className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-orange/[0.08] shadow-lg"
    />
  </>
);

const LaserBeams = () => (
  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-orange translate-y-[14px] w-[2px] h-24 group-hover:h-48 blur-[2px]" />
    <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-orange translate-y-[14px] w-[2px] h-24 group-hover:h-48" />
    <motion.div className="absolute right-1/2 translate-x-[2px] bottom-1/2 bg-orange translate-y-[14px] w-[6px] h-[6px] rounded-full z-40 blur-[3px]" />
    <motion.div className="absolute right-1/2 translate-x-[1px] bottom-1/2 bg-orange translate-y-[14px] w-[3px] h-[3px] rounded-full z-40" />
  </div>
);
