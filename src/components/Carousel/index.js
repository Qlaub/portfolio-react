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

      <div className='md:mx-8 mx-0 relative bg-tertiary py-4 md:py-10 md:rounded-xl'>
        <FaArrowAltCircleLeft className='right-arrow absolute top-1/2 text-quaternary z-10 cursor-pointer select-none md:left-4 left-2 text-6xl' onClick={prevSlide} />
        <FaArrowAltCircleRight className='absolute top-1/2 text-quaternary z-10 cursor-pointer select-none md:right-4 right-2 text-6xl' onClick={nextSlide} />
        {slideData.map((slide, index) => {
          return (
            <div
              className={index === currentSlide ? 'opacity-100 duration-200 ' : 'display-none ease-in-out duration-200 translate-x-16'}
              key={index}
            >
              {index === currentSlide && (
                <>
                <img 
                  src={slide.image} 
                  alt='travel image' 
                  className={`rounded-md h-[430px] w-full md:w-1/2 object-cover object-left ml-0 lg:mr-0 md:ml-28 opacity-5 md:opacity-10 lg:opacity-30 md:hover:opacity-100 md:hover:cursor-pointer ease-in-out duration-300`}
                  onClick={() => openTab(slide.deployUrl)}
                />
                <div className='absolute top-0 right-28 bottom-0 text-right'>
                  <div className='flex items-center h-full '>
                    <div className='flex flex-col gap-14 items-end'>
                      <div className='w-96'>
                        <p className='text-secondary'>Project name:</p>
                        <h2 className='text-5xl text-quaternary'>{slide.name}</h2>
                      </div>
                      <div className='bg-secondary text-tertiary rounded py-4 px-8 flex flex-col gap-6 w-72'>
                        <p>{slide.description}</p>
                        <p>Made with {slide.techUsed}.</p>
                      </div>
                      <div className='flex justify-end text-2xl gap-6'>
                        <FaExternalLinkAlt className='cursor-pointer select-none text-primary text-3xl hover' onClick={() => openTab(slide.deployUrl)} />
                        <FaGithub className='cursor-pointer select-none text-primary text-3xl' onClick={() => openTab(slide.repoUrl)} />
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