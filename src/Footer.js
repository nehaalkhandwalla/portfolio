import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <footer>
        <p>Nehaal Khandwalla &copy; 2024 </p>
        <section className='socials'>
        <a href="https://www.linkedin.com/in/nehaalkhandwalla" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            {/* linkedin */}
        </a>
        <a href="https://www.github.com/nehaalkhandwalla" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            {/* github */}
        </a>
        <a href="mailto:[nehaalkhandwalla1@gmail.com]" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
            {/* email */}
        </a>        
        </section>
        </footer>
    );
    };  
    export default Footer;