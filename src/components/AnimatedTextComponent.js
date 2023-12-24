import React from 'react';
import './Style.css';

const AnimatedTextComponent = () => {
    return (
        <div className="font-astro bg-gray text-white text-center leading-normal m-0">
            <p className="uppercase tracking-widest inline-block border-double border-t-4 border-b-4 border-white py-6 absolute top-1/4 left-1/2 transform -translate-x-1/2 w-40em text-xl">
                <span className="font-bold text-9xl block mx-auto animate-aitf bg-[url('https://i.ibb.co/RDTnNrT/animated-text-fill.png')] bg-repeat-y text-transparent bg-clip-text">
                    Your Text Here
                </span>
            </p>
        </div>
    );
};

export default AnimatedTextComponent;
