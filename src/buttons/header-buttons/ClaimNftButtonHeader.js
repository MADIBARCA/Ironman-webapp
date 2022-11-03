import arrowRight from "../assets/buttons/arrowRight.png";

import "./ClaimNftButtonHeader.css";

const ClaimNftButtonHeader = () => {
  return (
    <div>
      <span>Claim your Finisher NFT</span>
      <img alt="arrow right" src={arrowRight} />
    </div>
  );
};

export default ClaimNftButtonHeader;
