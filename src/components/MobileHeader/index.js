import { useState } from 'react';

function MobileHeader() {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return(
    <header className="fixed z-50 w-full">
      <div>
        <div onClick={toggleNav} className='h-12 w-12 border border-black bg-white ml-auto text-2xl p-1'>X</div>
        <div className={!showNav && 'hidden'}>
          <ul className="flex flex-col w-full items-end">
            <li>
              <a href="/#home">
                Home
              </a>
            </li>
            <li>
              <a href="/#about">
                About
              </a>
            </li>
            <li>
              <a href="/#work">
                Work
              </a>
            </li>
            <li>
              <a href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

    </header>
  )
}

export default MobileHeader;