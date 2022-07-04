import React from "react";
import ghLogo from '../../assets/images/github.png';
import liLogo from '../../assets/images/linkedin.png';
import soLogo from '../../assets/images/stackoverflow.png';


function Footer() {
  return (
    <footer className="flex fixed bottom-2 lg:bottom-10 lg:right-10 w-full justify-center lg:w-fit lg:bg-rose-200 lg:p-6 rounded-2xl lg:shadow-xl opacity-70 transition ease-in-out duration-300 hover:opacity-100 lg:opacity-100">
      <ul className="flex items-center lg:flex-col gap-10 lg:gap-6 bg-rose-200 lg:p-0 p-4 rounded-2xl shadow-xl lg:shadow-none">
        <li><a href="https://github.com/Qlaub" target="_blank" rel="noreferrer"><img src={ghLogo} alt="GitHub" width="50" /></a></li>
        <li><a href="https://www.linkedin.com/in/alex-glaubitz-6b5130221/" target="_blank" rel="noreferrer"><img src={liLogo} alt="LinkedIn" width="50" /></a></li>
        <li><a href="https://stackoverflow.com/users/17361764/glaubitz" target="_blank" rel="noreferrer"><img src={soLogo} alt="Stack Overflow" width="40" /></a></li>
      </ul>
    </footer>
  )
}

export default Footer;
