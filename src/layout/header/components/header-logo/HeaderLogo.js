import ironmanLogo from "../../../../assets/header/ironmanLogo.png";

import { useNavigate } from "react-router-dom";

import "./HeaderLogo.css";

const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <div className="headerLogoWrapper" onClick={() => navigate("/")}>
      <img src={ironmanLogo} alt="ironman logo" className="headerLogoImg" />
    </div>
  );
};

export default HeaderLogo;
