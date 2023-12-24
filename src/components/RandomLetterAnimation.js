import React, { useState, useEffect } from 'react';

const RandomLetterAnimation = ({ phrase, animationDuration = 20000 }) => { // Increased duration
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        // Generate a random initial string of the same length as the phrase
        const randomString = () => Array.from({ length: phrase.length }, () =>
            String.fromCharCode(33 + Math.random() * (126 - 33))).join('');

        let currentText = randomString();
        setDisplayedText(currentText);

        // Gradually replace characters in currentText with the correct ones from phrase
        const interval = setInterval(() => {
            currentText = currentText.split('').map((char, index) =>
                Math.random() < 0.2 ? phrase[index] : char).join(''); // Reduced probability of replacement

            setDisplayedText(currentText);

            // Stop when the entire phrase is correctly displayed
            if (currentText === phrase) {
                clearInterval(interval);
            }
        }, animationDuration / phrase.length);

        return () => clearInterval(interval);
    }, [phrase, animationDuration]);

    return <div>{displayedText}</div>;
};

export default RandomLetterAnimation;

// Usage
// <RandomLetterAnimation phrase="Kyrin Kalonji" />
