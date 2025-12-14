import React from 'react';
import { motion } from 'framer-motion';

const NotificationCard = ({ title, subtitle, description, image, delay = 0, onClick, type }) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: delay, duration: 0.5, type: "spring", stiffness: 100 }}
            onClick={onClick}
            className={`
        relative overflow-hidden rounded-xl border border-white/20 
        bg-white/10 backdrop-blur-md shadow-lg p-4 mb-3 
        cursor-pointer hover:bg-white/20 transition-all group
        ${type === 'event' ? 'min-w-[300px]' : 'max-w-sm'}
      `}
        >
            <div className="flex items-start gap-4">
                {image ? (
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-600">
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                        {title.charAt(0)}
                    </div>
                )}

                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h3 className="font-bold text-white text-sm leading-tight">{title}</h3>
                        {subtitle && <span className="text-xs text-blue-200 font-medium">{subtitle}</span>}
                    </div>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-2">{description}</p>
                </div>
            </div>

            {/* Decorative gradient orb */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/30 rounded-full blur-xl group-hover:bg-blue-400/40 transition-colors" />
        </motion.div>
    );
};

export default NotificationCard;
