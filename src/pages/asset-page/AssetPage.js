import { useEffect } from "react";
import { useSelector } from "react-redux";

import HeaderAsset from "../../layout/header/HeaderAsset";
import AssetPageRightPart from "./components/AssetPageRightPart";
import { axiosGetAsset } from "../../axios/axiosId";

import "./AssetPage.css";
import Footer from "../../layout/footer/Footer";
import AssetPageLeftPart from "./components/AssetPageLeftPart";

const AssetPage = () => {
  const id = useSelector((state) => state.verification.id);
  useEffect(() => {
    axiosGetAsset(id).then((response) => {
      console.log(response);
    });
  }, [id]);
  return (
    <>
      <HeaderAsset />
      <div className="assetPageWrapper">
        <div className="assetPageContainer">
          <AssetPageLeftPart />
          <AssetPageRightPart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssetPage;
