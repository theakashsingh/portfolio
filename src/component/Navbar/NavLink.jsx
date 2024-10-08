/* eslint-disable react/prop-types */
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

export default function NavLink({ href, children, mobile }) {
    const baseClasses = "text-gray-300 hover:text-white transition-colors relative group";
    const mobileClasses = mobile ? "block py-2" : "";
    
    return (
      <AnchorLink href={href} className={`${baseClasses} ${mobileClasses}`}>
        {children}
        <motion.span 
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"
          whileHover={{ width: '100%' }}
        />
      </AnchorLink>
    );
  }