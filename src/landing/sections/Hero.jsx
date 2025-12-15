

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Bell } from "lucide-react"; // Assuming we have lucide-react, otherwise use text

import HeroImg from "../../assets/hero.png";
import UpscaledVideo from "../../assets/upscaled-video.mp4";
import XimImg from "../../assets/xim.png";
import AccImg from "../../assets/acc.png";
import BlurText from "../../components/BlurText";
import NotificationCard from "../../components/NotificationCard";
import "../../components/NotificationCard.css";

const Hero = () => {
  const [showMobileNotifications, setShowMobileNotifications] = useState(false);

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="relative z-0 h-[75vh] md:h-screen w-full overflow-y-visible overflow-x-hidden md:overflow-hidden flex flex-col items-center justify-end pb-0 md:pb-20">

      {/* Notifications Wrapper */}
      {/* Notifications Wrapper */}
      <div className={`notification-wrapper transition-all duration-300 ${showMobileNotifications ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'} md:opacity-100 md:visible md:translate-y-0 md:block`}>
        <NotificationCard
          title="ACM Winter School"
          subtitle="15-24 Dec 2025"
          description="Register now to attend live sessions!"
          image={XimImg}
          delay={0}
          onClick={() => {
            const element = document.getElementById('acm-winter-school');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />
        <NotificationCard
          title="New Weekly DDS Challenge"
          subtitle="12:00 P.M."
          description="Click to join and solve the challenge"
          image={AccImg}
          delay={0.2}
          onClick={() => console.log("Joined Challenge")}
        />
      </div>

      {/* Mobile Notification Icon */}
      {!showMobileNotifications && (
        <div
          className="!fixed top-[20%] right-4 z-50 md:hidden glass-card p-3 rounded-full flex items-center justify-center cursor-pointer animate-pulse"
          onClick={() => setShowMobileNotifications(true)}
        >
          <div className="relative">
            <Bell className="text-white w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border border-white/20">
              2
            </span>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-[75vh] md:h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={UpscaledVideo} type="video/mp4" />
      </video>

      {/* Hero Image Overlay
      <img
        src={HeroImg}
        alt="Hero Overlay"
        className="absolute top-0 left-0 w-full h-[75vh] md:h-full object-contain md:object-cover z-[-5]"
      /> */}

      {/* Gradient Blur Overlay - Hidden on mobile */}
      <div
        className="absolute bottom-0 left-0 w-full h-[25%] bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[5px] z-0 pointer-events-none hidden md:block"
        style={{
          maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)'
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-white -translate-y-32 md:translate-y-0">
        {/* Responsive Logo */}
        {/* <img
          src="/acm-white.svg"
          alt="ACM Student Chapter"
          className="hidden md:block w-full max-w-3xl h-auto object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        /> */}

        <p className="mt-4 text-xl md:text-3xl font-bold tracking-wide font-inter">
          <span className="text-red-600">X</span>IM <span className="text-red-600">U</span>niversity
        </p>
      </div>
    </div>
  );
};

export default Hero;
