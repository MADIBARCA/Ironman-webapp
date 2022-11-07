import ClaimNftButtonBanner from "../../buttons/claim-nft-button/banner/ClaimNftButtonBanner";

import xIcon from "../../assets/banner/x.png";

import "./Banner.css";
import { useState } from "react";

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(true);
  return (
    <div className={bannerVisible ? `bannerWrapper` : `bannerWrapperDisabled`}>
      <div className="bannerRow">
        <img
          alt="cross icon"
          src={xIcon}
          className="bannerImg"
          onClick={() => setBannerVisible(false)}
        />
        <div className="bannerText">
          Early Bird discount for Finishers who claim before 30th November
        </div>
      </div>
      <ClaimNftButtonBanner />
    </div>
  );
};

export default Banner;
