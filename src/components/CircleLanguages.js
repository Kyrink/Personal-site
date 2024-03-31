
import React, { useState } from 'react';

const CircleLanguages = () => {
  const [isGrid, setIsGrid] = useState(false);

  const icons = [
    'adobe-illustrator', 'adobe-photoshop', 'adobe-premiere-pro', 'C++',
    'css3', 'django', 'figma', 'Firebase-Dark', 'flutter', 'Github-Dark',
    'html-5', 'java', 'javascript', 'MySQL-Dark', 'PostgreSQL-Dark',
    'python', 'react', 'Google-cloud'
  ];

  const toggleLayout = () => setIsGrid(!isGrid);

  return (
    <div
      className={`relative top-[250%] left-[300%] w-[100px] h-[100px] circle ${isGrid ? 'grid-layout' : ''}`}
      onClick={toggleLayout}
    >
      {icons.map((icon, index) => (
        <span key={icon} className="circle-span" style={{ '--i': index + 1 }}>
          <img src={`/SVGIcons/${icon}.svg`} alt={icon} loading="lazy" className="circle-img" />
        </span>
      ))}
    </div>
  );
};

export default CircleLanguages;
