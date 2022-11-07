import "./BuyNftSection.js";
import BuyNftSectionContent from "./components/text/BuyNftSectionContent.js";
import BuyNftSectionTitle from "./components/text/BuyNftSectionTitle.js";

const BuyNftSection = () => {
  return (
    <div className="buyNftSectionWrapper">
      <div className="buyNftSectionDiv">
        <BuyNftSectionTitle />
      </div>
      <div className="buyNftSectionDiv">
        <BuyNftSectionContent />
      </div>
    </div>
  ); 
};

export default BuyNftSection;
