import Project from "../components/Project";
import "../styles/home.css"
import image1 from "../assets/myImage1.jpg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";

export default function Home() {
  return(

    <main id="home-main-content">
      <h2>Welcome!</h2>
      <div className="container1">
      <div className="line1">
      <p>My name is Lukmon Lasisi, and I'm a web developer and an aspiring software developer with a passion for coding. With years of experience in this field, I've had the opportunity to work on a variety of exciting projects and collaborate with talented individuals from around the world.</p>

<p>
Throughout my career, I've developed a unique set of skills in team collaborations, and I'm always eager to take on new challenges and expand my knowledge. In my spare time, you can find me watching TV, playing table tennis or exploring new places and cultures.</p>

<img src={html} alt="" />
<img src={css} alt="" />
<img src={javascript} alt="" />
<img src={nodejs} alt="" />
<img src={php} alt="" />
</div>
      <div className="line1">
      <img src={image1} alt="Author's image" />
      </div>
      </div>
      <div className="spacer"></div>
      <Project />

    </main>
  );
}