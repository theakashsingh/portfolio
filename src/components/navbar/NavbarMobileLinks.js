import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import MenuIcon from '@material-ui/icons/Menu';

const NavbarMobileLinks = () => {

    const [open, setOpen] = useState(false);

    return (
       <>

       <div className="NavbarMobileLink">
           <span>
           <MenuIcon className="menu" onClick={() => setOpen(!open)} />
           </span>
       
       {open && <NavbarLinks />}
       </div>

       
       </>
    )
}

export default NavbarMobileLinks
