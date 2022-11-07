import React from "react";

import IntroLeftPart from "./components/IntroLeftPart";
import IntroRightPart from "./components/IntroRightPart";

import "./IntroSection.css";

const IntroSection = () => {
  return (
    <section className="IntroSection">
      <div className="defaultContainer">
        <div className="IntroContainer">
          <IntroLeftPart />
          <IntroRightPart /> 
        </div>
      </div>
    </section>
  );
};

export default IntroSection; 