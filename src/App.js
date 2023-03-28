import React, { useState, useEffect, Suspense } from "react";
import "./i18n";

import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Functionality from "./sections/Functionality";
import Endorsements from "./sections/Endorsements";
import Referrals from "./sections/Referrals";
import Plans from "./sections/Plans";
import Modules from "./sections/Modules";
import AboutUs from "./sections/AboutUs";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import { ReactComponent as MoonIco } from "./assets/icons/moon.svg";
import { ReactComponent as SunIco } from "./assets/icons/sun.svg";

function App() {
  const [theme, setTheme] = useState();

  useEffect(() => {
    setTheme(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <Suspense fallback={null}>
        <Header />
        <Hero />
        <Endorsements />
        <Functionality />
        <Referrals />
        <Plans />
        <Modules />
        <AboutUs />
        <Contact />
        <Footer />
        <div style={themeSwitchStyle} onClick={handleThemeSwitch}>
          {theme === "light" ? <MoonIco /> : <SunIco />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;

const themeSwitchStyle = {
  position: "fixed",
  right: "50px",
  bottom: "50px",
  backgroundColor: "#72A4BD",
  fontSize: "1.6rem",
  padding: "0.8rem",
  cursor: "pointer",
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
};
