import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Socials = () => {
    return (
        <div className="absolute top-3/4  transform -translate-y-1/2 -translate-x-1/2 flex flex-row items-start justify-start gap-6 md:gap-8" id="socials">
            <a href="https://github.com/Kyrink/" target="_blank" rel="noopener noreferrer"
                className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange">
                <FontAwesomeIcon icon={faGithub} className="icon-color text-icon-default text-lgx sm:text-7xl md:text-8xl group-hover:text-icon-hover" />
            </a>
            <a href="https://linkedin.com/in/kyrinkalonji" target="_blank" rel="noopener noreferrer"
                className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon-color text-icon-default text-lgx sm:text-7xl md:text-8xl group-hover:text-icon-hover" />
            </a>
        </div>
    );
};

export default Socials;
