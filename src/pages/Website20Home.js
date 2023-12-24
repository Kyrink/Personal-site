import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../components/Scene";
import { useNavigate } from "react-router-dom";
import GlitchingTypingText from "../components/GlitchingTypingText";
import TextDistortion from "../components/TextDistortion";

//Makes the laptop float and rotate
const FloatingAnimation = ({ children, speed = 2, amplitude = 0.2 }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    // Vertical motion
    ref.current.position.y = Math.sin(t) * amplitude;

    // Rotating the object along the x-axis
    ref.current.rotation.y += 0.01;

    // Scaling up and down
    const scale = 1 + Math.sin(t) * 0.1;
    ref.current.scale.set(scale, scale, scale);
  });

  return <group ref={ref}>{children}</group>;
};




const Website20Home = () => {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    switch (route) {
      case 'home':
        navigate('/website20-home');
        break;
      case 'about':
        navigate('/website20-about-me');
        break;
      case 'projects':
        navigate('/website20-projects');
        break;
      case 'contact':
        navigate('/website20-contact-me');
        break;
      default:
        navigate('/');
    }
  };

  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      <span
        className="absolute top-[773.1px] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="home-tag"
      >
        HOME
      </span>
      <section
        className="absolute top-1/2 left-1/2 bg-gray box-border w-full h-full overflow-hidden text-left text-50xl text-white  border-[1px] border-solid border-white"
        style={{
          transform: 'translate(-50%, -50%)',
          top: '50%',
          left: '50%',
          width: 'calc(100% - 5rem)', // Subtracting the total margin (left + right)
          height: 'calc(100% - 5rem)' // Subtracting the total margin (top + bottom)
        }} // Centering the section
        id="rect"
      >
        <span
          className="absolute bottom-20 right-[10%] p-[2%] text-sm text-justify font-thin max-w-md sm:max-w-sm glass-effect"
          id="homepage-description"
          style={{ maxWidth: '442px', }}
        >
          <GlitchingTypingText>
            Et diam consequat et arcu sit aliquam. Aliquam ipsum elit orci quis
            tristique mauris consequat quam commodo. Turpis ut sit eleifend
            habitant pharetra. Quis laoreet ac massa hendrerit varius lacus sem
            diam dolor.
          </GlitchingTypingText>
        </span>
        <div className="flex justify-end items-start w-full h-full">
          <div className="right-100 w-3/4 h-3/4">
            <Canvas>
              <perspectiveCamera makeDefault fov={75} position={[0, 0, 5]} />
              <ambientLight color={"white"} intensity={5.5} />
              <pointLight position={[10, 10, 10]} />
              <OrbitControls />
              <Suspense fallback={null}>
                <FloatingAnimation speed={1} amplitude={0.5}>
                  <Scene scale={[3, 3, 3]} />
                </FloatingAnimation>
              </Suspense>
            </Canvas>
          </div>
        </div>
        <section
          className="absolute top-[11%] left-[12%] w-[460px] h-full overflow-hidden text-left text-51xl gap-[10%] text-white "
          id="ntns"
        >
          <h1
            className="m-0 absolute top-[0px] left-[0px] text-xl font-inherit inline-block"
            id="name"
          >
            <GlitchingTypingText> Kyrin Kalonji
            </GlitchingTypingText>
          </h1>
          <h2
            className="m-0 absolute top-[13%] left-[25%] text-lg font-inherit inline-block text-orange"
            id="title"
          >
            <GlitchingTypingText
              startDelay={5000}
            > Software Engineer
            </GlitchingTypingText>
          </h2>
          <nav className="m-0 relative top-[35%] left-[15%]  w-[180px] flex flex-col items-center justify-start gap-[15px] hover:gap-10px p-[2%] text-right text-md text-white glass-effect" id="init-navigation">
            <span className="relative font-thin cursor-pointer hover:text-orange hover:animate-distortAndGrow" id="home-option" onClick={() => handleNavigation('home')}>
              <GlitchingTypingText startDelay={1000} >HOME</GlitchingTypingText>
            </span>
            <span className="relative font-thin cursor-pointer hover:text-orange hover:animate-distortAndGrow" id="about-option" onClick={() => handleNavigation('about')}>
              <GlitchingTypingText startDelay={3000}>ABOUT ME</GlitchingTypingText>
            </span>
            <span className="relative font-thin cursor-pointer hover:text-orange hover:animate-distortAndGrow" id="project-option" onClick={() => handleNavigation('projects')}>
              <GlitchingTypingText startDelay={5000}>PROJECTS</GlitchingTypingText>
            </span>
            <span className="relative font-thin  cursor-pointer hover:text-orange hover:animate-distortAndGrow" id="contact-option" onClick={() => handleNavigation('contact')}>
              <GlitchingTypingText startDelay={7000}>CONTACT ME</GlitchingTypingText>
            </span>
          </nav>

          <div
            className="absolute top-[70%] left-[10%] flex flex-row items-start justify-start gap-[40px]"
            id="socials"
          >
            <img
              className="relative w-[57.6px] h-[57.6px] hover:text-orange hover:animate-distortAndGrow"
              alt=""
              src="/git.svg"
            />
            <img
              className="relative w-[60px] h-[60px] hover:text-orange hover:animate-distortAndGrow"
              alt=""
              src="/-icon-linkedin.svg"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Website20Home;
