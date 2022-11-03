import arrowRight from "../../assets/buttons/arrowRight.png";

import "./ClaimNftButtonHeader.css";

const ClaimNftButtonHeader = () => {
  return (
    <div className="">
      <span className="claimNftHeaderText">Claim your Finisher NFT</span>
      <img alt="arrow right" src={arrowRight} className="claimNftHeaderImg" />
    </div>
  );
};

export default ClaimNftButtonHeader;
