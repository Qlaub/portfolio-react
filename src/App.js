import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [linkSelected, setLinkSelected] = useState('home');

  return (
    <div className="background-image p-0">
      {/* below doesn't work because app.js doesn't remount after linkSelected is set*/}
      <div className='overlay' style={linkSelected === 'home' ? {backgroundColor: 'rgba(255, 255, 255, 0'} : {backgroundColor: 'rgba(255, 255, 255, 0.9'}}></div>
      <div className="content">
        <Router>
          <Header linkSelected={linkSelected} setLinkSelected={setLinkSelected} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
      
    </div>
  );
}

export default App;
