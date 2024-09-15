import React, { useEffect, useState, Suspense, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Spline from "@splinetool/react-spline";
import CombinedEffect from "../components/CombinedEffect";
import GlitchingTypingText from "../components/GlitchingTypingText";
import Socials from "../components/Socials";
import SplineBackground from "../components/SplineBackground";

const Homepage = () => {
  const navigate = useNavigate();
  const handleNavigation = useCallback(
    (route) => {
      navigate(`/website20-${route}`);
    },
    [navigate]
  );

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
            <span
              className="absolute right-4 bottom-[23%] md:bottom-[20%] md:right-[10%] p-[3%] pt-4 md:p-7  text-md text-justify font-thin max-w-[380px] sm:max-w-sm lg:max-w-lg fade-in glass-effect"
              id="homepage-slogan"
            >
              <GlitchingTypingText>
                Innovating at the Intersection of Art and Technology; I merge
                creativity with code to build impactful digital experiences. My
                work bridges aesthetics and functionality, shaping the future of
                digital innovation. Welcome to a portfolio where imagination is
                engineered to redefine the digital landscape.
              </GlitchingTypingText>
            </span>
            <section
              className="absolute top-[8%] left-[10%] w-[460px] h-full overflow-hidden text-left text-51xl gap-[10%] text-white "
              id="ntns"
            >
              <div>
                <h1
                  className="m-0 absolute text-3xlx font-inherit md:p-[3%] sm:text-base md:text-lg lg:text-xl"
                  id="name"
                >
                  <GlitchingTypingText> Kyrin Kalonji</GlitchingTypingText>
                </h1>
                <h2
                  className="m-0 absolute top-[8%] md:left-[30%] md:top-[12%] text-lg font-inherit inline-block text-orange"
                  id="title"
                  style={{ display: "block", visibility: "visible" }}
                >
                  <GlitchingTypingText startDelay={3000}>
                    Software Engineer
                  </GlitchingTypingText>
                </h2>
              </div>
              <nav
                className="absolute top-[18%] md:top[10%] md:top-[37%] flex flex-col items-start justify-start gap-[15px] hover:gap-10px p-[2%] text-right text-3xl text-white"
                id="init-navigation"
              >
                {["home", "about", "projects", "contact"].map((item, index) => (
                  <span
                    key={item}
                    className="relative font-thin cursor-pointer hover:text-orange hover:animate-distortAndGrow"
                    onClick={() => handleNavigation(item)}
                  >
                    <GlitchingTypingText startDelay={(index + 1) * 1000}>
                      {item.toUpperCase().replace("-", " ")}
                    </GlitchingTypingText>
                  </span>
                ))}
              </nav>
              <div className="absolute bottom-[25%] left-[35%] md:left-[12%]">
                <Socials />
              </div>
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
