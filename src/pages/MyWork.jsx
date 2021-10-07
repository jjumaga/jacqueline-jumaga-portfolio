import React from "react";
import { NavLink } from "react-router-dom";
import ColorGrid from "../components/ColorGrid";
import Footer from "../components/Footer";
import "../styles/myWork.scss";

const MyWork = (props) => {
  return (
    <div className="body">
      <header className="header" style={{ backgroundColor: "#FFAF47" }}>
        <h1 className="text-header">My Work</h1>
      </header>

      <section className="section-flex">
        <div className="health-hub page-sections">
          <h2 className="text-header">Health Hub</h2>
          <div className="project-descriptions">
            <div>
              <h3 className="prompt-font-bold">Concept:</h3>
              <p>
                Healthhub is a shared platform that allows healthcare
                professionals from any healthcare institution to upload and
                share patient information.
              </p>
            </div>
            <div>
              <h3 className="prompt-font-bold">Stack:</h3>
              <p>
                Fullstack SPA using react, express and javascript, deployed on
                heroku.
              </p>
            </div>
            <a
              className="work-project-links"
              rel="noreferror noopener"
              target="_blank"
              href="https://healthhubironhackproject.herokuapp.com/"
            >
              {"Health Hub >"}
            </a>
          </div>
        </div>
        <ColorGrid />
      </section>

      <section className="section-flex">
        <ColorGrid />
        <div className="far-out-traveller page-sections">
          <h2 className="text-header">
            Far Out
            <br />
            Traveller
          </h2>
          <div className="project-descriptions">
            <div>
              <h3 className="prompt-font-bold">Concept:</h3>
              <p>
                Far Out Traveller is a quiz game to match song clips to their
                correct title and artist
              </p>
            </div>
            <div>
              <h3 className="prompt-font-bold">Stack:</h3>
              <p>
                Frontend application using javascript, HTML and CSS deployed on
                github.
              </p>
            </div>
            <a
              className="work-project-links"
              rel="noreferror noopener"
              target="_blank"
              href="https://jjumaga.github.io/Video-Game-Project/"
            >
              {"Far Out Traveller >"}
            </a>
          </div>
          <NavLink className="nav-link" to="/">
            <span>Homepage ></span>
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyWork;
