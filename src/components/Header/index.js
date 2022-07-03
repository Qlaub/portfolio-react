import React from "react";
import Nav from "../Nav";

function Header({setLinkSelected}) {
  return (
    <header>
      <h1>AG</h1>
      <Nav setLinkSelected={setLinkSelected}></Nav>
    </header>
  )
}

export default Header;
