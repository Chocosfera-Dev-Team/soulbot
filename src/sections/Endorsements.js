import React from "react";

import { useTranslation } from "react-i18next";

export default function Endorsements() {
  const { t } = useTranslation();

  return (
    <div className="endorsements">
      <div className="content-container">
        <h2 className="section-title">{t("endorsements.title")}</h2>

        <ul className="endorsements-list">
          <li className="endorsement">
            <img
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="partner"
            />
          </li>
          <li className="endorsement">
            <img
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="partner"
            />
          </li>
          <li className="endorsement">
            <img
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="partner"
            />
          </li>
          <li className="endorsement">
            <img
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="partner"
            />
          </li>
          <li className="endorsement">
            <img
              src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80"
              alt="partner"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
