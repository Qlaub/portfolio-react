import { useState } from 'react';
import { slideData } from './data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slideData.length;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  const openTab = (link) => {
    window.open(
      link, "_blank");
  }

  if (!Array.isArray(slideData) || slideData.length <= 0) {
    return null;
  }

  return (
    <section className='flex justify-center items-center relative h-screen2' >

      <div className='md:mx-8 mx-0 relative'>
        <FaArrowAltCircleLeft className='right-arrow absolute top-1/2 text-black z-10 cursor-pointer select-none left-0 text-5xl' onClick={prevSlide} />
        <FaArrowAltCircleRight className='absolute top-1/2 text-black z-10 cursor-pointer select-none md:-right-8 -right-2 text-5xl' onClick={nextSlide} />
        {slideData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? 'opacity-100 duration-200 scale-105' : 'display-none ease-in-out duration-200'}
              key={index}
            >
              {index === currentSlide && (
                <>
                <img src={slide.image} alt='travel image' className='rounded-md h-screen2 w-2/3 object-cover object-left ml-16 lg:ml-24' />
                <div className='absolute top-0 right-16 bottom-0 text-right'>
                  <div className='flex items-center h-full '>
                    <div className='flex flex-col gap-8 items-end'>
                      <div className='w-96'>
                        <p>Project name:</p>
                        <h2 className='text-4xl'>{slide.name}</h2>
                      </div>
                      <div className='bg-white rounded py-4 px-8 flex flex-col gap-4 w-72'>
                        <p>{slide.description}</p>
                        <p>Made with {slide.techUsed}.</p>
                      </div>
                      <div className='flex justify-end text-2xl gap-6'>
                        <FaExternalLinkAlt className='cursor-pointer select-none' onClick={() => openTab(slide.deployUrl)} />
                        <FaGithub className='cursor-pointer select-none' onClick={() => openTab(slide.repoUrl)} />
                      </div>
                    </div>
                  </div>
                </div>
                </>
              )}
            </div>
            )
          })}
          </div>
    </section>
  );
};

export default Carousel;