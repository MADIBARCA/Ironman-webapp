import React from "react";

import RightArrowWhite from "../../assets/homepage/buttons/claim-default/right-arrow-white.svg";
import RightArrowBlack from "../../assets/homepage/buttons/claim-default/right-arrow-black.svg";

import './ClaimDefaultButton.css';

const ClaimDefaultButton = ({ type }) => {
  const imgHandler = (type) => {
    switch (type) {
      case "white":
        return RightArrowWhite;
      case "black":
        return RightArrowBlack;
      default:
        return RightArrowBlack;
    }
  };

  const colorHandler = (type) => {
    switch (type) {
      case "white":
        return "claimDefaultBtn white";
      case "black":
        return "claimDefaultBtn black";
      default:
        return "claimDefaultBtn black";
    }
  };

  return (
    <a className={colorHandler(type)}>
      Claim your Finisher NFT
      <img src={imgHandler(type)} />
    </a>
  );
};

export default ClaimDefaultButton;
