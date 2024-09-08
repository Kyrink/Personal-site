import React, { Suspense, lazy } from "react";
const CircleLanguages = lazy(() => import("../components/CircleLanguages"));
import SplineBackground from "../components/SplineBackground";
import FloatingNav from "../components/FloatingNav";
import Timeline from "../components/timeline";
import timelineElements from "../components/timelineElements";

const Website20About = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "website20-about" },
    { name: "Projects", link: "/website20-projects" },
    { name: "Contact", link: "website20-contact" },
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
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          width: "calc(100% - 5rem)", // Subtracting the total margin (left + right)
          height: "calc(100% - 5rem)", // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="rect"
      >
        <FloatingNav navItems={navItems} />
        <Suspense fallback={<div>Loading...</div>}>
          <SplineBackground sceneUrl="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" />
        </Suspense>

        <div className="flex h-full text-white font-rhapsody">
          <div
            className="w-1/2 flex flex-col items-center justify-start text-left p-4 space-y-8"
            id="textleft"
          >
            {/* Skills & Languages Header */}
            <h1
              className="mt-16 z-2 text-inherit text-lgx font-inherit"
              id="skill-languages"
            >
              SKILLS & LANGUAGES
            </h1>

            {/* CircleLanguages Component */}
            <div
              className="relative z-10000 mt-4"
              style={{ cursor: "pointer" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                <CircleLanguages />
              </Suspense>
            </div>

            {/* About Me Section */}
            <div
              className="relative mt-8 top-[25%] p-4 flex flex-col items-center justify-center glass-effect"
              id="work"
            >
              <h2
                className="absolute transform -rotate-90 top-1/2 left-6 -translate-x-full -translate-y-1/2 text-lg"
                id="work-header"
              >
                ABOUT ME
              </h2>
              <span
                className="text-md text-justify max-w-lg sm:max-w-sm lg:max-w-[480px]"
                id="homepage-description"
              >
                Software Engineer, combining creativity and technical skill to
                create engaging and aesthetically pleasing digital experiences.
                I blend my skills in software engineering with my passion for
                UI/UX design to create solutions that are both functional and
                attractive. Beyond coding, my artistic background in painting &
                photography adds a unique touch to every project.
              </span>
            </div>
          </div>

          <div
            className="w-1/2 flex flex-col items-center justify-start overflow-hidden text-right p-4"
            id="textright"
          >
            <h1 className="mt-16 z-2 text-inherit text-lgx font-inherit">
              WORK EXPERIENCE
            </h1>
            <div className="w-full mt-8 h-[100vh] overflow-y-auto pr-4">
              <Timeline elements={timelineElements} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Website20About;
