import HeaderLang from "./components/header-lang/HeaderLang";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import arrowBlackDown from "../../assets/asset-page/blackArrow.png";
import ironmanLogo from "../../assets/asset-page/assetLogo.png";

import "./Header.css";

const HeaderAsset = () => {
  return (
    <div className={"headerWrapperBannerDisabled"}>
      <HeaderLogo src={ironmanLogo} />
      <div className="headerBlockDiv" style={{ marginRight: "-45.64px" }}>
        <HeaderLang style={{ color: "black", src: arrowBlackDown }} />
      </div>
    </div>
  );
};

export default HeaderAsset;
