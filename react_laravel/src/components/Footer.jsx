import '../styles/footer.css'
import SocialMedia from "./SocialMedia";








export default function Footer() {
  return(

    <footer id="footer-content">
      <div className="container">
      <div className="line">
      2023 &copy; Copyright, Lukmon Lasisi
      </div>
      <div className="line" >
      <SocialMedia/>
      </div>
      </div>
      
    </footer>
  );
}