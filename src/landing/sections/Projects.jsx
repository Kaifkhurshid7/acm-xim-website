import React from "react";
// import motion from 'motion/react'
import DesktopComponent from "../../components/projects/ProjectListDesktop";
import MobileDesktop from "../../components/projects/ProjectListMobile";

const Projects = () => {
  return (
    <div className="h-full w-full">
      <div className="hidden md:block">
        <DesktopComponent />
      </div>
      <div className="block md:hidden">
        <MobileDesktop />
      </div>
    </div>
  );
};

export default Projects;
