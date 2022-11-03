import React from "react";

import ClaimDefaultButton from "../../../../../buttons/home-page/ClaimDefaultButton";

import './IntroRightPart.css';

const IntroRightPart = () => {
  return (
    <div className="introRightPart">
      <h1>
        For the first time ever,
        <span>Ironman introduces the</span>
        <span className="gradientTxt">Finisher NFT Pack!</span>
      </h1>

      <ClaimDefaultButton type={"black"}/>
    </div>
  );
};

export default IntroRightPart;
