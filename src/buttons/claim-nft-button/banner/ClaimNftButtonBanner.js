import arrowRight from "../../../assets/buttons/arrowRight.png";

import "./ClaimNftButtonBanner.css";

const ClaimNftButtonBanner = () => {
  return (
    <div className="">
      <span className="claimNftBannerText">Claim your Finisher NFT</span>
      <img alt="arrow right" src={arrowRight} className="claimNftBannerImg" />
    </div>
  );
};

export default ClaimNftButtonBanner;
