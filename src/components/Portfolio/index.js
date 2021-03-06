import React from "react";
import Project from "../Project";

function Portfolio() {
  
  return (
    <div className="mx-2 mt-20 mb-24 md:ml-24 md:mr-48 lg:ml-32 lg:mr-96">
      <h2 className="gap-6 mb-20 md:gap-8 lg:gap-10 mb-10 ml-2 md:ml-24 lg:mb-20 lg:mt-20 text-5xl font-bold tracking-wide text-[#474747]">Projects</h2>
      <Project></Project>
    </div>
  )
}

export default Portfolio;
