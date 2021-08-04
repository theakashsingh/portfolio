import React from 'react';
import "./SocialLink.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const SocialLink = () => {
    return (
        <div className="social-link">
           <a className="facebook" href="https://www.facebook.com/Mr.AkshSingh" target="_blank"> <FacebookIcon/> </a>
           <a className="instagram" href="https://www.instagram.com/mr__aksh__/" target="_blank"> <InstagramIcon/> </a>
           <a className="linked-in" href="https://www.linkedin.com/in/mrakashsingh/" target="_blank"> <LinkedInIcon/> </a>
           <a className="github" href="https://github.com/theakashsingh" target="_blank"> <GitHubIcon/> </a>
           <a className="twitter" href="https://twitter.com/mr_aksh_" target="_blank" > <TwitterIcon/> </a> 
        </div>
    )
}

export default SocialLink;
