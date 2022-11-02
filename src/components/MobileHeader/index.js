import PropTypes from "prop-types";
import { IoIosMenu } from 'react-icons/io';

function MobileHeader({showNav, setShowNav}) {

  function toggleNav() {
    setShowNav(!showNav);
  }

  const sections = [
    {
      href: '/#home',
      name: 'Home',
      color: 'primary'
    },
    {
      href: '/#about',
      name: 'About',
      color: 'secondary'
    },
    {
      href: '/#work',
      name: 'Work',
      color: 'tertiary',
    },
    {
      href: '/#contact',
      name: 'Contact',
      color: 'quaternary',
    },
  ];

  return(
    <>
    <div onClick={toggleNav} className='fixed top-2 right-2 z-50 h-12 w-14 bg-quaternary text-tertiary rounded ml-auto text-5xl flex items-center justify-center'>
      <IoIosMenu />
    </div>
    <header className={`fixed h-screen ${!showNav && 'hidden'} w-full z-40 flex`}>
      {/* --- Links --- */}
      <ul className="flex flex-col items-center justify-center text-6xl gap-1 mx-8 w-full">
        {sections.map(({ name, href }) => (
          <div className={`relative w-full h-28`} key={name}>
            <div className={`absolute top-0 left-0 right-0 bottom-0 bg-quaternary opacity-40`}></div>
            <li key={name} className={`w-full h-full mx-1 z-50`}>
                <a href={href} onClick={toggleNav} className={`w-full h-24`}>
                <div className="z-80 relative h-full w-full flex justify-center items-center text-tertiary">
                  {name}
                  </div>
                </a>
            </li>
          </div>
        ))}
      </ul>
    </header>
    </>
  )
}

MobileHeader.propTypes = {
  showNav: PropTypes.bool.isRequired,
  setShowNav: PropTypes.func.isRequired,
};

export default MobileHeader;