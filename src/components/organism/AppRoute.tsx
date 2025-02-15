import Hero from "../molecules/Hero";
import Header from "../molecules/Header";
import { BrowserRouter as Router } from "react-router-dom";

const AppRoute = () => {
  return (
    <Router>
      <Header />
      <main>
        <Hero />
      </main>
    </Router>
  );
};

export default AppRoute;
