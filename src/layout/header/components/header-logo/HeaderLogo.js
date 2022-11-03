import ironmanLogo from "../../../../assets/header/ironmanLogo.png";

import "./HeaderLogo.css";

const HeaderLogo = () => {
  return (
    <div className="headerLogoWrapper">
      <img src={ironmanLogo} alt="ironman logo" className="headerLogoImg" />
    </div>
  );
};

export default HeaderLogo;
