import React from "react";
import Nav from "../Nav";

function Header({linkSelected, setLinkSelected}) {
  return (
    <header className="flex items-center">
      <h1 className={`p-5 mt-2 ${linkSelected === 'home' ? 'text-tertiary' : 'text-quaternary'} text-5xl font-semibold tracking-widest ${linkSelected === 'home' ? 'bg-quaternary' : 'bg-tertiary'} transition duration-500 ease-in-out hover:text-lighter hover:bg-accentText hover:cursor-default`}>AG</h1>
      <Nav linkSelected={linkSelected} setLinkSelected={setLinkSelected}></Nav>
    </header>
  )
}

export default Header;
