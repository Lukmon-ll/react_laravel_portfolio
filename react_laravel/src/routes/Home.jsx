import Project from "../components/Project";
import "../styles/home.css"
import image1 from "../assets/myImage1.jpg";

export default function Home() {
  return(

    <main id="home-main-content">
      <h2>Welcome!</h2>
      <div className="container1">
      <div className="line1">
      <p>My name is Lukmon Lasisi, and I'm a web developer and an aspiring software developer with a passion for coding. With years of experience in this field, I've had the opportunity to work on a variety of exciting projects and collaborate with talented individuals from around the world.</p>

<p>
Throughout my career, I've developed a unique set of skills in team collaborations, and I'm always eager to take on new challenges and expand my knowledge. In my spare time, you can find me watching TV, playing table tennis or exploring new places and cultures.</p>

<p>
On this website, you'll find a collection of my work, ranging from content management systems to web appllications, as well as some of my thoughts and insights on software development techniques. Thank you for taking the time to visit, and I hope you enjoy browsing my portfolio!</p>
<p>ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus maxime voluptates delectus accusamus nulla assumenda rerum nostrum laudantium adipisci officia distinctio, itaque ut reiciendis quos quia enim eos? Recusandae?</p>
<p>ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus maxime voluptates delectus accusamus nulla assumenda rerum nostrum laudantium adipisci officia distinctio, itaque ut reiciendis quos quia enim eos? Recusandae?</p>
<p>ipson Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repellendus maxime voluptates delectus accusamus nulla assumenda rerum nostrum laudantium adipisci officia distinctio, itaque ut reiciendis quos quia enim eos? Recusandae?</p>
</div>
      <div className="line1">
      <img src={image1} alt="Author's image" />
      </div>
      </div>
      <Project />

    </main>
  );
}