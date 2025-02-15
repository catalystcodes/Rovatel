import Hero from "../molecules/Hero";
import Header from "../molecules/Header";
import { BrowserRouter as Router } from "react-router-dom";
import TrustedBySec from "../atoms/TrustedBySec";
import OurService from "../molecules/OurService";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <main>
        <Hero />
        <TrustedBySec />
        <OurService />
      </main>
    </Router>
  );
};

export default AppRoute;
