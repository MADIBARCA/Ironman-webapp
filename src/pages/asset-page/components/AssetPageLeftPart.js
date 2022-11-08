import PlusIcon from "../../../assets/asset-page/left-part/icons/plus-icon.svg";

import "./AssetPageLeftPart.css";

const AssetPageLeftPart = () => {
  return (
    <div className="assetPageLeftContainer">
      <div className="assetPageLeftImgBox">{/* <img /> */}</div>
      <div className="assetPageLeftImgTab">
        <div className="assetPageLeftImgTabElement">{/* <img src={}/> */}</div>
          
        <div className="assetPageLeftImgTabMid">
          <img src={PlusIcon} width="32px" height="32px" />
          Included
        </div>
        <div className="assetPageLeftImgTabElement">{/* <img/> */}</div>
      </div>
    </div>
  );
};

export default AssetPageLeftPart;
