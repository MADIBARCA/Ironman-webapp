import React from "react";
import ClaimDefaultButton from "../../../../buttons/home-page/ClaimDefaultButton";

import UsersImg from '../../../../assets/homepage/join-section/users.png';

import './JoinSection.css';

const JoinSection = () => {
  return (
    <section className="joinSection">
      <div className="defaultContainer">
        <div className="joinSectionContainer">
          <div className="joinSectionLeftPart">
            <div className="joinSectionTxt">
              Join the <span>exclusive Ironman</span> Finisher tribe!
            </div>

            <ClaimDefaultButton type={"white"}/> 
          </div>

          <img src={UsersImg} className="joinSectionImg"/>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
