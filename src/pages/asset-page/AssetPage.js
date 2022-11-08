import HeaderAsset from "../../layout/header/HeaderAsset";
import AssetPageRightPart from "./components/AssetPageRightPart";

import "./AssetPage.css";
import Footer from "../../layout/footer/Footer";
import AssetPageLeftPart from "./components/AssetPageLeftPart";

const AssetPage = () => {
  return (
    <>
      <HeaderAsset />
      <div className="assetPageWrapper">
        <div className="assetPageContainer">
          <AssetPageLeftPart/>
          <AssetPageRightPart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssetPage;
