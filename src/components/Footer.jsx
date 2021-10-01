import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.scss";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="footer-body footer-left">
        <div className="footer-contact-info">
          <span>e. j.jumaga@gmail.com</span>
          <span>t. +33 (0)6 76 10 26 28</span>
          <span>Paris 11</span>
        </div>
        <div id="footnote">
          Made with <FontAwesomeIcon icon={faJs} />,{" "}
          <FontAwesomeIcon icon={faReact} /> &{" "}
          <FontAwesomeIcon icon={faCoffee} />
        </div>
      </div>

      <div className="footer-body footer-right">
        <span className="roboto-mono-font-bold">Keep In Touch</span>
        <div>
          <a href="https://github.com/jjumaga">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/jacqueline-jumaga-8a0487150/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
