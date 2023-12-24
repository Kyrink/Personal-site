import { useState, useEffect } from "react";
const FallingBinary = () => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const line = {
                id: Math.random(),
                content: Array.from({ length: 30 }, () => Math.floor(Math.random() * 2)).join(''),
                duration: Math.random() * 5 + 5, // random duration from 5 to 10 seconds
                delay: Math.random() * -5 // random delay to make the animation out of sync
            };

            setLines(prevLines => {
                const newLines = [...prevLines, line];
                // Optionally, remove old lines to prevent the DOM from getting too heavy
                if (newLines.length > 50) {
                    return newLines.slice(-50); // Keep the latest 50 lines
                }
                return newLines;
            });
        }, 150); // Generate a new line every 150ms


        // Clean up the interval on unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden bg-black">
            {lines.map((line) => (
                <div
                    key={line.id}
                    className="binary-digit"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        '--duration': `${line.duration}s`,
                        '--delay': `${line.delay}s`
                    }}
                >
                    {line.content}
                </div>
            ))}
        </div>
    );
};

export default FallingBinary;

