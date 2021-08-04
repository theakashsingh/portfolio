import React from 'react'
import { NavLink } from 'react-router-dom';

const NavbarLinks = () => {
    return (
       <>
             <ul>
                 <li><NavLink className="nav-li" to="/" >Home</NavLink></li>
                 <li><NavLink className="nav-li" to="/about" >About</NavLink></li>
                 <li><NavLink className="nav-li" to="/project" >Project</NavLink></li>
                 <li><NavLink className="nav-li" to="/contact" >Contact</NavLink></li>
              </ul>
       </>
    )
}

export default NavbarLinks;
