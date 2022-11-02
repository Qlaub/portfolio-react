import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import MobileHeader from "./components/MobileHeader";
import MobileHome from "./components/MobileHome";
import useIsInViewport from "./hooks/useIsInViewport";
import MobileAbout from "./components/MobileAbout";
import MobilePortfolio from "./components/MobilePortfolio";
import MobileContact from "./components/MobileContact";

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
    const [showNav, setShowNav] = useState(false);

    const homeRef1 = useRef(null);
    const homeRef2 = useRef(null);
    const aboutRef1 = useRef(null);
    const aboutRef2 = useRef(null);
    const workRef1 = useRef(null);
    const workRef2 = useRef(null);
    const contactRef1 = useRef(null);
    const contactRef2 = useRef(null);

    const homeViewport1 = useIsInViewport(homeRef1);
    const homeViewport2 = useIsInViewport(homeRef2);
    const aboutViewport1 = useIsInViewport(aboutRef1);
    const aboutViewport2 = useIsInViewport(aboutRef2);
    const workViewport1 = useIsInViewport(workRef1);
    const workViewport2 = useIsInViewport(workRef2);
    const contactViewport1 = useIsInViewport(contactRef1);
    const contactViewport2 = useIsInViewport(contactRef2);

    useEffect(() => {
      if (homeViewport1 && homeViewport2) setLinkSelected('home');
      if (aboutViewport1 && aboutViewport2) setLinkSelected('about');
      if (workViewport1 && workViewport2) setLinkSelected('work');
      if (contactViewport1 && contactViewport2) setLinkSelected('contact');
    }, [
      workViewport1, 
      workViewport2,
      homeViewport1,
      homeViewport2,
      aboutViewport1,
      aboutViewport2,
      contactViewport1,
      contactViewport2,
    ]);

    return (
      <div className="m-background-image p-0">
        <div className='m-overlay' style={{ backgroundColor: `${bgColor}` }}></div>
        <div className="content">
      <Router>
        <MobileHeader showNav={showNav} setShowNav={setShowNav} />
        <main className={`ease-in-out duration-150 ${showNav && 'blur-2xl'}`}>
          <MobileHome ref1={homeRef1} ref2={homeRef2} />
          <MobileAbout ref1={aboutRef1} ref2={aboutRef2} />
          <MobilePortfolio ref1={workRef1} ref2={workRef2} />
          <MobileContact ref1={contactRef1} ref2={contactRef2} />
        </main>
      </Router>
      </div>
      </div>
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
