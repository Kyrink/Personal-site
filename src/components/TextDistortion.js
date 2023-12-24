import React from 'react';
import { gsap } from 'gsap';

const TextDistortion = ({ text }) => {
  const onMouseEnter = (e) => {
    console.log("Hovering", e.target);
    gsap.to(e.target, { duration: 0.3, y: -10, scale: 1.5 });
  };

  const onMouseLeave = (e) => {
    console.log("Leaving", e.target);
    gsap.to(e.target, { duration: 0.3, y: 0, scale: 1 });
  };

  return (
    <span>
      {text.split('').map((char, index) => (
        <span key={index} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="inline-block">
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextDistortion;

