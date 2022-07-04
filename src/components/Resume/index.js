import React from "react";

function Resume() {
  return (
    <div className="mx-2 mt-16 mb-24 md:ml-24 md:mr-48 lg:ml-32 lg:mr-96 lg:mb-10">
      <h2 className="mb-10 ml-2 md:ml-24 lg:mt-20 text-4xl font-bold tracking-wide text-[#474747]">
        Front-End Proficiencies
      </h2>
      <ul className="text-lg ml-10 mb-10 list-disc">
        <li className="mb-4">HTML</li>
        <li className="mb-4">CSS</li>
        <li className="mb-4">JavaScript</li>
        <li className="mb-4">React</li>
        <li className="mb-4">Tailwind CSS</li>
        <li>Handlebars</li>
      </ul>
      <h2 className="mb-10 ml-2 md:ml-24 lg:mt-20 text-4xl font-bold tracking-wide text-[#474747]">
        Back-End Proficiencies
      </h2>
      <ul className="text-lg ml-10 mb-10 list-disc">
        <li className="mb-4">Node.js</li>
        <li className="mb-4">Express</li>
        <li className="mb-4">MongoDB</li>
        <li className="mb-4">MySQL</li>
        <li className="mb-4">Stripe</li>
      </ul>
      <div className="w-full lg:w-fit lg:ml-32 flex justify-center">
        <a href="./assets/documents/GlaubitzResume.pdf" download className="p-4 text-blue-600 text-xl text-center">Download my resume as a PDF</a>
      </div>
    </div>
  )
}

export default Resume;
