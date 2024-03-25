import React, { useState, useEffect } from "react";

const GlitchingTypingText = (props) => {
    const {
        children,
        element: Element = "p",
        className,
        blinkingCaret = false,
        nextCharProbability = 0.8,
        typingDuration = 3000,
        glitchProbability = 0.5,
        potentialGlitchInterval = 250,
        startDelay = 0,
        glitchColor = "red",
        disappearAfter = 0,
        onComplete
    } = props;

    const isString = typeof children === "string";
    const text = isString ? children : '';
    const [renderedText, setRenderedText] = useState(isString ? "" : null);
    const [sliceIndex, setSliceIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);
    const [typingIntervalID, setTypingIntervalID] = useState(null);
    const [glitchIntervalID, setGlitchIntervalID] = useState(null);
    const [textVisible, setTextVisible] = useState(true);


    const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?+";

    const randomizeTextCharacter = (textArray) => {
        const charToReplaceIndex = Math.floor(Math.random() * textArray.length);
        const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));

        return textArray.map((char, index) => {
            if (index === charToReplaceIndex) {
                // Wrap the glitched character in a span with a different color
                return <span key={index} style={{ color: glitchColor }}>{randomChar}</span>;
            }
            return <span key={index}>{char}</span>;
        });
    };

    const typingInterval = Math.floor(typingDuration / (text?.length || 1));

    useEffect(() => {
        if (!isString) {
            setStartTyping(true);
            return;
        }

        const delayTimer = setTimeout(() => {
            setStartTyping(true);
        }, startDelay);

        return () => clearTimeout(delayTimer);
    }, [startDelay, isString]);

    useEffect(() => {
        if (!startTyping || !isString) return;

        const gID = setInterval(() => {
            if (Math.random() > 1 - glitchProbability) {
                setRenderedText(randomizeTextCharacter([...text]));
            } else {
                if (renderedText !== text) {
                    setRenderedText([...text]);
                }
            }
        }, potentialGlitchInterval);
        setGlitchIntervalID(gID);

        const tID = setInterval(() => {
            if (Math.random() > 1 - nextCharProbability) {
                setSliceIndex((index) => index + 1);
            }
        }, typingInterval);
        setTypingIntervalID(tID);

        return () => {
            clearInterval(gID);
            clearInterval(tID);
        };

    }, [startTyping, text, isString]);

    useEffect(() => {
        if (!isString || sliceIndex >= text.length) {
            clearInterval(typingIntervalID);
            setTimeout(() => {
                clearInterval(glitchIntervalID);
                setRenderedText(text);
            }, 3000);
        }
    }, [sliceIndex, typingIntervalID, glitchIntervalID, text, isString]);

    useEffect(() => {
        // Separate useEffect for handling text visibility
        if (!isString || sliceIndex >= text.length) {
            clearInterval(typingIntervalID);
            setTimeout(() => {
                clearInterval(glitchIntervalID);
                setRenderedText(text);

                if (disappearAfter > 0) {
                    setTimeout(() => setTextVisible(false), disappearAfter * 1000);
                }
            }, 3000);
        }
    }, [sliceIndex, text, isString, disappearAfter]);

    useEffect(() => {
        if (!isString || sliceIndex >= text.length) {
            clearInterval(typingIntervalID);
            setTimeout(() => {
                clearInterval(glitchIntervalID);
                setRenderedText(text);
                if (onComplete) onComplete(); // Invoke the callback
            }, 4000);
        }
    }, [sliceIndex, typingIntervalID, glitchIntervalID, text, isString, onComplete]);

    const textClasses = `inline-block ${blinkingCaret ? 'blinking-class' : ''} ${className}`;

    return (
        <Element className={textClasses} style={{ display: textVisible ? 'block' : 'none' }}>
            {isString ? renderedText.slice(0, sliceIndex) : children}
        </Element>
    );
};

export default GlitchingTypingText;
