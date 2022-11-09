import { useEffect } from "react";
import { useSelector } from "react-redux";

import HeaderAsset from "../../layout/header/HeaderAsset";
import AssetPageRightPart from "./components/AssetPageRightPart";
import { axiosGetAsset } from "../../axios/axiosId";

import "./AssetPage.css";

const AssetPage = () => {
  const id = useSelector((state) => state.verification.id);
  useEffect(() => {
    axiosGetAsset(id).then((response) => {
      console.log(response);
    });
  }, [id]);
  return (
    <div className="assetPageWrapper">
      <HeaderAsset />
      <div className="assetPageContainer">
        <AssetPageRightPart />
      </div>
    </div>
  );
};

export default AssetPage;
