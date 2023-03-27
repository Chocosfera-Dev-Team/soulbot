import React from "react";

import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="content-container">
        <div className="hero-text">
          <h1>{t("hero.title")}</h1>
          <p>{t("hero.paragraph")}</p>

          <div className="hero-actions">
            <button className="btn">{t("hero.btn-one")}</button>
            <button className="btn">{t("hero.btn-two")}</button>
          </div>
        </div>

        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );
}
