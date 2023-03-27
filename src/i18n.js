import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LangageDetector from "i18next-browser-languagedetector";

const fallbackLng = ["it"];
const availableLanguages = ["en", "it"];

i18n
  .use(Backend)
  .use(LangageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng,
    detection: {
      checkWhitelist: true,
    },
    debug: false,
    whitelist: availableLanguages,
  });

export default i18n;
