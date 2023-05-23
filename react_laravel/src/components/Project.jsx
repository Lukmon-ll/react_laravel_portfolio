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
        
        <a href="https://webprojectslukmon.ca/api/projects">Projects:</a> </h2>
        <p>Welcome to my portfolio, where I showcase some of my favorite projects I've worked on. As a web developer, I've had the privilege of working with clients from various industries and creating projects that align with their unique needs and goals. From branding and graphic design to web development and marketing campaigns, each project represents a unique challenge and opportunity for creativity. Browse through the list below to get a sense of my skills and expertise, and feel free to click on each project to learn more.</p>
        </div>
        
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="Iproject">
            <a id="title" href={project.url} target="_blank">
              <h3>{project.title}</h3>
            </a>
            <div>{project.content}</div>
            <div className="spacer"></div>
            
          </div>
        ))}
      </div>
      <div className="project-images">
        <img src={image2} alt="Image to open trivia questions open API" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
        
      </div>
    </div>
  );
}