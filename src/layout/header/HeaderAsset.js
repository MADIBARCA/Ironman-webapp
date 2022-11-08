import HeaderLang from "./components/header-lang/HeaderLang";
import HeaderLogo from "./components/header-logo/HeaderLogo";

import "./Header.css";

const HeaderAsset = () => {
  return (
    <div className={"headerWrapperBannerDisabled"}>
      <HeaderLogo />
      <div className="headerBlockDiv" style={{ marginRight: "-45.64px" }}>
        <HeaderLang />
      </div>
    </div>
  );
};

export default HeaderAsset;
