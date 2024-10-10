import { useState } from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import {Terminal } from 'lucide-react';
import NavLink from "./NavLink";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnchorLink href="#home" className="flex items-center group">
              <div className="relative">
                <div className="absolute inbg-purple-500set-0 rounded-lg group-hover:bg-purple-400 transition-colors"></div>
                {/* <Terminal className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width={30}
                  height={30}
                >
                  <defs>
                    <linearGradient
                      id="grad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: "#9333EA" }} />
                      <stop offset="100%" style={{ stopColor: "#DB2777" }} />
                    </linearGradient>
                  </defs>

                  <g>
                    <circle cx="20" cy="20" r="19" fill="url(#grad1)" />
                    <text
                      x="20"
                      y="28"
                      fontFamily="Arial, sans-serif"
                      fontWeight="bold"
                      fontSize="24"
                      fill="white"
                      opacity="0.1"
                      textAnchor="middle"
                    >
                      A
                    </text>
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.3"
                    />
                    <path
                      d="M20,4 Q24,16 20,36"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                    <path
                      d="M4,20 Q20,24 36,20"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.2"
                    />
                    <text
                      x="20"
                      y="24"
                      fontFamily="Arial, sans-serif"
                      fontWeight="bold"
                      fontSize="14"
                      fill="white"
                      textAnchor="middle"
                    >
                      AD
                    </text>
                  </g>
                </svg>
              </div>
              <motion.span
                className="ml-3 text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Akash Dev
              </motion.span>
            </AnchorLink>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </motion.button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden pb-4`}
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="#home" mobile>
            Home
          </NavLink>
          <NavLink href="#about" mobile>
            About
          </NavLink>
          <NavLink href="#projects" mobile>
            Projects
          </NavLink>
          <NavLink href="#experience" mobile>
            Experience
          </NavLink>
          <NavLink href="#contact" mobile>
            Contact
          </NavLink>
        </motion.div>
      </div>
    </nav>
  );
}
