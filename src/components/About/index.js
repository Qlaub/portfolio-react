import photo from '../../assets/images/alex-face.png';
import { useTransition, animated, config } from 'react-spring';
import { useEffect, useState } from 'react';

function About() {
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
    <section className="flex justify-center items-center mt-12">
      {transitions((styles, item) => item && (
        <animated.div style={styles}>
          <div className='bg-secondary flex flex-col max-w-5xl gap-8 p-4 md:p-14 shadow-2xl shadow-tertiary'>
            <div className="flex items-center gap-6 md:gap-8 lg:gap-12">
              <h2 className="text-6xl text-tertiary font-bold">About Me</h2>
              <div className="w-32 md:w-40 bg-[#fea516] p-1 rounded-full">
                <div className='bg-quaternary p-1 rounded-full'>
                  <img src={photo} alt="Alex Glaubitz" />
                </div>
              </div>
            </div>
            <div className="leading-7 text-lg text-tertiary">
              <p className="max-w-2xl">
                I&apos;m an inquisitive and passionate full stack web developer who brings experience with JavaScript/TypeScript, 
                the MERN and SERN stacks, and Git. After graduating the UNC-Chapel Hill coding boot camp certificate program in
                August of this year, I now work as a web developer with a startup company. I&apos;m looking for growth 
                opportunities to try new technologies and further my technical skill set in a team or solo environment. 
                My background as a classical musician has helped me carry forth a customer focused and detail-oriented approach, 
                and utilize this to create gratifying experiences for users and team members.
              </p>
            </div>
          </div>
        </animated.div>
      ))}
    </section>
  )
}

export default About;
