import arrowDown from "../../../../../../assets/homepage/buy-nft-section/arrowDown.png";

import "../BuyNftSectionComponents.css";

const BuyNftSectionContent = () => {
  return (
    <div className="buyNftSectionContentWrapper">
      <p>
        Bragging is a guilty pleasure. But, not if you are Ironman Finisher! The
        Twitter PFP NFT will allow you to officiate your win on twitter’s social
        platform. When you choose to make the PFP NFT your “display picture” on
        Twitter, your regular circular mask will be morphed into a hexagon,
        proving that you are a true Ironman Finisher!
        <span>Afterall, If it’s not on social media, it didn’t happen!</span>
      </p>
      <div className="buyNftSectionContentTwitterDiv">
        <span>What are Twitter PFP NFTs?</span>
        <a>
          <span>Learn more</span>
          <img src={arrowDown} alt="arrow down" />
        </a>
      </div>
      <div className="buyNftSectionBorderDiv"></div>
    </div>
  );
};

export default BuyNftSectionContent;
