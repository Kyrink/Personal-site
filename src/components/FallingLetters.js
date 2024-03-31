import React, { useEffect, useMemo, useState } from 'react';

const FallingLetters = ({ text, shouldStart }) => {
    const [isAnimationTriggered, setIsAnimationTriggered] = useState(false);

    useEffect(() => {
        if (shouldStart && text) {
            setIsAnimationTriggered(true);
        }
    }, [shouldStart, text]);

    // Use useMemo to only recompute the letters array when `text` changes
    const letters = useMemo(() => text?.split('') || [], [text]);

    // Pre-calculate animation delays to avoid recalculating on each render
    const animationDelays = useMemo(() => letters.map(() => `${Math.random() * 4}s`), [letters]);

    return (
        <div className="flex justify-center items-center h-screen overflow-hidden">
            {letters.map((letter, index) => {
                const isSpace = letter.trim() === '';
                const animateClass = isSpace || !isAnimationTriggered ? '' : 'animate-fallOff';
                const style = {
                    animationDelay: isAnimationTriggered ? animationDelays[index] : '0s',
                    display: isSpace ? 'inline-block' : 'inline',
                    width: isSpace ? '0.5em' : 'auto'
                };
                const displayLetter = isSpace ? '\u00A0' : letter;

                return (
                    <span key={index} className={animateClass} style={style}>
                        {displayLetter}
                    </span>
                );
            })}
        </div>
    );
};

export default FallingLetters;
