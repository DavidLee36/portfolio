import React, { useState } from 'react';
import "../styles/home.css";

export const HexGrid: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const [lightPosition, setLightPosition] = useState({ x: 50, y: 50 });
    const [isMouseInside, setIsMouseInside] = useState(false); // State to track mouse presence

    const moveLight = (event: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = event;

        const { left, top } = (event.currentTarget as HTMLDivElement).getBoundingClientRect();

        const newX = clientX - left;
        const newY = clientY - top;

        // Center the light around the mouse by subtracting half of its size
        setLightPosition({ x: newX - 120, y: newY - 120 }); // 120 is half of 240px (15em)
    };

    // Event handler for mouse entering the container
    const handleMouseEnter = () => {
        setIsMouseInside(true);
    };

    // Event handler for mouse leaving the container
    const handleMouseLeave = () => {
        setIsMouseInside(false);
    };

    return (
        <div 
            className="hex-container"
            onMouseMove={moveLight}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="hex-grid"></div>
            {isMouseInside && ( // Only render the light if the mouse is inside
                <div
                    className="hex-light"
                    style={{
                        left: `${lightPosition.x}px`,
                        top: `${lightPosition.y}px`,
                    }}
                ></div>
            )}
            {/* Render all children within hexgrid */}
            <div className="content-container">
                {children}
            </div>
        </div>
    );
};
