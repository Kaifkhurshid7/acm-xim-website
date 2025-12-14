import React from "react";

const Hero = () => {
  return (
    // Main container: full screen, relative positioning, centered content (flex)
    <div
      className="min-h-screen w-full relative overflow-hidden bg-black flex justify-center items-center"
    >

      {/* Background Video Element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        src="src/assets/upscaled-video.mp4"
        loop
        autoPlay
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>

      {/* Content Layer (Centered Text) */}
      <div className="relative z-10 text-center p-4">

        {/* Main Title: XIM UNIVERSITY (Large, Red) */}
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider text-red-600 mb-2 leading-none">
          XIM UNIVERSITY
        </h1>

        {/* Subtitle: ACM STUDENT CHAPTER (Large, White) */}
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-white">
          ACM STUDENT CHAPTER
        </h2>

      </div>
    </div>
  );
};

export default Hero;