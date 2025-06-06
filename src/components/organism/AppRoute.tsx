import Hero from "../molecules/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import TrustedBySec from "../atoms/TrustedBySec";
import OurService from "../molecules/OurService";
import AboutUs from "../molecules/AboutUs";

import OurNation from "../molecules/OurNation";
import OurVision from "../molecules/OurVision";
import Testimonial from "../molecules/Testimonial";
import Footer from "../molecules/Footer";
import Navbar from "../molecules/Navbar";

const AppRoute = () => {
  return (
    <Router>
      <Navbar />
      <div className="px-[2rem] md:px-0">
        <main>
          <Hero />
          <TrustedBySec />
          <OurService />
          <AboutUs />
          <OurNation />
          <OurVision />
          <Testimonial />
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default AppRoute;
