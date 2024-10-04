import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Socials = () => {
  return (
    <div
      className="absolute flex flex-row items-start justify-start gap-6 md:gap-8"
      id="socials"
    >
      <a
        href="https://github.com/Kyrink/"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange"
        aria-label="Visit GitHub profile"
      >
        <FontAwesomeIcon
          icon={faGithub}
          className="icon-color text-icon-default text-lgx sm:text-7xl md:text-8xl group-hover:text-icon-hover"
        />
      </a>
      <a
        href="https://linkedin.com/in/kyrinkalonji"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange"
        aria-label="Visit LinkedIn profile"
      >
        <FontAwesomeIcon
          icon={faLinkedinIn}
          className="icon-color text-icon-default text-lgx sm:text-7xl md:text-8xl group-hover:text-icon-hover"
        />
      </a>
      <a
        href="mailto:kyrinkalonji@outlook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group hover:animate-distortAndGrow icon-hover-group hover:text-orange"
        aria-label="Visit LinkedIn profile"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          className="icon-color text-icon-default text-lgx sm:text-7xl md:text-8xl group-hover:text-icon-hover"
        />
      </a>
    </div>
  );
};

export default Socials;
