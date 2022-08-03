import React from "react";
import Nav from "../Nav";

function Header({linkSelected, setLinkSelected}) {
  return (
    <header className="flex items-center">
      <h1 className="p-6 mt-2 text-light text-3xl font-semibold tracking-widest bg-text transition duration-700 ease-in-out hover:text-lighter hover:bg-accentText hover:cursor-default">AG</h1>
      <Nav linkSelected={linkSelected} setLinkSelected={setLinkSelected}></Nav>
    </header>
  )
}

export default Header;
