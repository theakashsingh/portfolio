import { useState } from 'react';
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Terminal, Command, Code } from 'lucide-react';
import NavLink from './NavLink';

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
                <div className="absolute inset-0 bg-purple-500 rounded-lg blur group-hover:bg-purple-400 transition-colors"></div>
                <div className="relative bg-slate-900 text-white rounded-lg p-2 border border-slate-700 group-hover:border-purple-400 transition-colors">
                  <Terminal className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
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
          className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pb-4`}
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <NavLink href="#home" mobile>Home</NavLink>
          <NavLink href="#about" mobile>About</NavLink>
          <NavLink href="#projects" mobile>Projects</NavLink>
          <NavLink href="#experience" mobile>Experience</NavLink>
          <NavLink href="#contact" mobile>Contact</NavLink>
        </motion.div>
      </div>
    </nav>
  );
}