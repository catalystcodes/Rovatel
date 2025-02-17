import Hero from "../molecules/Hero";
import Header from "../molecules/Header";
import { BrowserRouter as Router } from "react-router-dom";
import TrustedBySec from "../atoms/TrustedBySec";
import OurService from "../molecules/OurService";
import AboutUs from "../molecules/AboutUs";

import OurNation from "../molecules/OurNation";
import OurVision from "../molecules/OurVision";
import Testimonial from "../molecules/Testimonial";
import Footer from "../molecules/Footer";

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
        <Testimonial />
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoute;
