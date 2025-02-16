import Hero from "../molecules/Hero";
import Header from "../molecules/Header";
import { BrowserRouter as Router } from "react-router-dom";
import TrustedBySec from "../atoms/TrustedBySec";
import OurService from "../molecules/OurService";
import AboutUs from "../molecules/AboutUs";

import OurNation from "../molecules/OurNation";
import OurVision from "../molecules/OurVision";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <main>
        <Hero />
        <TrustedBySec />
        <OurService />
        <AboutUs />
        <OurNation />
        <OurVision />
      </main>
    </Router>
  );
};

export default AppRoute;
