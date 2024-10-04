import React, { useEffect, useState, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faJava,
  faPython,
  faJs,
  faReact,
  faGithub,
  faDocker,
  faGoogle,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

// Add all icons to the library
library.add(fab, fas, far);

import Spline from "@splinetool/react-spline";
import CombinedEffect from "../components/CombinedEffect";
import GlitchingTypingText from "../components/GlitchingTypingText";
import Socials from "../components/Socials";
import SplineBackground from "../components/SplineBackground";
import { PinContainer } from "../components/PinContainer";
import FloatingNav from "../components/FloatingNav";
import CircleLanguages from "../components/CircleLanguages";

const Homepage = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "website20-about" },
    { name: "Projects", link: "/website20-projects" },
    { name: "Contact", link: "website20-contact" },
  ];

  const [animationComplete, setAnimationComplete] = useState({
    kyrin: false,
    engineer: false,
  });
  const [showHomePage, setShowHomePage] = useState(false);

  // Check localStorage to see if the animation has already been completed
  useEffect(() => {
    const animationWasCompleted =
      localStorage.getItem("animationCompleted") === "true";
    setShowHomePage(animationWasCompleted);
  }, []);

  const handleAnimationComplete = (text) => {
    setAnimationComplete((prev) => {
      const newState = { ...prev, [text]: true };
      if (newState.kyrin && newState.engineer) {
        setTimeout(() => {
          localStorage.setItem("animationCompleted", "true");
          setShowHomePage(true);
        }, 4000);
      }
      return newState;
    });
  };

  const resetAnimation = () => {
    localStorage.removeItem("animationCompleted");
    setShowHomePage(false);
    setAnimationComplete({ kyrin: false, engineer: false });
  };

  useEffect(() => {
    if (animationComplete.kyrin && animationComplete.engineer) {
      const timer = setTimeout(() => {
        setShowHomePage(true);
      }, 8500);
      return () => clearTimeout(timer);
    }
  }, [animationComplete]);

  return (
    <main className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      <span
        className="absolute top-[95%] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="home-tag"
      >
        HOME
      </span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border overflow-hidden text-left text-xl text-white border-[1px] border-solid border-white
             w-[calc(100%-1rem)] h-[calc(100%-1rem)] 
             sm:w-[calc(100%-2rem)] sm:h-[calc(100%-2rem)] 
             md:w-[calc(100%-5rem)] md:h-[calc(100%-5rem)]"
        style={{
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
        }} // Centering the section
        id="rect"
      >
        <Spline scene="https://prod.spline.design/fVRkKrmo-sC6BD6S/scene.splinecode" />

        {!showHomePage ? (
          <>
            <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-rhapsody font-thin text-2xlx sm:text-base md:text-lg lg:text-xl inline-block">
              <CombinedEffect
                text="Kyrin Kalonji"
                onComplete={() => handleAnimationComplete("kyrin")}
              />
            </div>

            <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-rhapsody font-thin text-md sm:text-base md:text-lg inline-block">
              <CombinedEffect
                text="Software Engineer"
                startDelay={3}
                onComplete={() => handleAnimationComplete("engineer")}
              />
            </div>
          </>
        ) : (
          // Homepage Content
          <>
            <section
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
              id="ntns"
            >
              <FloatingNav navItems={navItems} />

              <div className="grid grid-cols-11 grid-rows-11 gap-3 w-full h-full absolute inset-0 p-[3%]">
                <div className="col-start-4 col-span-5 row-start-2 row-span-3 flex flex-col items-center justify-center glass-effect">
                  <h1
                    className="m-0 text-3xlx font-inherit sm:text-base md:text-lg lg:text-xl"
                    id="name"
                  >
                    <GlitchingTypingText>Kyrin Kalonji</GlitchingTypingText>
                  </h1>
                  <h2
                    className=" text-lg font-inherit inline-block text-orange"
                    id="title"
                  >
                    <GlitchingTypingText startDelay={3000}>
                      Software Engineer
                    </GlitchingTypingText>
                  </h2>
                </div>

                <div className="col-start-5 col-span-2 row-start-7 row-span-4 flex items-center justify-center relative">
                  <PinContainer
                    title="I'm Based in"
                    className="text-center text-white"
                    containerClassName="z-50"
                  >
                    <h2 className="underline">Based In</h2>
                    <h3 className="text-3xl">Portland, ME</h3>
                    <img
                      src="/ME.svg"
                      alt="Placeholder"
                      className="w-32 h-32 rounded-full mb-4 relative z-10"
                    />
                  </PinContainer>
                </div>
                <div className="col-start-7 col-span-5 row-start-8 row-span-4 glass-effect">
                  <h2 className="text-center pt-4 underline">A Bit About Me</h2>
                </div>
                <div className="col-start-7 col-span-2 row-start-5 row-span-3 flex flex-col items-center text-center glass-effect">
                  <h2 className="mt-4 underline">Reach Out</h2>
                  <div className="mb-5 flex-grow flex items-center justify-center">
                    <Socials />
                  </div>
                </div>
                <div className="col-start-1 col-span-4 row-start-5 row-span-4 flex flex-col items-center text-center glass-effect">
                  <h2 className="mt-4 underline">Key Skills</h2>
                  <div className="grid grid-cols-5 gap-4 mt-4 font-mono">
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faJava}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Java</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faPython}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Python</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faJs} className="text-[2.5rem]" />
                      <span className="text-[0.6rem] mt-1">JavaScript</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faReact}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faDatabase}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Database</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">GitHub</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faDocker}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Docker</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Google</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon icon={faAws} className="text-[2.5rem]" />
                      <span className="text-[0.6rem] mt-1">AWS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <FontAwesomeIcon
                        icon={faCode}
                        className="text-[2.5rem]"
                      />
                      <span className="text-[0.6rem] mt-1">Code</span>
                    </div>
                  </div>
                </div>
                <div className="col-start-9 p-3 col-span-3 row-start-1 row-span-7 text-center glass-effect flex flex-col justify-between">
                  <div>
                    <h2 className="mt-4 underline">Notable Project</h2>
                    <h3 className="mt-1 text-start text-3xl">SolaciumAI</h3>
                    <p className="text-sm mt-1 text-start">
                      Your AI-powered personal aid for all things related to
                      immigration.
                    </p>
                    <img
                      src="/muse/contentPage.webp"
                      alt="SolaciumAI"
                      className="w-[98%] h-auto rounded-md mt-2"
                    />
                  </div>
                  <button
                    onClick={() => navigate("/website20-projects")}
                    className=" p-3 text-sm bg-black text-white rounded-md hover:bg-orange transition-colors duration-300"
                  >
                    View All Projects
                  </button>
                </div>
              </div>

              <div className="absolute bottom-[25%] left-[35%] md:left-[12%]"></div>
            </section>
            <button
              onClick={resetAnimation}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 p-3 text-sm bg-black text-white rounded-5 transition-colors duration-300"
              style={{ ":hover": { color: "#A60202" } }}
            >
              <span className="hover:text-orange hover:animate-distortAndGrow">
                Replay Animation
              </span>
            </button>
          </>
        )}
      </section>
    </main>
  );
};

export default Homepage;
