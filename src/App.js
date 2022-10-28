import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import MobileHeader from "./components/MobileHeader";

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
  const [linkSelected, setLinkSelected] = useState(page);
  const [mobile, setMobile] = useState('loading');

  useEffect(() => {
    window.innerWidth <= 640 ? setMobile(true) : setMobile(false);
  }, []);

  let bgColor;
  switch(linkSelected) {
    case 'work':
      bgColor = 'rgba(0, 0, 0, 0.90)';
      break;
    case 'about':
      bgColor = 'rgba(254, 216, 154, 0.8)';
      break;
    case 'contact':
      bgColor = 'rgba(255, 255, 255, 0.90)';
      break;
    default: 
      bgColor = 'rgba(159, 218, 234, 0.8)';
  }

  if (mobile === 'loading') {
    return (
      <div>loading...</div>
    )
  }

  const DesktopApplication = () => {
    return (
      <div className="background-image p-0">
        <div className='overlay' style={{ backgroundColor: `${bgColor}` }}></div>
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
            <Footer linkSelected={linkSelected} />
          </Router>
        </div>
      </div>
    )
  };

  const MobileApplication = () => {
    return (
      <Router>
        <MobileHeader />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="work">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </Router>
    )
  };

  return (
    <>
      {mobile 
        ? <MobileApplication />
        : <DesktopApplication />
      }
    </>
  );
}

export default App;
