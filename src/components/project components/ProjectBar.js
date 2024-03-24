import React from 'react';

const ProjectBar = ({ title, imageUrls, onClick }) => {
  return (
    <div className="group self-stretch box-border overflow-hidden flex flex-row items-center justify-between py-[18px] px-[5%] max-w-full text-center text-lg text-white font-helvetica-neue border-[0.5px] border-solid border-white mq900:flex-wrap cursor-pointer" onClick={onClick}>
      <div className="relative tracking-[0.1em] leading-[234.52%] uppercase font-thin mq450:text-3xl mq450:leading-[53px] mq900:text-11xl mq900:leading-[70px]">
        {title}
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0 box-border max-w-full">
        <div className="images-container self-stretch flex flex-row items-start justify-center gap-4 mq450:flex-wrap opacity-0 group-hover:opacity-1 transition-opacity">
          {imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              className="h-[83.3px] w-[83.3px] relative rounded-[8.33px] object-cover"
              loading="lazy"
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

