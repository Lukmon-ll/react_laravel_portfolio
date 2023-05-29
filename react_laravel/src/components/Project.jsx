import { useState, useEffect } from "react";
import '../styles/project.css'
import image2 from "../assets/triviaQ.png"
import image3 from "../assets/OnatrioParks.png"
import image4 from "../assets/e_commerce.png"


export default function Project({titles}) {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    const getProject = async () => {
      let response = await fetch(
        "https://webprojectslukmon.ca/api/projects"
      );
      let data = await response.json();
      //console.log(data);
      setProjects(data);
    }
    getProject();

  }, [])


  return(
    <div id="project-content">
      <div id="project-heading">
      <h2 id="project_head">
        
        <a href="https://webprojectslukmon.ca/api/projects">My Project List</a> </h2>
        
        </div>
        
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="Iproject">
            <a id="title" href={project.url} target="_blank">
              <h3>{project.title}</h3>
            </a>
            <div>{project.content}</div>
            
            
          </div>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="project-images">
        <img src={image2} alt="Image to open trivia questions open API" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        
      </div>
    </div>
  );
}