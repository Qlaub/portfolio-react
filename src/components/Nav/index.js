import React from "react";

function Nav({setLinkSelected}) {
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
      <ul>
        <li onClick={() => clickHandler('about')}>About Me</li>
        <li onClick={() => clickHandler('work')}>Work</li>
        <li onClick={() => clickHandler('contact')}>Contact Me</li>
        <li onClick={() => clickHandler('resume')}>Resume</li>
      </ul>
    </nav>
  )
}

export default Nav;
