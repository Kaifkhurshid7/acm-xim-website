import { useState, useRef } from "react";
import { Menu, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import SideNavbar from "./SideNavbar";

import AcmXimLogo from "../assets/acm_logo.png";

const DDS_PLATFORM_URL = "https://acc-seven-theta.vercel.app/";

const Links = [
  { name: "Events", link: "/events" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Projects", link: "/projects" },
  { name: "DDS", link: "https://acc-seven-theta.vercel.app/" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.9938, 0.994],
    ["100%", "100%", "0%"]
  );

  return (
    <motion.div
      style={{ opacity }}
      className="w-full fixed px-max h-18 md:h-22 flex items-center bg-neutral-50/0 z-[999] "
    >
      <div className="w-full max-w-[90rem] mx-auto flex justify-between gap-12 items-center relative mb-4">
        <a
          href="/"
          className="flex items-center"
        >
          <img
            src={AcmXimLogo}
            alt="ACM XIM Student Chapter Logo"
            className="h-12 md:h-16 w-auto object-contain"
          />
        </a>

        {/* MIDDLE LINKS */}
        <div className=" hidden lg:flex py-4 px-10 bg-white border border-white/20 shadow-lg rounded-4xl relative overflow-clip gap-6 -left-10 ">
          {Links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="group text-sm tracking-wide font-inter text-black/80 group transition ease-in-out duration-300 relative px-3"
            >
              {link.name}
              <motion.span className="absolute left-0 w-0 h-[1px] group-hover:w-full -bottom-4 bg-blue-500/90 transtition ease-in-out duration-300"></motion.span>
            </a>
          ))}
        </div>
        <NoticeBoard isOpen={isOpen} />

        {/* THE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-white border border-white/20 shadow-lg cursor-pointer p-2.5 md:p-3.5 relative flex items-center justify-center"
        >
          <Menu className="" />
        </button>
      </div>

      <SideNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </motion.div>
  );
};

export default Navbar;

function NoticeBoard({ isOpen }) {
  const noticeRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0.038, 0.037, 0],
    ["0%", "100%", "100%"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, blur: "100px", x: 40 }}
      whileInView={{ opacity: 1, blur: "0px", x: 0 }}
      viewport={{ once: false }}
      ref={noticeRef}
      style={{ opacity }}
      className={`fixed top-0 right-48 2xl:right-[19vw] 3xl:right-[8vw] group cursor-pointer scale-80 hidden xl:block lg:scale-100 z-[9] ${isOpen ? "hidden" : "block"
        } transition-all ease-in-out duration-500`}
    >
      {/* <div className="w-fit bg-black relative">
        <motion.div className="flex items-center justify-around p-1  lg:px-3">
          <a
            href={DDS_PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/95 text-xs text-center p-1 relative "
          >
            Visit our DDS platform
          </a>
          <ArrowRight
            color="white"
            size={18}
            className="relative opacity-95 top-[1px]"
          />
        </motion.div>
      </div> */}
    </motion.div>
  );
}