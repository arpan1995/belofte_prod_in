import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Component Imports
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ImpactSection from "./components/ImpactSection";
import News from "./components/News";
import Footer from "./components/Footer";

// Page Imports
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import "./index.css";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Projects />
              <ImpactSection />
              <News />
              <Footer />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <About />
              <Footer />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Donate Page */}
        <Route
          path="/donate"
          element={
            <>
              <Donate />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
