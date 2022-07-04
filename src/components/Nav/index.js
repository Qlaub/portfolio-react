import React from "react";

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
    <li className={`mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer ${linkSelected === 'about' && 'border-rose-200'}`} 
      onClick={() => clickHandler('about')}>About
    </li>
    <li className={`mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer ${linkSelected === 'work' && 'border-rose-200'}`}  
      onClick={() => clickHandler('work')}>Work
    </li>
    <li className={`mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer ${linkSelected === 'contact' && 'border-rose-200'}`} 
      onClick={() => clickHandler('contact')}>Contact
    </li>
    <li className={`mr-5 md:mr-8 text-lg text-black tracking-wide transition ease-in-out duration-75 border-b-2 border-transparent hover:border-rose-200 cursor-pointer ${linkSelected === 'resume' && 'border-rose-200'}`}  
      onClick={() => clickHandler('resume')}>Resume
    </li>
  </ul>
</nav>
  )
}

export default Nav;
