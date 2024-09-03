import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/assets.css';

export const links = () => {
    return (
        <div className="links">
            <a href="https://github.com/DavidLee36" target="_blank">
                <FontAwesomeIcon icon={faGithub} size='2x' className='logo' />
            </a>
            <a href="https://www.linkedin.com/in/david-lee-499a4a237/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size='2x' className='logo' />
            </a>
            <a href="mailto:david303lee@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size='2x' className='logo' />
            </a>
        </div>
    )
}