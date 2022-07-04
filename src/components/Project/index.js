import React from "react";

function Project() {
  const projects = [
    {
      name: "PotLuck",
      techUsed: "MongoDB/Express/Node.js/Handlebars",
      deployUrl: "https://potluck-inc.herokuapp.com/",
      repoUrl: "https://github.com/Qlaub/potluck",
      imageName: "potluck"
    },
    {
      name: "Color Coded",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Color-Coded/",
      repoUrl: "https://github.com/Qlaub/Color-Coded",
      imageName: "colorcoded"
    },
    {
      name: "Code Quiz",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Code-Quiz/",
      repoUrl: "https://github.com/Qlaub/Code-Quiz",
      imageName: "codequiz"
    },
    {
      name: "Weather Dashboard",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Weather-Dashboard/",
      repoUrl: "https://github.com/Qlaub/Weather-Dashboard",
      imageName: "weather"
    },
    {
      name: "Work Day Scheduler",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Work-Day-Scheduler/",
      repoUrl: "https://github.com/Qlaub/Work-Day-Scheduler",
      imageName: "scheduler"
    },
    {
      name: "Password Generator",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Password-Generator/",
      repoUrl: "https://github.com/Qlaub/Password-Generator",
      imageName: "password"
    },
  ];

  return (
    <div>
      {projects.map((project, i) => (
        <a href={project.deployUrl} target="_blank" rel="noreferrer" className="" key={i}>
          <div className="work-subtitle-container">
            <div className="img-text">
              <h3>{project.name}</h3>
              <p>{project.techUsed}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default Project;
