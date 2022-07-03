import React from "react";

function Contact() {
  return (
    <section>
      <h2>Contact Me</h2>
      <form>
        <label for="name">Name: </label>
        <input type="text" name="name" />
        <label for="email">Email: </label>
        <input type="text" name="email" />
        <label for="message">Message: </label>
        <input type="textarea" />
      </form>
    </section>
  )
}

export default Contact;
