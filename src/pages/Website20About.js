import React, { Suspense, lazy } from 'react';
const CircleLanguages = lazy(() => import("../components/CircleLanguages"));
import SplineBackground from '../components/SplineBackground';
import FloatingNav from '../components/FloatingNav';

const Website20About = () => {

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: 'website20-about' },
    { name: 'Projects', link: '/website20-projects' },
    { name: 'Contact', link: 'website20-contact' },
  ];
  return (
    <main className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      <span
        className="absolute top-[95%] left-[10.3px] font-thin [transform:_rotate(-90deg)] [transform-origin:0_0]"
        id="about-me-tag"
      >{`ABOUT ME & SKILLS`}</span>
      <section
        className="absolute top-1/2 left-1/2 box-border w-full h-full text-left text-50xl border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="rect"
      >
        <FloatingNav navItems={navItems} />
        <Suspense fallback={<div>Loading...</div>}>
          <SplineBackground sceneUrl="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" />
        </Suspense>

        <section
          className="absolute top-[20%] left-[51%] w-1/2 h-full flex flex-col items-center justify-start gap-[40px] text-left text-lg text-white font-rhapsody"
          id="texts"
        >
          <div className="relative flex items-center justify-start  py-[26px] px-[3%] gap-3 glass-effect" id="about-me">
            <h2 className="absolute transform -rotate-90 left-7 top-1/2 -translate-x-full -translate-y-1/2 text-lg " id="about-header">
              ABOUT ME
            </h2>
            <span className=" text-md text-justify max-w-lg sm:max-w-sm lg:max-w-[480px]" id="homepage-description" >
              Software Engineer, combining creativity and technical skill to create engaging and aesthetically
              pleasing digital experiences. I blend my skills in software engineering with
              my passion for UI/UX design to create solutions that are both functional and attractive.
              Beyond coding, my artistic background in painting & photography adds a unique touch to every project.
            </span>
          </div>

          <div className="relative flex items-center justify-start py-[31px] px-[3%] gap-4 glass-effect" id="education">
            <h2 className="absolute transform -rotate-90 left-8 top-1/2 -translate-x-full -translate-y-1/2 text-lg font-thin font-rhapsody" id="education-header">
              EDUCATION
            </h2>
            <span className=" text-md text-justify max-w-lg sm:max-w-sm lg:max-w-[480px]" id="education-text">
              I'm a recent graduate with a B.Sc in Computer Science at the University of Southern Maine.
              My academic journey was defined by a deep dive into the bedrock of computing.
              My coursework spans DSA, Systems Design, Software Engineering,
              Programming Paradigms, Computing for Data Science, Mathematical Modeling, and Numerical Analysis.
              This academic foundation equips me to tackle complex software challenges and drive innovations in technology.
            </span>
          </div>
        </section>
        <div
          className="absolute top-[10%] left-[5%] w-1/2 h-full flex flex-col items-start gap-4 text-left">
          <h1
            className="absolute m-0 left-[10%] z-2  text-inherit text-lgx  font-inherit"
            id="skill-languages"
          >SKILLS  & LANGUAGES</h1>
          <div className=" relative z-10000"
            style={{ cursor: 'pointer' }}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <CircleLanguages />
            </Suspense>
          </div>
          <div className="relative top-[40%] left-[10%] p-[3%] flex items-center justify-start gap-3 glass-effect" id="work">
            <h2 className="absolute transform -rotate-90 left-[-10px] top-1/2 -translate-x-full -translate-y-1/2 text-lg" id="work-header">
              WORK
            </h2>
            <span className=" text-md text-justify max-w-lg sm:max-w-sm lg:max-w-[480px]" id="work-text" >
              My work spans roles like Quality Engineer at Harvey Performance Co., optimizing processes;
              Teaching Assistant at the University of Southern Maine, guiding CS students;
              Subject Matter Expert at Abbott Diagnostics and Manufacturing Specialist at Texas Instruments,
              focusing on quality and process optimization.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Website20About;
