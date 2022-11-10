import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import eng from "../../../../assets/header/eng.png";
import hebrew from "../../../../assets/header/eng.png";

import { enData, heData } from "./headerLang.data";

import "./HeaderLang.css";
import { useDispatch, useSelector } from "react-redux";
import { addLanguage } from "../../../../redux/languageSlice";

const HeaderLang = ({ style }) => {
  const [open, setOpen] = useState(false);
  const [langData, setLangData] = useState(enData);
  const [inactiveLangData, setInactiveLangData] = useState(heData);

  const dispatch = useDispatch();
  const storeLang = useSelector((state) => state.language);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (storeLang === "en") {
      setLangData(enData);
      setInactiveLangData(heData);
    }
    if (storeLang === "he") {
      setLangData(heData);
      setInactiveLangData(enData);
    }
  }, [storeLang]);
  return (
    <div className="langDropdownWrapper">
      <div
        className="headerLangWrapper"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={langData.img} alt="flag" className="headerLangImg" />
        <span className="headerLangText" style={{ color: style.color }}>
          {t(langData.text)}
        </span>
        <img src={style.src} alt="arrow down" className="headerLangArrowImg" />
      </div>
      {open && (
        <div
          className="headerLangWrapper"
          style={{ position: "absolute" }}
          onClick={() => {
            i18n.changeLanguage(inactiveLangData.lang);
            dispatch(addLanguage(inactiveLangData.lang));
            setOpen(false);
          }}
        >
          <img
            src={inactiveLangData.img}
            alt="flag"
            className="headerLangImg"
          />
          <span className="headerLangText" style={{ color: style.color }}>
            {t(inactiveLangData.text)}
          </span>
          <img
            src={style.src}
            alt="arrow down"
            className="headerLangArrowImg"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderLang;
