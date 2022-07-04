import React, { useState } from "react";
import { validateEmail, capitalizeFirstLetter } from "../../utils/helpers";

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="mx-2 mt-20 mb-24 md:ml-24 md:mr-48 lg:ml-32 lg:mr-96">
      <h2 className="gap-6 mb-20 md:gap-8 lg:gap-10 mb-10 ml-2 md:ml-24 lg:mb-20 lg:mt-20 text-5xl font-bold tracking-wide text-[#474747]">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-56">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} className="w-full border-slate-300 border" />
        </div>
        <div className="w-56">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" defaultValue={email} onBlur={handleChange} className="w-full border-slate-300 border" />
        </div>
        <div className="w-full md:w-96">
          <label htmlFor="message">Message: </label>
          <textarea name="message" defaultValue={message} onBlur={handleChange} className="w-full h-40 border-slate-300 border" />
        </div>
        <div>
          <button type="submit" className="bg-[#2A5042] text-white px-4 py-2 rounded-lg transition ease-in-out duration-75 hover:bg-[#152821]">Submit</button>
          {errorMessage && (
            <span className="ml-4 text-red-600">{errorMessage}</span>
          )}
        </div>
      </form>
    </section>
  )
}

export default Contact;
