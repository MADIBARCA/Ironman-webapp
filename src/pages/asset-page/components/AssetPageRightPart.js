import React from "react";

import { useNavigate } from "react-router-dom";

import DiscountBox from "./price-box/DiscountBox";
import PriceBox from "./price-box/PriceBox";

import ProceedButton from "../../../buttons/proceed-button/ProceedButton";
import TabsMenu from "./tabs-menu/TabsMenu";

import AssetPageOverview from "./tabs-menu/components/overview/AssetPageOverview";

import "./AssetPageRightPart.css";
import AssetPageFeatures from "./tabs-menu/components/features/AssetPageFeatures";
import AssetPageDetails from "./tabs-menu/components/asset-details/AssetPageDetails";

const AssetPageRightPart = () => {

  const navigate = useNavigate();

  const itemsArray = [
    {
      title: "Overview",
      isActive: true,
      component: <AssetPageOverview />,
    },
    {
      title: "Features",
      isActive: false,
      component: <AssetPageFeatures/>,
    },
    {
      title: "Asset details",
      isActive: false,
      component: <AssetPageDetails/>,
    },
  ];

  return (
    <div className="assetPageRightPart">
      <div className="assetPageRightTop">
        <p className="assetPageSubtitle">Ironman Israel</p>
        <h1 className="assetPageTitle">70.3 Finisher NFT</h1>

        <div className="assetPriceDetails">
          <PriceBox currentPrice={"75"} oldPrice={"95.00"} />
          <DiscountBox />
        </div>
      </div>

      <div className="assetPageRightMain"> 
        <ProceedButton disabled={false} text={"Claim your finisher NFT"} onClick={()=>navigate('/purchase')}/>

        <TabsMenu itemsArray={itemsArray} />
      </div>
    </div>
  );
};

export default AssetPageRightPart;
