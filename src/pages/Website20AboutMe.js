import CircleLanguages from "../components/CircleLanguages";
import Spline from '@splinetool/react-spline';

const Website20AboutMe = () => {
  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      <span
        className="absolute top-[773.1px] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="about-me-tag"
      >{`ABOUT ME & SKILLS`}</span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="rect"
      >
        <Spline className=" z-0 absolute"
          // style={{ pointerEvents: 'none' }} // This allows the mouse events to pass through the Spline component.
          scene="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" />
        <section
          className="absolute top-1/4 left-[51%] w-1/2 h-full flex flex-col items-center justify-start gap-[40px] text-left text-lg text-white font-rhapsody"
          id="texts"
        >
          <div className="relative h-[164px] flex items-center justify-start pt-[22px] pb-[26px] gap-4" id="about-me">
            <h2 className="absolute transform -rotate-90 left-7 top-1/2 -translate-x-full -translate-y-1/2 text-lg " id="about-header">
              ABOUT ME
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="homepage-description" style={{ maxWidth: '480px' }}>
              Software Engineer, combining creativity and technical skill to create engaging and aesthetically
              pleasing digital experiences. I blend my skills in software engineering with
              my passion for UI/UX design to create solutions that are both functional and attractive.
              Beyond coding, my artistic background in painting & photography adds a unique touch to every project.
            </span>
          </div>

          <div className="relative flex items-center justify-start pt-[31px] pb-[31px] gap-4" id="education">
            <h2 className="absolute transform -rotate-90 left-8 top-1/2 -translate-x-full -translate-y-1/2 text-lg font-thin font-rhapsody" id="education-header">
              EDUCATION
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="education-text" style={{ maxWidth: '480px' }}>
              I'm a recent graduate with a B.Sc in Computer Science at the University of Southern Maine.
              My academic journey was defined by a deep dive into the bedrock of computing.
              My coursework spans DSA, Systems Design, Software Engineering,
              Programming Paradigms, Computing for Data Science, Mathematical Modeling, and Numerical Analysis.
              This academic foundation equips me to tackle complex software challenges and drive innovations in technology.
            </span>
          </div>
        </section>
        <div
          className="absolute top-[10%] left-[5%] w-1/2 h-full flex flex-col items-start gap-4 text-left"        >
          <h1
            className="m-0 z-2 absolute text-inherit text-lgx  font-inherit"
            id="skill-languages"
          >SKILLS  & LANGUAGES</h1>
          <div className=" relative z-10000"
            style={{ cursor: 'pointer' }}
          >
            <CircleLanguages />
          </div>
          <div className="relative top-[40%] left-[10%] h-[145px] flex items-center justify-start gap-3" id="work">
            <h2 className="absolute transform -rotate-90 left-[-10px] top-1/2 -translate-x-full -translate-y-1/2 text-lg" id="work-header">
              WORK
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="work-text" style={{ maxWidth: '440px' }}>
              My work spans roles like Quality Engineer at Harvey Performance Co., optimizing processes;
              Teaching Assistant at the University of Southern Maine, guiding CS students;
              Subject Matter Expert at Abbott Diagnostics and Manufacturing Specialist at Texas Instruments,
              focusing on quality and process optimization. Full Resume
            </span>
          </div>

        </div>


      </section>
    </div>
  );
};

export default Website20AboutMe;
