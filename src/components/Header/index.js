import React from "react";
import Nav from "../Nav";

function Header({setLinkSelected}) {
  return (
    <header className="flex items-center">
      <h1 className="p-6 mt-2 text-white text-3xl font-semibold tracking-widest bg-[#243E36] transition duration-700 ease-in-out hover:text-black hover:bg-rose-200 hover:cursor-default">AG</h1>
      <Nav setLinkSelected={setLinkSelected}></Nav>
    </header>
  )
}

export default Header;
