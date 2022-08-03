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
      case 'resume':
        setLinkSelected('resume');
        break;
      default:
        setLinkSelected('home');
    }
  }

  return (
<nav>
  <ul className="flex ml-6">
    <Link to="/" className=""> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 hover:border-lighter cursor-pointer border border-transparent rounded-sm ${linkSelected === 'home' && 'bg-secondary'}`} 
        onClick={() => clickHandler('home')}>Home
      </li>
    </Link>
    <Link to="/about"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 hover:border-lighter cursor-pointer border border-transparent rounded-sm ${linkSelected === 'about' && 'bg-secondary'}`} 
        onClick={() => clickHandler('about')}>About
      </li>
    </Link>
    <Link to="/portfolio"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer rounded-sm ${linkSelected === 'work' && 'bg-secondary'}`}  
        onClick={() => clickHandler('work')}>Work
      </li>
    </Link>
    <Link to="/contact"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer rounded-sm ${linkSelected === 'contact' && 'bg-secondary'}`} 
        onClick={() => clickHandler('contact')}>Contact
      </li>
    </Link>
    <Link to="/resume"> 
      <li className={`mr-5 md:mr-8 py-2 px-3 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer rounded-sm ${linkSelected === 'resume' && 'bg-secondary'}`}  
        onClick={() => clickHandler('resume')}>Resume
      </li>
    </Link>
  </ul>
</nav>
  )
}

export default Nav;
