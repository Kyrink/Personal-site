import React, { useState, useEffect } from 'react';

const FallingLetters = ({ text, shouldStart }) => {
    const [letters, setLetters] = useState([]);
    const [animationStarted, setAnimationStarted] = useState(false);

    useEffect(() => {
        if (shouldStart && text) {
            setLetters(text.split(''));
            setAnimationStarted(true);
        }
    }, [text, shouldStart]);

    return (
        <div className="flex justify-center items-center h-screen overflow-hidden">
            {letters.map((letter, index) => (
                <span
                    key={index}
                    className={`${letter.trim() !== '' && animationStarted ? 'animate-fallOff' : ''}`}
                    style={{
                        animationDelay: letter.trim() !== '' && animationStarted ? `${Math.random() * 4}s` : '0s',
                        display: letter.trim() === '' ? 'inline-block' : 'inline',
                        width: letter.trim() === '' ? '0.5em' : 'auto'
                    }}
                >
                    {letter.trim() === '' ? '\u00A0' : letter}
                </span>
            ))}
        </div>
    );
};

export default FallingLetters;
