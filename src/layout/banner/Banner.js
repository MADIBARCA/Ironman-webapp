import xIcon from "../../assets/banner/x.png";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannerWrapper">
      <div className="bannerRow">
        <img alt="cross icon" src={xIcon} height={12.73} width={12.73} />
        <div className="bannerText">
          Early Bird discount for Finishers who claim before 30th November
        </div>
      </div>
    </div>
  );
};

export default Banner;
