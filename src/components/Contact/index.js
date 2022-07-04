import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />
        <label htmlFor="email">Email: </label>
        <input type="text" name="email" />
        <label htmlFor="message">Message: </label>
        <input type="textarea" />
      </form>
    </section>
  )
}

export default Contact;
