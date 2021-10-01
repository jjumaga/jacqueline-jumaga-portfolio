import React from "react";
import { NavLink } from "react-router-dom";
import ColorGrid from "../components/ColorGrid";
import "../styles/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = (props) => {
  return (
    <div className="body">
      <header className="header" style={{ backgroundColor: "#559CAD" }}>
        <h1 className="contact-header text-header">Get In Touch</h1>
      </header>

      <section className="section-flex">
        <ColorGrid />
        <div className="contact-details page-sections">
          <div className="contact-flex">
            <div>
              <h2>Email address</h2>
              <p>j.jumaga@gmail.com</p>
            </div>
            <div>
              <h2>Phone number</h2>
              <p>+33 (0)6 76 10 26 28</p>
            </div>
            <div>
              <h2>LinkedIn</h2>
              <a href="https://www.linkedin.com/in/jacqueline-jumaga-8a0487150/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <div>
              <h2>Github</h2>
              <a href="https://github.com/jjumaga">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
          <NavLink className="nav-link" to="/">
            <span>Homepage ></span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Contact;
