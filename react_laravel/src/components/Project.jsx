import { useState, useEffect } from "react";
import '../styles/project.css'
import SocialMedia from "./SocialMedia";
import Type from "./Type";
import image2 from "../assets/triviaQ.png"
import image3 from "../assets/OnatrioParks.png"
import image4 from "../assets/e_commerce.png"
import image5 from "../assets/laravelcms.png"
import image6 from "../assets/vanillaphpcms.png"
import image7 from "../assets/vanillaphpportfolio.png"
import image8 from "../assets/laravelportfolio.png"
import image9 from "../assets/laravelcmsresize.png"
import image10 from "../assets/NaijaCA.png"


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
      <div id="CM">Contact Me</div>
      <div className="spacer"></div>
      
      <div className="PSocialMedia">
      <SocialMedia />
      <br />
      </div>
      <div className="project-heading">
        
     <h2 id="project_head">
        
  <a href="https://webprojectslukmon.ca/api/projects" target="_blank">Projects</a> </h2>
        
        
        </div>
        
        
      <div id="projects">
        {projects.map((project) => (
          <div key={project.id} className="Iproject">
            <div className="project-title-container">
              
              <div className="project-title-item">
            <h3>Title:</h3>
            </div>
            <div className="project-title-item">
            <a id="title" href={project.url} target="_blank">
              <h2>{project.title}</h2>
            </a>
            </div>
            </div>
            <div className="project-title-container">
              <div className="project-title-item">
            <h3>Type:</h3>
            </div>
            <div className="project-title-item">
            <h2>{project.type.title}</h2>
            </div>
            
            </div>
           {/*<div className="project-title-container">
              <div className="project-title-item">*/}
              <div className="content">
            <h3>Project Content:</h3>
            {/*</div>
            <div className="project-title-item">*/}
            <div>{project.content}</div>
            </div>
           {/*</div>
            </div>*/}
          </div>
        ))}
      </div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <Type />
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="project-images">
      
            <div className="project-image-container"> 
            <img src={image7} alt="" />
        
        <img src={image6} alt="" />
        <img src={image8} alt="" />
            </div>
            <div>
            
            
            </div>
            <div>
            <img src={image5} alt="" />
            <img src={image2} alt="Image to open trivia questions open API" />
            <img src={image3} alt="" />
            </div>
            <div>
            <img src={image4} alt="" />
            <img src={image4} alt="" />
            
            <img src={image10} alt="" />
            </div>


        
        
        
      </div>
    </div>
  );
}