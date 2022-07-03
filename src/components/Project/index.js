import React from "react";

function Project() {
  const projects = [
    {
      name: "PotLuck",
      techUsed: "MongoDB/Express/Node.js/Handlebars",
      deployUrl: "https://potluck-inc.herokuapp.com/",
      repoUrl: "https://github.com/Qlaub/potluck"
    },
    {
      name: "Color Coded",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Color-Coded/",
      repoUrl: "https://github.com/Qlaub/Color-Coded"
    },
    {
      name: "Code Quiz",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Code-Quiz/",
      repoUrl: "https://github.com/Qlaub/Code-Quiz"
    },
    {
      name: "Weather Dashboard",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Weather-Dashboard/",
      repoUrl: "https://github.com/Qlaub/Weather-Dashboard"
    },
    {
      name: "Work Day Scheduler",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Work-Day-Scheduler/",
      repoUrl: "https://github.com/Qlaub/Work-Day-Scheduler"
    },
    {
      name: "Password Generator",
      techUsed: "JS/CSS/HTML",
      deployUrl: "https://qlaub.github.io/Password-Generator/",
      repoUrl: "https://github.com/Qlaub/Password-Generator"
    },
  ];

  return (
    <div>
      {projects.map(project => (
        <a href={project.deployUrl} target="_blank" rel="noreferrer" className="project-img">
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
