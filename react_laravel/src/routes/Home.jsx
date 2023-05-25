import Project from "../components/Project";
import "../styles/home.css"
import image1 from "../assets/myImage1.jpg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";
import csharp from "../assets/csharp.svg";
import laravel from "../assets/laravel.svg";
import aspnet from "../assets/aspnet.svg";

export default function Home() {
  return(

    <main id="home-main-content">
      <h2>Welcome!</h2>
      <div className="container1">
      <div className="line1">
      <p>My name is Lukmon Lasisi, and I'm a web developer and an aspiring software developer with a passion for coding. With years of experience in this field, I've had the opportunity to work on a variety of exciting projects and collaborate with talented individuals from around the world.</p>

<p>
Throughout my career, I've developed a unique set of skills in team collaborations, and I'm always eager to take on new challenges and expand my knowledge. In my spare time, you can find me watching TV, playing table tennis or exploring new places and cultures.</p>

</div>
      <div className="line1">
        <figure>
      <img src={image1} alt="Author's image" />
      <figcaption><a href="https://github.com/Lukmon-ll">Lukmon Lasisi</a> </figcaption>
      </figure>
      </div>
      </div>
      <div className="skills-container">
      <figure className="skill">
<img src={html} alt="" />
<figcaption>HTML</figcaption>
</figure>
<figure className="skill">
<img src={css} alt="" />
<figcaption>CSS</figcaption>
</figure>
<figure className="skill">
<img src={javascript} alt="" />
<figcaption>JavaScript</figcaption>
</figure>
<figure className="skill">
<img src={nodejs} alt="" />
<figcaption>NodeJS</figcaption>
</figure>
<figure className="skill">
<img src={php} alt="" />
<figcaption>PHP</figcaption>
</figure>
<figure className="skill">
<img src={aspnet} alt="" />
<figcaption>ASP.NET</figcaption>
</figure>
<figure className="skill">
<img src={laravel} alt="" />
<figcaption>Laravel</figcaption>
</figure>
<figure className="skill">
<img src={csharp} alt="" />
<figcaption>cSharp</figcaption>
</figure>
</div>

      <div className="spacer"></div>
      <Project />

    </main>
  );
}