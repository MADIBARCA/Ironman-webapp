import React from "react";

import GetFinisherLeftPart from "./components/GetFinisherLeftPart";
import GetFinisherRightPart from "./components/GetFinisherRightPart";

import "./GetFinisherSection.css";

const GetFinisherSection = () => {
  return (
    <section className="getFinisher">
      <div className="defaultContainer">
        <div className="getFinisherContainer">
          <GetFinisherLeftPart />
          <GetFinisherRightPart /> 
        </div>
      </div>
    </section>
  );
};

export default GetFinisherSection;
