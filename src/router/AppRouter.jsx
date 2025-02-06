import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout"; 
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
