import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          dict: { test: "en", enLang: "English", heLang: "Hebrew" },
        },
      },
      he: {
        translation: {
          dict: { test: "he", enLang: "heEnglish", heLang: "heHebrew" },
        },
      },
    },
  });

export default i18n;
