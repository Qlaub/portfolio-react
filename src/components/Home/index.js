import { SiHeadspace } from "react-icons/si"
import { useTransition, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';

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
    <div className="flex justify-center items-center h-96 mt-16">
      {transitions((styles, item) => item && (
        <animated.div style={styles}>
          <div className="
            px-10 
            pt-8
            pb-8  
            rounded-3xl 
            h-fit 
            flex 
            flex-col 
            items-center 
            shadow-2xl
            bg-quaternary
            border-4
            border-secondary"
          >
            <h2 className="text-3xl text-zinc-900">Hello! I&apos;m Alex Glaubitz.</h2>
            <h3 className="text-xl pb-8 text-zinc-600">I build web applications. </h3>
            <div className="text-primary hover:text-secondary transition-in-out duration-300">
              <SiHeadspace />
            </div>
            <p className="text-lg text-zinc-800 max-w-xl pt-8 max-w-lg">
              I&apos;m a web developer with a passion for detail. I find joy in simple and effective solutions, and I 
              strive to bring out the best in myself and those around me. My holistic approach to the pursuit of achievement
              was fostered by my background as a concertizing cellist of over 20 years.
              {/* My background and longevity as a concertizing 
              cellist of over 20 years has fostered a holistic approach in a pursuit of achievement. */}
            </p>
          </div>
        </animated.div>
      ))}
    </div>
  )
}

export default Home;
