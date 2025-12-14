import React from 'react';
import { motion } from 'framer-motion';

const BlurText = ({ text = "", className = "" }) => {
    const words = text.split(" ");

    return (
        <div className={`overflow-hidden flex flex-wrap gap-2 ${className}`}>
            {words.map((word, idx) => (
                <motion.span
                    key={idx}
                    initial={{ filter: 'blur(10px)', opacity: 0, y: 10 }}
                    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1, ease: 'easeOut' }}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

export default BlurText;
