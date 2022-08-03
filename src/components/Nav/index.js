import React from "react";
import { Link } from "react-router-dom";

function Nav({linkSelected, setLinkSelected}) {
  function clickHandler(section) {
    switch(section) {
      case 'about':
        setLinkSelected('about');
        break;
      case 'work':
        setLinkSelected('work');
        break;
      case 'contact':
        setLinkSelected('contact');
        break;
      default:
        setLinkSelected('resume');
    }
  }

  return (
<nav>
  <ul className="flex ml-6">
    <Link to="/about"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-text tracking-wide transition ease-in-out duration-75 hover:border-lighter cursor-pointer border border-transparent ${linkSelected === 'about' && 'border-light'}`} 
        onClick={() => clickHandler('about')}>About
      </li>
    </Link>
    <Link to="/portfolio"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-text tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer ${linkSelected === 'work' && 'border-light'}`}  
        onClick={() => clickHandler('work')}>Work
      </li>
    </Link>
    <Link to="/contact"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-text tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer ${linkSelected === 'contact' && 'border-light'}`} 
        onClick={() => clickHandler('contact')}>Contact
      </li>
    </Link>
    <Link to="/resume"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-text tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer ${linkSelected === 'resume' && 'border-light'}`}  
        onClick={() => clickHandler('resume')}>Resume
      </li>
    </Link>
  </ul>
</nav>
  )
}

export default Nav;
