import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import NavbarDesktopLink from './NavbarDesktopLink';
import NavbarMobileLinks from './NavbarMobileLinks';


const Navbar = () => {

    

    return (
      <>
       <nav>
           <div className="logo" >
               <h1> <NavLink className="logo-li" to="/">theakashsingh</NavLink></h1>
           </div>
          
           <NavbarDesktopLink/>
           <NavbarMobileLinks/>
            
           
                
          
       </nav>
      </>
    )
}

export default Navbar
