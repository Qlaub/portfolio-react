import React from "react";
import Header from "./components/Header";
// import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
