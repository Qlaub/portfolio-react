import ghLogo from '../../assets/images/github.png';
import liLogo from '../../assets/images/linkedin.png';
import soLogo from '../../assets/images/stackoverflow.png';
import PropTypes from "prop-types";

function Footer({ linkSelected }) {

  return (
    <footer className={`
      flex 
      fixed 
      bottom-2 
      md:bottom-10 
      md:right-10 
      w-full 
      justify-center 
      md:w-fit 
      ${linkSelected === 'work' ? 'opacity-0' : 'opacity-70 md:opacity-100 hover:opacity-100' }
      md:bg-secondary
      rounded-2xl 
      md:shadow-xl 
      transition
      transition-opacity 
      ease-in-out 
      duration-300 
      `}
    >
      <ul className={`
        flex 
        items-center 
        md:flex-col 
        gap-10 
        md:gap-6 
        ${linkSelected === 'work' ? 'bg-black' : 'bg-secondary'}
        transition 
        ease-in-out 
        duration-300 
        md:p-6 
        p-4 
        rounded-2xl 
        shadow-4xl 
        md:shadow-none`}
      >
        <li><a href="https://github.com/Qlaub" target="_blank" rel="noreferrer"><img src={ghLogo} alt="GitHub" width="50" /></a></li>
        <li><a href="https://www.linkedin.com/in/alex-glaubitz-6b5130221/" target="_blank" rel="noreferrer"><img src={liLogo} alt="LinkedIn" width="50" /></a></li>
        <li><a href="https://stackoverflow.com/users/17361764/glaubitz" target="_blank" rel="noreferrer"><img src={soLogo} alt="Stack Overflow" width="40" /></a></li>
      </ul>
    </footer>
  )
}

Footer.propTypes = {
  linkSelected: PropTypes.string.isRequired,
};

export default Footer;
