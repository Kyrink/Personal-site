import { useNavigate } from 'react-router-dom';
import CombinedEffect from '../components/CombinedEffect';
import React, { useEffect, useState } from "react";
import Spline from '@splinetool/react-spline';


const LandingPage = () => {
  const navigate = useNavigate();
  const [animationComplete, setAnimationComplete] = useState({ kyrin: false, engineer: false });

  const handleAnimationComplete = (text) => {
    setAnimationComplete((prev) => ({ ...prev, [text]: true }));
  };

  useEffect(() => {
    if (animationComplete.kyrin && animationComplete.engineer) {
      // Set a timeout to delay the navigation
      const timer = setTimeout(() => {
        navigate('/website20-home');
      }, 3800); // 3 seconds delay

      // Clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [animationComplete, navigate]);


  return (
    <div className="relative min-h-screen bg-gray w-full overflow-hidden text-left text-white font-rhapsody">
      {/* <Spline className="z-50 absolute" scene="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" /> */}
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
        <Spline scene="https://prod.spline.design/4JtsRGNUvM01JPnp/scene.splinecode" />
        <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-rhapsody font-thin text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl inline-block">
          <CombinedEffect text="Kyrin Kalonji" onComplete={() => handleAnimationComplete('kyrin')} />
        </div>
        <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-rhapsody font-thin text-sm sm:text-base md:text-lg inline-block">
          <CombinedEffect text="Software Engineer" startDelay={3} onComplete={() => handleAnimationComplete('engineer')} />
        </div>
      </section>
    </div >
  );
};

export default LandingPage;