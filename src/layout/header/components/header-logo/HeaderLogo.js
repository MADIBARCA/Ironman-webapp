import { useNavigate } from "react-router-dom";

import "./HeaderLogo.css";

const HeaderLogo = ({ src }) => {
  const navigate = useNavigate();
  return (
    <div className="headerLogoWrapper" onClick={() => navigate("/")}>
      <img src={src} alt="ironman logo" className="headerLogoImg" />
    </div>
  );
};

export default HeaderLogo;
