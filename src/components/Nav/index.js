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
  <ul className="flex ml-6">
    <li className="mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer" 
      onClick={() => clickHandler('about')}>About
    </li>
    <li className="mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer" 
      onClick={() => clickHandler('work')}>Work
    </li>
    <li className="mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer" 
      onClick={() => clickHandler('contact')}>Contact
    </li>
    <li className="mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer" 
      onClick={() => clickHandler('resume')}>Resume
    </li>
  </ul>
</nav>
  )
}

export default Nav;
