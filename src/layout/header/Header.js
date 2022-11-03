import ClaimNftButtonHeader from "../../buttons/claim-nft-button/header/ClaimNftHeaderButton";
import HeaderLang from "./components/header-lang/HeaderLang";
import HeaderLogo from "./components/header-logo/HeaderLogo";
import HeaderNavButtons from "./components/header-nav-buttons/HeaderNavButtons";

import "./Header.css";

const Header = () => {
  return (
    <div className="headerWrapper">
      <div className="headerBlockDiv">
        <HeaderLogo />
        <HeaderNavButtons />
      </div>
      <div className="headerBlockDiv">
        <HeaderLang />
        <ClaimNftButtonHeader />
      </div>
    </div>
  );
};

export default Header;
