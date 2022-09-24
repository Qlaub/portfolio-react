import { useTransition, animated, config } from 'react-spring';
import { useEffect, useState, useRef } from 'react';
import { validateEmail } from "../../utils/helpers";
import { RiMailSendLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';

function Contact() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const formRef = useRef();

  const [show, setShow] = useState(false)
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    delay: 100,
    config: config.slow,
  })

  useEffect(() => {
    setShow(true);
  }, [])

  const windowSize = window.innerWidth;
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (windowSize < 768 && !mobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [])

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState({ target: '', val: '' });

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  function checkErrors() {
    const validEmail = validateEmail(email);

    if (!name) {
      setErrorMessage({ target: 'name', val: 'Please enter your name' });
      nameRef.current.focus();
      return true;
    }
    if (!validEmail) { 
      setErrorMessage({ target: 'email', val: 'Please enter a valid email' });
      emailRef.current.focus();
      return true;
    }
    if (!message) {
       setErrorMessage({ target: 'message', val: 'Please enter a message' });
       messageRef.current.focus();
       return true;
    }

    setErrorMessage({ target: '', val: ''});
    return false;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = checkErrors();

    console.log(errors);

    if (errors) return;

    emailjs.sendForm('portfolio_service', 'contact_form', formRef.current, 'EdN6ktJzo4SGJL4tX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section className="flex justify-center items-center mt-12">
      {transitions((styles, item) => item && (
        <animated.div style={styles}>
          <div className='bg-quaternary flex flex-col max-w-[800px] gap-2 p-4 md:p-14 md:pb-10 shadow-2xl shadow-tertiary'>
            <div className='flex items-end gap-6 md:justify-start justify-center'>
              <h2 className="text-6xl text-tertiary font-bold">Contact Me</h2>
              <RiMailSendLine className='text-6xl text-primary'/>
            </div>
            <div>
              <p className='text-zinc-600 md:text-left text-center'>&#40;check out my social media links {mobile ? 'at the bottom of the page' : 'at the bottom right of the page'}!&#41;</p>
            </div>
            <form onSubmit={handleSubmit} ref={formRef} className="mt-4">
              <div className={`w-full md:w-1/2 ${errorMessage.target === 'name' && 'mb-3'}`}>
                <label htmlFor="name" className='text-lg text-zinc-600'>Name*</label>
                <div className='relative'>
                  <input type="text" name="name" defaultValue={name} ref={nameRef} onChange={(e) => handleChange(e)} className="focus:outline-primary px-1 text-lg h-8 w-full border-slate-300 border rounded-sm mb-2" />
                  <p className={`absolute left-2 -bottom-3 font-xl text-red-500 ${errorMessage.target !== 'name' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${errorMessage.target === 'email' && 'mb-3'}`}>
                <label htmlFor="email" className='text-lg text-zinc-600'>Email*</label>
                <div className='relative'>
                  <input type="text" name="email" defaultValue={email} ref={emailRef} onChange={(e) => handleChange(e)} className="focus:outline-primary px-1 text-lg h-8 w-full border-slate-300 border rounded-sm mb-2" />
                <p className={`absolute left-2 -bottom-3 font-xl text-red-500 ${errorMessage.target !== 'email' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div className={`w-full md:w-full ${errorMessage.target === 'message' && 'mb-3'}`}>
                <label htmlFor="message" className='text-lg text-zinc-600'>Message*</label>
                <div className='relative'>
                  <textarea name="message" defaultValue={message} ref={messageRef} onChange={(e) => handleChange(e)} className="focus:outline-primary resize-none px-1 text-lg w-full h-32 border-slate-300 border rounded-sm mb-0 pb-0" />
                  <p className={`absolute left-2 -bottom-4 font-xl text-red-500 ${errorMessage.target !== 'message' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div>
                <button type="submit" className="tracking-wider bg-[#ffdca4] w-full md:w-fit rounded border-2 border-tertiary text-xl font-bold text-tertiary px-8 py-3 transition ease-in-out duration-75 hover:bg-secondary mt-3">Submit</button>
              </div>
            </form>
          </div>
        </animated.div>
      ))}
    </section>
  )
}

export default Contact;
