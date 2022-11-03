import eng from "../../../../assets/header/eng.png";
import hebrew from "../../../../assets/header/eng.png";
import arrowDown from "../../../../assets/header/arrowDown.png";

import "./HeaderLang.css";

const HeaderLang = () => {
  return (
    <div className="headerLangWrapper">
      <img src={eng} alt="flag" className="headerLangImg" />
      <span className="headerLangText">English</span>
      <img src={arrowDown} alt="arrow down" className="headerLangArrowImg" />
    </div>
  );
};

export default HeaderLang;
