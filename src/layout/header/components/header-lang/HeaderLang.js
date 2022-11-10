import eng from "../../../../assets/header/eng.png";
import hebrew from "../../../../assets/header/eng.png";
import "./HeaderLang.css";

const HeaderLang = ({ style }) => {
  return (
    <div className="headerLangWrapper">
      <img src={eng} alt="flag" className="headerLangImg" />
      <span className="headerLangText" style={{ color: style.color }}>
        English
      </span>
      <img src={style.src} alt="arrow down" className="headerLangArrowImg" />
    </div>
  );
};

export default HeaderLang;
