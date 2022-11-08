import React from "react";
import DiscountIcon from "../../../../assets/asset-page/discount-box/discount-icon.svg";

import '../AssetPageRightPart.css';

const DiscountBox = () => {
  return (
    <div className="assetPageDiscountAlert">
      <img src={DiscountIcon} />
      Early bird discount
    </div> 
  );
};

export default DiscountBox;
