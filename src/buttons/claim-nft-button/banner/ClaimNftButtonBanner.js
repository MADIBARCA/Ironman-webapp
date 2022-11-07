import { useNavigate } from "react-router-dom";
import arrowRight from "../../../assets/buttons/arrowRight.png";

import "./ClaimNftButtonBanner.css";

const ClaimNftButtonBanner = () => {
  const navigate = useNavigate();
  return (
    <div
      className="claimNftBanner"
      onClick={() => {
        navigate("/verification");
      }}
    >
      <span className="claimNftBannerText">Claim your Finisher NFT</span>
      <img alt="arrow right" src={arrowRight} className="claimNftBannerImg" />
    </div>
  );
};

export default ClaimNftButtonBanner;
