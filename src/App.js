import React, { useState } from "react";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [linkSelected, setLinkSelected] = useState('about');

  return (
    <div className="">
      <Header setLinkSelected={setLinkSelected}></Header>
      <main>
        {linkSelected === 'about' && <About></About>}
        {linkSelected === 'work' && <Portfolio></Portfolio>}
        {linkSelected === 'contact' && <Contact></Contact>}
        {linkSelected === 'resume' && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
