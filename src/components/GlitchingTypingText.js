import React, { useState, useEffect } from "react";

const GlitchingTypingText = ({
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
}) => {
    const text = typeof children === "string" ? children : "";
    const [renderedText, setRenderedText] = useState("");
    const [sliceIndex, setSliceIndex] = useState(0);
    const [textVisible, setTextVisible] = useState(true);

    // Start delay
    useEffect(() => {
        if (text) {
            const delayTimer = setTimeout(() => {
                setSliceIndex(1);
            }, startDelay);

            return () => clearTimeout(delayTimer);
        }
    }, [startDelay, text]);

    // Typing and glitch effects
    useEffect(() => {
        if (!text) return;

        const typingInterval = Math.floor(typingDuration / text.length);
        let tID;

        tID = setInterval(() => {
            if (Math.random() <= nextCharProbability) {
                setSliceIndex((index) => Math.min(index + 1, text.length));
            }
        }, typingInterval);

        return () => {
            clearInterval(tID);
        };
    }, [text, nextCharProbability, typingDuration]);

    // Render effect for glitches
    useEffect(() => {
        if (!text || sliceIndex >= text.length) return;

        let gID = setInterval(() => {
            if (Math.random() <= glitchProbability) {
                setRenderedText((currentText) => {
                    let chars = currentText.split("");
                    let index = Math.floor(Math.random() * chars.length);
                    chars[index] = String.fromCharCode(33 + Math.random() * (94));
                    return chars.join("");
                });
            }
        }, potentialGlitchInterval);

        return () => clearInterval(gID);
    }, [sliceIndex, text, glitchProbability, potentialGlitchInterval]);

    // Disappear and onComplete
    useEffect(() => {
        if (sliceIndex >= text.length) {
            if (disappearAfter > 0) {
                setTimeout(() => setTextVisible(false), disappearAfter * 1000);
            }
            if (onComplete) onComplete();
        }
    }, [sliceIndex, text.length, disappearAfter, onComplete]);

    // To ensure the renderedText is updated correctly with the slicing
    useEffect(() => {
        setRenderedText(text.slice(0, sliceIndex));
    }, [text, sliceIndex]);

    const renderTextWithGlitch = (textToRender) =>
        textToRender.split("").map((char, idx) => {
            return <span key={idx} style={Math.random() <= 0.1 ? { color: glitchColor } : {}}>{char}</span>;
        });

    const textClasses = `inline-block ${blinkingCaret ? "blinking-class" : ""} ${className || ""}`;

    return (
        <Element className={textClasses} style={{ display: textVisible ? "block" : "none" }}>
            {renderTextWithGlitch(renderedText)}
        </Element>
    );
};

export default GlitchingTypingText;
