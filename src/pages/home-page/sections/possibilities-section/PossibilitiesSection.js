import React from "react";

import columnData from "./possibilitiesSection.data";

import "./PossibilitiesSection.css";

const PossibilitiesSection = ({ featuresRef }) => {
  return (
    <div className="defaultContainer" ref={featuresRef}>
      <section className="possibilitiesSection">
        <div className="possibilitiesSectionTop">
          <h1>Anything is possible</h1>
          <p>
            The Finisher NFT pack comes with a multitude of possibilities. The
            NFT will unlock many interesting utilities! Some utilities in our
            roadmap could be:
          </p>
        </div>

        <div className="possibilitiesSectionMain">
          {columnData.map((el, i) => (
            <div className="possibilitiesSectionColumn" key={i}>
              <div className="possibilitiesSectionTxtCol">
                <h4>{el.title}</h4>
                <p>{el.text}</p>
              </div>

              <img src={el.image} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PossibilitiesSection;
