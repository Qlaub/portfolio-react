import React from "react";
import photo from '../../assets/images/alex-face.png';

function About() {
  return (
    <section className="px-2 mt-10 mb-24">
      <div className="flex items-center gap-6 mb-10 ml-2">
        <h2 className="text-5xl font-bold tracking-wide text-[#474747]">About Me</h2>
        <div className="w-32 bg-[#64A692] p-1 rounded-full">
          <img src={photo} alt="Alex Glaubitz" />
        </div>
      </div>
      <article className="leading-7 text-lg text-[#4f4f4f]">
        <p className="pb-5">I began pursuing development in 2020 after performing as a classical cellist for over twenty years. My introduction to development was in taking Python, JavaScript, C, C#, and code design courses both online and at a local community college. My first major project was creating a convolutional neural network in Python that predicts steering angles for cars using road images as the input. I was encouraged by a senior engineering specialist at Aerospace to read an autonomous driving car article and attempt the project for myself. This proved to be equal parts challenging and exciting. After completing the first version of my neural network project, I was convinced I wanted to be involved in development.</p>
        <p>I am now enrolled in the UNC Coding Boot Camp to pursue Full Stack Development. I have completed two website projects using HTML and CSS, and continue to find the process of learning and refining my skills to be fulfilling and enjoyable. I fell in love with the technical study required in pursuing classical music, and bring that focus to my work as a developer.</p>
      </article>
    </section>
  )
}

export default About;
