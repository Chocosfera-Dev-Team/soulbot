import React, { useEffect } from "react";

import i18next from "i18next";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  return (
    <div className="header">
      <div className="brand-container">
        <p>Soulbot</p>
      </div>

      <nav className="nav">
        <a href="#modules">{t("header.nav.0")}</a>
        <a href="#functionality">{t("header.nav.1")}</a>
        <a href="#plans">{t("header.nav.2")}</a>
        <a href="#about-us">{t("header.nav.3")}</a>
      </nav>

      <div className="actions-container">
        <a href="#contact">{t("header.demo-link")}</a>
        <div className="lang-container">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("it")}>IT</button>
        </div>
        <button className="btn">LOG IN</button>
      </div>
    </div>
  );
}
