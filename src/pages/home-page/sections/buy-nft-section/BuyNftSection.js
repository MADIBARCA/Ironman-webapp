import BuyNftSectionContent from "./components/text/BuyNftSectionContent.js";
import BuyNftSectionTitle from "./components/text/BuyNftSectionTitle.js";
import BuyNftSectionImg from "./components/images/BuyNftSectionImg.js";

import socialImg from "../../../../assets/homepage/buy-nft-section/buyNftSocial.png";
import finisherImg from "../../../../assets/homepage/buy-nft-section/buyNftFinisher.png";

import "./BuyNftSection.css";
const BuyNftSection = () => {
  return (
    <div className="buyNftSectionWrapper">
      <div className="buyNftSectionDiv">
        <BuyNftSectionImg src={socialImg} className="buyNftSectionImgSocial" />
        <BuyNftSectionTitle />
      </div>
      <div className="buyNftSectionDiv">
        <BuyNftSectionContent />
        <BuyNftSectionImg
          src={finisherImg}
          className="buyNftSectionImgSocial"
        />
      </div>
    </div>
  );
};

export default BuyNftSection;
