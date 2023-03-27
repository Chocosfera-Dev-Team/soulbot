import React, { Suspense } from "react";
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

function App() {
  return (
    <>
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
      </Suspense>
    </>
  );
}

export default App;
