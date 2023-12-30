import { useCallback } from "react";
import CircleLanguages from "../components/CircleLanguages";
import GlitchingTypingText from "../components/GlitchingTypingText";
import Spline from '@splinetool/react-spline';
import NeuralNetworkNav from "../components/NeuralNetworkNav";

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
        <NeuralNetworkNav />
        {/* <Spline scene="https://prod.spline.design/4JtsRGNUvM01JPnp/scene.splinecode" /> */}
        <Spline className=" z-0 absolute"
          // style={{ pointerEvents: 'none' }} // This allows the mouse events to pass through the Spline component.
          scene="https://prod.spline.design/n7DMIKLSN2tAAdfU/scene.splinecode" />
        <section
          className="absolute top-[15%] left-[58%] w-1/2 h-full flex flex-col items-center justify-start gap-[40px] text-left text-lg text-white font-rhapsody"
          id="texts"
        >
          <div className="relative w-[571px] h-[164px] flex items-center justify-start pt-[22px] pb-[26px] gap-10" id="about-me">
            <h2 className="absolute transform -rotate-90 left-7 top-1/2 -translate-x-full -translate-y-1/2 text-lg " id="about-header">
              ABOUT ME
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="homepage-description" style={{ maxWidth: '400px' }}>
              Adipiscing vitae integer nulla iaculis. Pellentesque porttitor velit consequat morbi. Tincidunt pretium adipiscing sit mauris suscipit habitant sapien adipiscing turpis. Et urna facilisis at tincidunt leo.
            </span>
          </div>

          <div className="relative w-[571px] h-[178px] flex items-center justify-start pt-[31px] pb-[31px] gap-4" id="education">
            <h2 className="absolute transform -rotate-90 left-8 top-1/2 -translate-x-full -translate-y-1/2 text-lg font-thin font-rhapsody" id="education-header">
              EDUCATION
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="education-text" style={{ maxWidth: '400px' }}>
              Pharetra odio metus imperdiet eget et nibh. Dui ut lobortis enim bibendum pretium auctor. Libero quam imperdiet consequat in sit porta parturient non natoque.
            </span>
          </div>
          <div className="relative w-[571px] h-[145px] flex items-center justify-start gap-4" id="work">
            <h2 className="absolute transform -rotate-90 left-[-10px] top-1/2 -translate-x-full -translate-y-1/2 text-lg font-thin font-rhapsody" id="work-header">
              WORK
            </h2>
            <span className="ml-5 text-md text-justify max-w-md sm:max-w-sm" id="work-text" style={{ maxWidth: '400px' }}>
              Ultrices sit pellentesque ac fames purus dolor urna. Iaculis porta scelerisque tellus orci tristique diam quis integer neque. Porttitor turpis egestas in sed massa vulputate. Commodo diam tincidunt volutpat morbi.
            </span>
          </div>

        </section>
        <h1
          className="m-0 z-2 absolute top-[45%] left-[10%] text-inherit text-lgx  font-inherit"
          id="skill-languages"
        >SKILLS  & LANGUAGES</h1>
        <div className=" relative z-10000">
          <CircleLanguages />
        </div>

      </section>
    </div>
  );
};

export default Website20AboutMe;
