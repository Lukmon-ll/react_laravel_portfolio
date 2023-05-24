import '../styles/footer.css'
import SocialMedia from "./SocialMedia";








export default function Footer() {
  return(

    <footer id="footer-content">
      <div className="container">
      <div className="line">
      Lukmon Lasisi &copy; Copyright, 2023.
      </div>
      <div className="line right" >
      <SocialMedia/>
      </div>
      </div>
      
    </footer>
  );
}