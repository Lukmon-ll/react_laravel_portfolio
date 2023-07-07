import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagramSquare, faTwitter, faLinkedin, faGithub, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import "../styles/socialMedia.css"

export default function SocialMedia() {


  return (
<div>
  <ul className='fontA'>
    <li><a href="https://github.com/Lukmon-ll" target='_blank'>
        <FontAwesomeIcon icon={faGithub} />
      </a></li>
    <li><a href="https://www.linkedin.com/in/lukmon-lasisi-aws-certified-ba265625b/" target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a></li>
    <li><a href="https://www.facebook.com/olasisilukmon" target='_blank'>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a></li>
    <li><a href="https://www.facebook.com/olasisilukmon" target='_blank'>
      <FontAwesomeIcon icon={faInstagramSquare} />
      </a></li>
    <li><a href="https://www.facebook.com/olasisilukmon" target='_blank'>
      <FontAwesomeIcon icon={faTwitter} />
      </a></li>
  </ul>

</div>

  );
}