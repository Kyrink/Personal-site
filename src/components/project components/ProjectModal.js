import React from 'react';
import { FaGithub, FaLink, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ projectName, projectDescription, demoLink, codeLink, imageUrls, closeModal }) => {
  return (
    <div className="w-full h-full fixed top-0 left-0 z-50 bg-black  shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border overflow-auto flex flex-col items-center justify-center px-[5%] pb-[5%] pt-[2%] gap-[30px] tracking-[normal] border-[1px] border-solid border-dimgray " >

      <div className="self-stretch flex flex-col items-center justify-center font-rhapsody text-lgx">
        <div className='self-stretch flex flex-col items-end justify-end left-[80%]'>
          <FaTimes size="40px" color="white" onClick={closeModal} style={{ cursor: 'pointer' }} />
        </div>
        <h1 className="m-0  relative text-inherit tracking-[0.1em] uppercase font-medium font-inherit flex items-center justify-center mq450:text-5xl mq900:text-[32px]">
          {projectName}
        </h1>
      </div>
      <section className=" flex flex-row items-start justify-center pt-0 px-0 box-border max-w-full text-center text-[15px] text-white font-rhapsody">
        <div className="relative tracking-[0.25em] leading-[17px] font-thin flex items-center justify-center shrink-0 max-w-[600px]">
          {projectDescription}
        </div>
      </section>
      <section className="flex flex-row items-end justify-center gap-[30px] max-w-full text-center text-sm text-white font-rhapsody mq900:flex-wrap">
        <div className="w-11 flex flex-col items-start justify-start gap-[15px]">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="self-stretch flex flex-col items-start justify-center pt-0 px-0 pb-2">
            <div className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange" style={{ '--icon-hover-color': 'var(--icon-hover)' }}>
              <span >
                <FaLink size="40" className=" icon-color text-icon-default group-hover:text-icon-hover" />
              </span>
              <div className="self-stretch relative tracking-[0.1em] hover:text-orange leading-[33px] uppercase font-thin inline-block min-w-[42px]">
                CODE
              </div>
            </div>
          </a>
          <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-[42.1px] flex flex-col items-center justify-start">
            <div className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange" style={{ '--icon-hover-color': 'var(--icon-hover)' }}>
              <span >
                <FaGithub size="40" className=" icon-color text-icon-default group-hover:text-icon-hover" />
              </span>
              <div className="self-stretch relative tracking-[0.1em] hover:text-orange leading-[33px] uppercase font-thin inline-block min-w-[42px]">
                CODE
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-[20px] min-h-[320px] max-w-full">
          {
            (imageUrls || []).map((imageUrl, index) => (
              <img
                key={index}
                className="h-[150px] w-[220px] relative  object-cover"
                loading="lazy"
                alt={`Project image ${index + 1}`}
                src={imageUrl}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default ProjectModal;