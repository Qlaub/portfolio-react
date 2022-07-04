import React from "react";
import potluck from '../../assets/images/potluck.jpg';
import colorcoded from '../../assets/images/colorcoded.jpg';
import codequiz from '../../assets/images/codequiz.jpg';
import weather from '../../assets/images/weather.jpg';
import scheduler from '../../assets/images/scheduler.jpg';
import password from '../../assets/images/password.jpg';

function Project() {
  const projects = [
    {
      name: "PotLuck",
      techUsed: "MongoDB/Express/Node.js",
      deployUrl: "https://potluck-inc.herokuapp.com/",
      repoUrl: "https://github.com/Qlaub/potluck",
      imageSrc: potluck
    },
    {
      name: "Color Coded",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Color-Coded/",
      repoUrl: "https://github.com/Qlaub/Color-Coded",
      imageSrc: colorcoded
    },
    {
      name: "Code Quiz",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Code-Quiz/",
      repoUrl: "https://github.com/Qlaub/Code-Quiz",
      imageSrc: codequiz
    },
    {
      name: "Weather Dashboard",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Weather-Dashboard/",
      repoUrl: "https://github.com/Qlaub/Weather-Dashboard",
      imageSrc: weather
    },
    {
      name: "Work Day Scheduler",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Work-Day-Scheduler/",
      repoUrl: "https://github.com/Qlaub/Work-Day-Scheduler",
      imageSrc: scheduler
    },
    {
      name: "Password Generator",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Password-Generator/",
      repoUrl: "https://github.com/Qlaub/Password-Generator",
      imageSrc: password
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-8 xl:gap-12">
      {projects.map((project, i) => (
        <div key={i} className="mb-10 lg:mb-0 bg-[#2A5042] px-2 py-1 lg:p-2 rounded-xl">
          <h2 className="font-semibold text-xl text-white mb-1 lg:hidden">{project.name}</h2>
          <div className="relative">
            <img src={project.imageSrc} alt={project.name} />
            <a href={project.deployUrl} target="_blank" rel="noreferrer" className="grid place-items-center absolute inset-0 text-white text-4xl opacity-0 transition ease-in-out duration-500 hover:bg-black hover:opacity-70">
              {project.name}
            </a>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-white">{project.techUsed}</span> 
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-blue-200 hover:text-rose-200 transition ease-in-out duration-100">Repository Link</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Project;
