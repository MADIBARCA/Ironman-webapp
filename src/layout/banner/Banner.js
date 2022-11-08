import ClaimNftButtonBanner from "../../buttons/claim-nft-button/banner/ClaimNftButtonBanner";

import xIcon from "../../assets/banner/x.png";

import { useDispatch, useSelector } from "react-redux";
import { bannerClose } from "../../redux/bannerSlice";

import "./Banner.css";

const Banner = () => {
  const dispatch = useDispatch();
  const bannerVisible = useSelector((state) => state.banner);

  return (
    <div className={bannerVisible ? `bannerWrapper` : `bannerWrapperDisabled`}>
      <div className="bannerRow">
        <img
          alt="cross icon"
          src={xIcon}
          className="bannerImg"
          onClick={() => {
            dispatch(bannerClose());
          }}
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
