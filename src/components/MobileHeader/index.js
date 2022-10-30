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
    <header className="fixed h-screen top-2 right-2 z-50 w-full">
      <div>
        <div onClick={toggleNav} className='h-12 w-14 bg-quaternary text-tertiary rounded ml-auto text-5xl flex items-center justify-center'>
          <IoIosMenu />
        </div>
        <div className={!showNav && 'hidden'}>
          <ul className="flex flex-col items-center text-6xl gap-3 mx-8">
            {sections.map(({ name, href }) => (
              <div className={`relative w-full h-28 flex items-center`} key={name}>
                <div className={`absolute top-0 left-0 right-0 bottom-0 bg-quaternary opacity-40`}></div>
                <li key={name} className={`w-full h-full mx-1`}>
                    <a href={href} onClick={toggleNav} className={`w-full h-24`}>
                    <div className="z-80 relative h-full w-full flex justify-center items-center text-tertiary">
                      {name}
                      </div>
                    </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

MobileHeader.propTypes = {
  showNav: PropTypes.bool.isRequired,
  setShowNav: PropTypes.func.isRequired,
};

export default MobileHeader;