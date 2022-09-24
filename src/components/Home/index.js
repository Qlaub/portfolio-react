import { useTransition, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';
import { BiCodeCurly } from 'react-icons/bi';

function Home() {
  const [show, setShow] = useState(false)
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 100,
    config: config.slow,
  })

  useEffect(() => {
    setShow(true);
  }, [])

  return (
    <div className="flex justify-center items-center h-96 mt-12">
      {transitions((styles, item) => item && (
        <animated.div style={styles}>
          <div className="
            md:p-14
            p-4
            mx-2
            md:m-0
            h-fit 
            flex 
            flex-col 
            items-start 
            shadow-2xl
            shadow-tertiary
            relative
            max-w-5xl
            bg-[#7dcde3]"
          >
            <h2 className="text-6xl text-tertiary font-bold z-10 pb-1">Hey there, I&apos;m Alex Glaubitz</h2>
            <h3 className="text-4xl font-bold text-quaternary z-10">I build web applications</h3>
            <div className='flex pt-8 w-full'>
              <p className="text-lg text-tertiary z-10 max-w-xl">
                I&apos;m a web developer with a passion for detail. I find joy in simple and effective solutions, and I 
                strive to bring out the best in myself and those around me. My holistic approach to the pursuit of achievement
                was fostered by my background as a concertizing cellist for over 20 years.
                {/* My background and longevity as a concertizing 
                cellist of over 20 years has fostered a holistic approach in a pursuit of achievement. */}
              </p>
              <div className='md:flex items-center justify-center w-full hidden'>
                <BiCodeCurly className='text-9xl text-primary' />
              </div>
            </div>
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default Home;
