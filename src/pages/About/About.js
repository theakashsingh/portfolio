import React from "react";
import Occupation from "../../components/Occupation";
import "./About.css";

const About = ({ backgroundColor }) => {
  return (
    <>
      <section
        className="about"
        // style={{ backgroundColor: `${backgroundColor}` }}
      >
        <div className="about-left">
          <div className="about-img">
            
          </div>
          <h1>Akash Singh</h1>
          <Occupation />
        </div>
        <div className="about-right">
          <div className="about-bio">
            <p>
              I’m curious, and I enjoy work that challenges me to learn
              something new and stretch in a different direction.I spend my
              whole day, practically every day, experimenting with HTML, CSS,
              and JavaScript. I build websites that delight and inform.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
