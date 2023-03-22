import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="brand-container">
        <p>Soulbot</p>
      </div>

      <nav className="nav">
        <a href="/">TOOL</a>
        <a href="/">FEATURES</a>
        <a href="/">PRICING</a>
        <a href="/">TEAM</a>
      </nav>

      <div className="actions-container">
        <a href="/">TRY IT OUT</a>
        <div className="lang-container">
          <button>EN</button>
          <button>IT</button>
        </div>
        <button className="login-btn">LOG IN</button>
      </div>
    </div>
  );
}
