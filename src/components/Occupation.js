import React from "react";
import Typewriter from "typewriter-effect";

const Occupation = () => {
  return (
    <>
      <div>
        <Typewriter
          options={{
            strings: ["I\'m UX/UI and Front-End developer.", "I design and build user interface."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </>
  );
};

export default Occupation;
