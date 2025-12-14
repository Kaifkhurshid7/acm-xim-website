// src/components/Loader.jsx
import React from 'react';
import './Loader.css';

// Define the text and associated color classes for clean mapping and styling
const ACMSplit = [
    { char: "A", colorClass: "text-blue-300" },
    { char: "C", colorClass: "text-blue-500" },
    { char: "M", colorClass: "text-blue-700" },
    { char: " ", colorClass: "text-transparent" }, // Transparent for the space
    { char: "X", colorClass: "text-gray-200" },
    { char: "I", colorClass: "text-gray-400" },
    { char: "M", colorClass: "text-gray-600" }
];

const Loader = () => {
    return (
        <div className="loader-container">
            {/* 3D Rotating Cube - Logo/Symbol */}
            <div className="cube-wrapper">
                {/* Faces of the cube can display short text or symbols */}
                <div className="cube-face">A</div>
                <div className="cube-face">C</div>
                <div className="cube-face">M</div>
                <div className="cube-face">X</div>
                <div className="cube-face">I</div>
                <div className="cube-face">M</div>
            </div>

            {/* Rolling Text Animation - "ACM XIM" */}
            <div className="text-container">
                {ACMSplit.map((item, index) => (
                    <span
                        key={index}
                        className={`letter-wrapper ${item.colorClass}`}
                        style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                    >
                        {item.char}
                    </span>
                ))}
            </div>

            {/* Subtitle with Fade-in Effect */}
            <p className="loader-subtitle">STUDENT CHAPTER</p>
        </div>
    );
};

export default Loader;