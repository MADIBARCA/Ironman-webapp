import HeaderAsset from "../../layout/header/HeaderAsset";
import AssetPageRightPart from "./components/AssetPageRightPart";

import "./AssetPage.css";

const AssetPage = () => {
  return (
    <div className="assetPageWrapper">
      <HeaderAsset />  
      <div className="assetPageContainer">
        <AssetPageRightPart/>
      </div>
    </div>
  );
};

export default AssetPage;
