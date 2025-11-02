import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ImpactSection from "./components/ImpactSection";
import News from "./components/News";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page with all sections together */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects /> {/* ✅ Projects is now part of Home */}
              <ImpactSection />
              <News />
              <Footer />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
};

export default App;
