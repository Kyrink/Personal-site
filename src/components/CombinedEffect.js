import React, { useState } from 'react';
import GlitchingTypingText from './GlitchingTypingText';
import FallingLetters from './FallingLetters';

const CombinedEffect = ({ text, onComplete }) => {
    const [showFallingEffect, setShowFallingEffect] = useState(false);

    const handleTypingCompleted = () => {
        setShowFallingEffect(true);
        onComplete(); // Call onComplete when the typing is done
    };

    return (
        <div>
            {!showFallingEffect && (
                <GlitchingTypingText onComplete={handleTypingCompleted}>
                    {text}
                </GlitchingTypingText>
            )}
            {showFallingEffect && (
                <FallingLetters text={text} shouldStart={showFallingEffect} />
            )}
        </div>
    );
};

export default CombinedEffect;

