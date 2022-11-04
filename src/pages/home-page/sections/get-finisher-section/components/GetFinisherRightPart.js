import React from "react";

import ClaimDefaultButton from "../../../../../buttons/home-page/ClaimDefaultButton";

import './GetFinisherRightPart.css';

const GetFinisherRightPart = () => {
  return (
    <div className="getFinisherRightPart">
      <div className="getFinisherTxt">
        <h1>
          Get a digital finisher tattoo, with a personalized Finisher NFT Card!
        </h1>
        <p>
          Ironman Finishers will now get an opportunity to purchase their
          winning mementos as NFTs! This gives you digital bragging rights and a
          victory that is immutably recorded on the blockchain.
        </p>
      </div>

      <ClaimDefaultButton type={"white"}/>
    </div>
  );
};

export default GetFinisherRightPart;
