// import Project from "../Project";
import PropTypes from "prop-types";
import MobileCarousel from "../MobileCarousel";

function MobilePortfolio({ ref1, ref2 }) {
  
  return (
    <div className="
      flex
      w-screen
      justify-center
      items-center
      h-screen
    ">
      <div className='max-w-[976px]'>
        <div ref={ref1} />
        <MobileCarousel />
        <div ref={ref2} />
      </div>
    </div>
  )
}

MobilePortfolio.propTypes = {
  ref1: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  ref2: PropTypes.oneOfType([
    PropTypes.func, 
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
};

export default MobilePortfolio;
