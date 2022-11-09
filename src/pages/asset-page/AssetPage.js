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
<<<<<<< HEAD
    <div className="assetPageWrapper">
      <HeaderAsset />
      <div className="assetPageContainer">
        <AssetPageRightPart />
=======
    <>
      <HeaderAsset />
      <div className="assetPageWrapper">
        <div className="assetPageContainer">
          <AssetPageLeftPart/>
          <AssetPageRightPart />
        </div>
>>>>>>> 809899c9af84cf576d7f56968c0cf372a64b34aa
      </div>
      <Footer />
    </>
  );
};

export default AssetPage;
