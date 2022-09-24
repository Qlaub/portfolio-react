import { useTransition, animated, config } from 'react-spring';
import { useEffect, useState, useRef } from 'react';
import { validateEmail } from "../../utils/helpers";
import { RiMailSendLine } from 'react-icons/ri';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const notify = (status) => {
    if (status === 'success') return toast.success('Email sent, thank you!', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    return toast.error('Unexpected error...', {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  function clearErrors() {
    if (!name) return;
    if (!validateEmail(email)) return;
    if (!message) return;

    return setErrorMessage({ target: '', val: ''});
  }

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
    clearErrors();
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
        if (result.text === 'OK') {
          notify('success');
          return setFormState({ name: '', email: '', message: '' });
        }
      }, (error) => {
        console.log(error);
        notify('')
      });
  }

  return (
    <section className="flex justify-center items-center mt-12">
      {transitions((styles, item) => item && (
        <animated.div style={styles}>
          <div className='bg-quaternary flex flex-col max-w-[800px] gap-2 p-8 md:p-14 md:pb-10 shadow-2xl shadow-tertiary'>
            <div className='flex items-end gap-6 md:justify-start justify-center md:min-w-[515px]'>
              <h2 className="text-6xl text-tertiary font-bold">Contact Me</h2>
              <RiMailSendLine className='text-6xl text-primary'/>
            </div>
            <div className='hidden md:inline-block'>
              <p className='text-zinc-600 md:text-left text-center'>&#40;social media links {mobile ? 'at the bottom of the page' : 'at the bottom right of the page'}!&#41;</p>
            </div>
            <form onSubmit={handleSubmit} ref={formRef} className="mt-4">
              <div className={`w-full md:w-1/2 ${errorMessage.target === 'name' && 'mb-3'}`}>
                <label htmlFor="name" className='text-lg text-zinc-600'>Name*</label>
                <div className='relative'>
                  <input type="text" name="name" value={name} ref={nameRef} onChange={(e) => handleChange(e)} className={`focus:outline-primary px-1 text-lg h-8 w-full ${errorMessage.target === 'name' ? 'focus:outline-red-300 border-red-300' : 'focus:outline-primary' } border rounded-sm mb-2`} />
                  <p className={`absolute left-2 -bottom-3 font-xl text-red-500 ${errorMessage.target !== 'name' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div className={`w-full md:w-1/2 ${errorMessage.target === 'email' && 'mb-3'}`}>
                <label htmlFor="email" className='text-lg text-zinc-600'>Email*</label>
                <div className='relative'>
                  <input type="text" name="email" value={email} ref={emailRef} onChange={(e) => handleChange(e)} className={`focus:outline-primary px-1 text-lg h-8 w-full ${errorMessage.target === 'email' ? 'focus:outline-red-300 border-red-300' : 'focus:outline-primary' } border rounded-sm mb-2`} />
                <p className={`absolute left-2 -bottom-3 font-xl text-red-500 ${errorMessage.target !== 'email' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div className={`w-full md:w-full ${errorMessage.target === 'message' && 'mb-3'}`}>
                <label htmlFor="message" className='text-lg text-zinc-600'>Message*</label>
                <div className='relative'>
                  <textarea name="message" value={message} ref={messageRef} onChange={(e) => handleChange(e)} className={`${errorMessage.target === 'message' ? 'focus:outline-red-300 border-red-300' : 'focus:outline-primary' } border-slate-300 border resize-none px-1 text-lg w-full h-32 rounded-sm mb-0 pb-0`} />
                  <p className={`absolute left-2 -bottom-4 font-xl text-red-500 ${errorMessage.target !== 'message' && 'hidden'}`}>{errorMessage.val}</p>
                </div>
              </div>
              <div>
                <button type="submit" className="tracking-wider bg-[#ffdca4] w-full md:w-fit rounded border-2 border-tertiary text-xl font-bold text-tertiary px-8 py-3 transition ease-in-out duration-75 hover:bg-secondary mt-3">Submit</button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </animated.div>
      ))}
    </section>
  )
}

export default Contact;
