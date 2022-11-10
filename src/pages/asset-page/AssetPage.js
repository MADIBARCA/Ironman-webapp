import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HeaderAsset from "../../layout/header/HeaderAsset";
import AssetPageRightPart from "./components/AssetPageRightPart";
import { axiosGetAsset } from "../../axios/axiosId";

import "./AssetPage.css";
import Footer from "../../layout/footer/Footer";
import AssetPageLeftPart from "./components/AssetPageLeftPart";

const AssetPage = () => {
  const id = useSelector((state) => state.verification.id);

  const [firstActive, setFirstActive] = useState(true);
  const [imgPathFirst, setImgPathFirst] = useState("");
  const [imgPathSecond, setImgPathSecond] = useState("");

  useEffect(() => {
    axiosGetAsset(id).then((response) => {
      setImgPathFirst(response.data.data.Ironman.metaDataUrlGif);
      setImgPathSecond(response.data.data.Ironman.metaDataUrlImg);
    });
  }, [id]);
  return (
    <>
      <HeaderAsset />
      <div className="assetPageWrapper">
        <div className="assetPageContainer">
          <AssetPageLeftPart
            imgPathFirst={imgPathFirst}
            imgPathSecond={imgPathSecond}
            handleSwitchFirst={() => setFirstActive(true)}
            handleSwitchSecond={() => setFirstActive(false)}
            firstActive={firstActive}
          />
          <AssetPageRightPart />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssetPage;
