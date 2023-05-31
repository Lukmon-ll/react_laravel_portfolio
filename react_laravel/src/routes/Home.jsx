import Project from "../components/Project";
import "../styles/home.css"
import image1 from "../assets/myImage1.jpg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import csharp from "../assets/csharp.svg";
/*import laravel from "../assets/laravel.svg";*/
import aspnet from "../assets/aspnet.svg";
import mysql from "../assets/mysql.svg";
import mongodb from "../assets/mongodb.svg";
import pug from "../assets/pug.png";

export default function Home() {
  return(

    <main id="home-main-content">
      <h2>Welcome!</h2>
      <div className="container1">
      <div className="line1">
        <div id="home-summary">
      <p>Welcome to my portfolio website! I'm Lukmon Lasisi, a Web Developer with a passion for coding. This website serves as a showcase of my work, skills, and accomplishments.</p>

<p>
Throughout my career, I have had the privilege of working on various exciting projects that have allowed me to refine my craft and develop a diverse skill set. From Content Management System(CMS) Projects to Web Application Development Projects and Application Support, I have gained valuable experience and demonstrated my ability to work with various software development technologies as listed below.</p>
</div>
</div>
      <div className="line1">
        <figure>
      <img src={image1} alt="Author's image" />
      <figcaption><a href="https://github.com/Lukmon-ll" target="_blank">Lukmon Lasisi</a> </figcaption>
      </figure>
      </div>
      </div>
      <div className="spacer"></div>
      <div className="skills-container">
      <figure className="skill">
<img src={mysql} alt="" />
<figcaption>MySQL Database</figcaption>
</figure>
<figure className="skill">
<img src={mongodb} alt="" />
<figcaption>MongoDB</figcaption>
</figure>
<figure className="skill">
<img src={javascript} alt="" />
<figcaption>JavaScript</figcaption>
</figure>
<figure className="skill">
<img src={csharp} alt="" />
<figcaption>cSharp</figcaption>
</figure>
<figure className="skill">
<img src={php} alt="" />
<figcaption>PHP</figcaption>
</figure>
<figure className="skill">
<img src={nodejs} alt="" />
<figcaption>NodeJS</figcaption>
</figure>
<figure className="skill">
<img src={pug} alt="" />
<figcaption>PUG</figcaption>
</figure>
<figure className="skill">
<img src={aspnet} alt="" />
<figcaption>ASP.NET</figcaption>
</figure>
      <figure className="skill">
<img src={html} alt="" />
<figcaption>HTML</figcaption>
</figure>
<figure className="skill">
<img src={css} alt="" />
<figcaption>CSS</figcaption>
</figure>




{/*<figure className="skill">
<img src={laravel} alt="" />
<figcaption>Laravel</figcaption>
  </figure>*/}



</div>

      <div className="spacer"></div>
      <hr />
      <Project />

    </main>
  );
}