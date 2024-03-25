import React, { useState } from 'react';

const ProjectBar = ({ title, imageUrls, onClick, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  const animationDuration = 0.5;
  const delayIncrement = 0.1;
  const totalImages = imageUrls.length;

  const titleStyle = {
    transform: isHovered ? 'scale(1.2)' : 'scale(1) translateY(55%)',
    transition: 'transform 0.3s ease-in-out, color 0.2s ease-in-out',
    fontFamily: isHovered ? 'Rhapsody, sans-serif' : 'Helvetica Neue, sans-serif',
    color: isHovered ? 'red' : 'white',
    transformOrigin: 'center left',
  };

  const truncateText = (text, length) => {
    if (!text) {
      return "Description not available.";
    }
    if (text.length > length) {
      return text.substring(0, length) + '. . .';
    }
    return text;
  };


  const descriptionStyle = {
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
    color: 'white',
    fontSize: '18px',
    marginTop: '5px',
    textAlign: 'left',
    fontFamily: 'Rhapsody, sans-serif',
    maxWidth: '550px',
    letterSpacing: '0.15rem'
  };

  return (
    <div
      className={`group hover:bg-neutral-900 self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-[15px] px-[5%] max-w-full text-center text-lg text-white font-helvetica-neue border-[0.5px] border-solid border-neutral-800 mq900:flex-wrap cursor-pointer ${isHovered ? 'expandedHeight' : 'normalHeight'}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-start justify-start">
        <div className="relative tracking-[0.1em] uppercase font-thin mq450:text-3xl mq450:leading-[53px] mq900:text-11xl mq900:leading-[70px]" style={titleStyle}>
          {title}
        </div>
        <div style={descriptionStyle}>
          {truncateText(description, 90)}
        </div>
      </div>

      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full">
        <div className="images-container self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap">
          {imageUrls.slice(0, 3).map((imageUrl, index) => (
            <img
              key={index}
              style={{
                opacity: 0,
                animation: isHovered ? `fadeEffect ${animationDuration}s ease-in-out ${(totalImages - 1 - index) * delayIncrement}s forwards` : 'none',
              }}
              className="h-[150px] w-[200px] relative rounded-[8.33px] object-cover"
              alt=""
              src={imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBar;
