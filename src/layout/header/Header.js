import { useSelector } from "react-redux";

import ClaimNftButtonHeader from "../../buttons/claim-nft-button/header/ClaimNftHeaderButton";
import HeaderLang from "./components/header-lang/HeaderLang";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderNavButtons from "./components/header-nav-buttons/HeaderNavButtons";
import arrowDown from "../../assets/header/arrowDown.png";
import ironmanLogo from "../../assets/header/ironmanLogo.png";

import "./Header.css";

const Header = ({ refs, scrollHandler }) => {
  const bannerVisible = useSelector((state) => state.banner);
  return (
    <div
      className={
        bannerVisible
          ? "headerWrapperBannerActive"
          : "headerWrapperBannerDisabled"
      }
    >
      <div className="headerBlockDiv">
        <HeaderLogo src={ironmanLogo} />
        <HeaderNavButtons scrollHandler={scrollHandler} refs={refs} />
      </div>
      <div className="headerBlockDiv">
        <HeaderLang style={{ color: "white", src: arrowDown }} />
        <ClaimNftButtonHeader />
      </div>
    </div>
  );
};

export default Header;
