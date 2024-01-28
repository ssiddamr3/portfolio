import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './footer.css';

function Footer() {
  return (
    <div>
      <h1 className='heading-font'><span class="material-symbols-outlined">contact_page</span> Contact</h1>
      <div className='contact-sources'>
        <a href="https://github.com/ssiddamr3" target="_blank"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
        <a href='https://www.linkedin.com/in/sreekarreddyy1998' target='_blank'><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
        <FontAwesomeIcon icon={faEnvelope} size='2x' />ssiddamr@buffalo.edu
        <FontAwesomeIcon icon={faPhone} size='2x'/>+1 716-400-2624
      </div>
    </div>
  );
}

export default Footer;
