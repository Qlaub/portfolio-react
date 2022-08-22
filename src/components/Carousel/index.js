import React, { useState } from 'react';
import { slideData } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <section className={'flex justify-center items-center relative lg:h-screen2'} >
      <FaArrowAltCircleLeft className='right-arrow absolute top-1/2 text-black z-10 cursor-pointer select-none lg:left-12 lg:text-5xl' onClick={prevSlide} />
      <FaArrowAltCircleRight className='absolute top-1/2 text-black z-10 cursor-pointer select-none lg:right-12 lg:text-5xl' onClick={nextSlide} />
      {slideData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? 'opacity-100 duration-200 scale-105' : 'opacity-0 ease-in-out duration-75'}
            key={index}
          >
            {index === currentSlide && (
              <>
                <img src={slide.image} alt='travel image' className='rounded-md lg:h-screen2 ' />
                <p>{slide.name}</p>
                <p>{slide.deployUrl}</p>
                <p>{slide.repoUrl}</p>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;