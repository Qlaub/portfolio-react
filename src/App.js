import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import { useSelector } from 'react-redux';

// sets linkSelected useState on reload
// helps determine proper background opacity
let page;
switch(window.location.pathname) {
  case '/portfolio':
    page = 'work';
    break;
  case '/about':
    page = 'about';
    break;
  case '/contact':
    page = 'contact';
    break;
  default:
    page = 'home';
}

function App() {
  const { currentTab } = useSelector(state => state.currentTab)
  const [linkSelected, setLinkSelected] = useState(page);

  return (
    <div className="background-image p-0">
      <div className='overlay' style={linkSelected === 'home' ? {backgroundColor: 'rgba(255, 255, 255, 0'} : {backgroundColor: 'rgba(255, 255, 255, 0.9'}}></div>
      <div className="content">
        <Router>
          <Header linkSelected={linkSelected} setLinkSelected={setLinkSelected} />
          <main>
            <Routes>
              <Route path="/portfolio-react" element={<Home />} />
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