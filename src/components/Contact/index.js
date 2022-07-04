import React, { useState } from "react";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="mx-2 mt-20 mb-24 md:ml-24 md:mr-48 lg:ml-32 lg:mr-96">
      <h2 className="gap-6 mb-20 md:gap-8 lg:gap-10 mb-10 ml-2 md:ml-24 lg:mb-20 lg:mt-20 text-5xl font-bold tracking-wide text-[#474747]">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="w-56">
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" className="w-full border-slate-300 border" />
        </div>
        <div className="w-56">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" className="w-full border-slate-300 border" />
        </div>
        <div className="w-full md:w-96">
          <label htmlFor="message">Message: </label>
          <textarea className="w-full h-40 border-slate-300 border" />
        </div>
        <button type="submit" className="bg-[#2A5042] text-white px-4 py-2 rounded-lg transition ease-in-out duration-75 hover:bg-[#152821]">Submit</button>
      </form>
    </section>
  )
}

export default Contact;
