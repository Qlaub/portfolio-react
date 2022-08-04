import React from "react";
import { Link } from "react-router-dom";
import resumePDF from '../../assets/documents/resume.pdf';

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
  <ul className={`flex ml-6 rounded bg-quaternary`}>
    <Link to="/" className=""> 
      <li className={`py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 cursor-pointer rounded-sm ${linkSelected === 'home' ? 'bg-secondary' : 'hover:bg-primary'}`} 
        onClick={() => clickHandler('home')}>Home
      </li>
    </Link>
    <Link to="/about"> 
      <li className={`py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 cursor-pointer rounded-sm ${linkSelected === 'about' ? 'bg-secondary' : 'hover:bg-primary'}`} 
        onClick={() => clickHandler('about')}>About
      </li>
    </Link>
    <Link to="/portfolio"> 
      <li className={`py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 cursor-pointer rounded-sm ${linkSelected === 'work' ? 'bg-secondary' : 'hover:bg-primary'}`}  
        onClick={() => clickHandler('work')}>Work
      </li>
    </Link>
    <Link to="/contact"> 
      <li className={`py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 cursor-pointer rounded-sm ${linkSelected === 'contact' ? 'bg-secondary' : 'hover:bg-primary'}`} 
        onClick={() => clickHandler('contact')}>Contact
      </li>
    </Link>
    <a href={resumePDF} download className="py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 hover:border-lighter cursor-pointer rounded-sm hover:bg-primary">Resume</a>
    {/* <Link to="/resume"> 
      <li className={`py-2 px-8 text-lg text-tertiary tracking-wide transition ease-in-out duration-75 border border-transparent hover:border-lighter cursor-pointer rounded-sm ${linkSelected === 'resume' && 'bg-secondary'}`}  
        onClick={() => clickHandler('resume')}>Resume
      </li>
    </Link> */}
  </ul>
</nav>
  )
}

export default Nav;
