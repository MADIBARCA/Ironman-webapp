import React from "react";

import SportoGraf from "../../../../assets/homepage/partners-section/sportograf.png";
import NftLabs from "../../../../assets/homepage/partners-section/nft-labs.png";
import ComtecGroup from "../../../../assets/homepage/partners-section/comtec-group.png";

import './PartnersSection.css';

const PartnersSection = () => {
  const logos = [SportoGraf, NftLabs, ComtecGroup];

  return (
    <section className="partnersSection">
      <div className="defaultContainer">
        <div className="partnersContainer">
          <h1>Premier & Technical Partners</h1>
          <div className="partnersRow">
            {logos.map((el, i) => 
              <img src={el} key={i}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
