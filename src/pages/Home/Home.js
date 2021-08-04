import React from 'react';
import Occupation from '../../components/Occupation';
import About from '../About/About';
import "./Home.css";


const Home = () => {
    return (
        <>
           <section className="home-section">
                <div className="home-left">

                    <div className="home-left-row">
                    
                    <h1> <strong>Akash Singh</strong> </h1>
                    <Occupation className="occupation"/>
                <a href="/assets/pdf/AkashResume.pdf" download className="resume-btn">RESUME</a>

                   </div>
                
                    
                </div>

                <div className="home-right" > 
        
                    <img src="assets/images/home-img.svg" alt="" />
                    
                </div>
           </section>
           <About backgroundColor="var(--secondary-color)"/>
        </>
    )
}

export default Home;
