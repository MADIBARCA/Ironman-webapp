import PlusIcon from "../../../assets/asset-page/left-part/icons/plus-icon.svg";

import "./AssetPageLeftPart.css";

const AssetPageLeftPart = ({
  imgPathFirst,
  imgPathSecond,
  handleSwitchFirst,
  handleSwitchSecond,
  firstActive,
}) => {
  return (
    <div className="assetPageLeftContainer">
      <div className="assetPageLeftImgBox">
        <img src={firstActive ? imgPathFirst : imgPathSecond} />
      </div>
      <div className="assetPageLeftImgTab">
        <div className="assetPageLeftImgTabElement" onClick={handleSwitchFirst}>
          <img src={imgPathFirst} />
        </div>

        <div className="assetPageLeftImgTabMid">
          <img src={PlusIcon} width="32px" height="32px" />
          Included
        </div>
        <div
          className="assetPageLeftImgTabElement"
          onClick={handleSwitchSecond}
        >
          <img src={imgPathSecond} />
        </div>
      </div>
    </div>
  );
};

export default AssetPageLeftPart;
