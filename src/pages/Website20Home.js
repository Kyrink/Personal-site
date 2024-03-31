import React, { useRef, useCallback, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "../components/Scene";
import { useNavigate } from "react-router-dom";
import GlitchingTypingText from "../components/GlitchingTypingText";
import Socials from "../components/Socials";
import transition from "../transition";
import SplineBackground from "../components/SplineBackground";

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

  const handleNavigation = useCallback((route) => {
    navigate(`/website20-${route}`);
  }, [navigate]);

  useEffect(() => {
    const beforeUnloadHandler = () => {
      if (websocketInstance && websocketInstance.readyState === WebSocket.OPEN) {
        websocketInstance.close();
      }
    };

    const pageShowHandler = (event) => {
      if (event.persisted) {
        connectToWebSocket(); // Your connectToWebSocket function
      }
    };

    window.addEventListener('beforeunload', beforeUnloadHandler);
    window.addEventListener('pageshow', pageShowHandler);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
      window.removeEventListener('pageshow', pageShowHandler);
    };
  }, []); // Empty dependency array means this runs once on mount and cleanup on unmount


  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">

      <span
        className="absolute top-[773.1px] left-[10.3px] font-thin [transform:_rotate(-90.23deg)] [transform-origin:0_0]"
        id="home-tag"
      >
        HOME
      </span>
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

        <div className="flex justify-end items-start w-full h-full">
          {/* <div className="  right-100 w-3/4 h-3/4">
            <Canvas className=" z-0 absolute">
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
          </div> */}
          <SplineBackground sceneUrl="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" />


        </div>
        <span
          className="absolute width-[500px] height-[205px] bottom-20 right-[10%] p-[2%] text-3xl text-justify font-thin max-w-md sm:max-w-sm fade-in glass-effect"
          id="homepage-description"
        >
          <GlitchingTypingText>
            Et diam consequat et arcu sit aliquam. Aliquam ipsum elit orci quis
            tristique mauris consequat quam commodo. Turpis ut sit eleifend
            habitant pharetra. Quis laoreet ac massa hendrerit varius lacus sem
            diam dolor.
          </GlitchingTypingText>
        </span>

        <section
          className="absolute top-[8%] left-[10%] w-[460px] h-full overflow-hidden text-left text-51xl gap-[10%] text-white "
          id="ntns"
        >
          <div >
            <h1
              className="m-0 absolute top-[0px] left-[0px] text-xl font-inherit  p-[3%] pl-[10%] inline-block"
              id="name"
            >
              <GlitchingTypingText> Kyrin Kalonji</GlitchingTypingText>
            </h1>
            <h2
              className="m-0 absolute top-[15%] left-[31%] text-lg font-inherit inline-block text-orange"
              id="title"
            >
              <GlitchingTypingText
                startDelay={5000}
              > Software Engineer
              </GlitchingTypingText>
            </h2>
          </div>
          <nav className="absolute top-[37%] left-[10%] w-[180px] flex flex-col items-start justify-start gap-[15px] hover:gap-10px p-[2%] text-right text-md text-white" id="init-navigation">
            {['home', 'about', 'projects', 'contact'].map((item, index) => (
              <span
                key={item}
                className="relative font-thin cursor-pointer hover:text-orange hover:animate-distortAndGrow"
                onClick={() => handleNavigation(item)}
              >
                <GlitchingTypingText startDelay={(index + 1) * 1000}>
                  {item.toUpperCase().replace('-', ' ')}
                </GlitchingTypingText>
              </span>
            ))}
          </nav>
          <Socials />
        </section>
      </section>
    </div>
  );

};

export default Website20Home;
