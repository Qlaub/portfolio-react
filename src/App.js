import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [linkSelected, setLinkSelected] = useState('about');

  return (
    <div className="background-image p-0">
      <Router>
        <Header linkSelected={linkSelected} setLinkSelected={setLinkSelected} />
        <main>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
