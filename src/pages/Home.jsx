import React from "react";
import { NavLink } from "react-router-dom";
import ColorGrid from "../components/ColorGrid";
import Footer from "../components/Footer";
import "../styles/home.scss";

const Home = (props) => {
  return (
    <div className="home-page">
      <header id="home-page-header">
        <h1 className="font-crimson-text header">Jacqueline Jumaga</h1>
        <h2 className="font-prompt-thick sub-header">
          Frontend Web Developper
        </h2>
      </header>

      <section id="section-1">
        <ColorGrid />

        <div className="home-about home-sections">
          <div>
            <h2 className="font-crimson-text header">Hello,</h2>
            <h3 className="font-prompt-thick sub-header">I'm Jacqueline.</h3>
          </div>
          <p className="descriptions font-prompt-thin">
            I was born and raised in Calgary, Canada, but have been living in
            Paris since January 2017. After over 13 years experience in business
            management and client relations (events, retail and the restaurant
            industry), I decided it was time to change my career path.
            Technology is an ever-growing part of how we communicate with each
            other and the world around us, which has always fascinated me. In
            2021 I completed a full stack web development bootcamp with Ironhack
            Paris. I am now looking for a job that will allow me to continue my
            journey.
          </p>
          <NavLink className="learn-more-btn nav-link" to="/Cv">
            <span>CV ></span>
          </NavLink>
          <NavLink className="learn-more-btn nav-link" to="/About">
            <span>Learn more ></span>
          </NavLink>
        </div>
      </section>

      <section id="section-2">
        <div className="home-work home-sections">
          <div>
            <h2 className="font-crimson-text header">My Work</h2>
            <h3 className="font-prompt-thick sub-header">Portfolio</h3>
          </div>
          <p className="descriptions font-prompt-thin">
            My studies include full stack development with JavaScript,
            Express.js, React.js, Node.js, and MongoDB. I am particularly
            interested in front end development and design.
          </p>
          <NavLink className="nav-link" to="/MyWork">
            <span>Learn more ></span>
          </NavLink>
        </div>
      </section>

      <section id="section-3">
        <ColorGrid />
        <div className="home-skills home-sections">
          <h2 className="font-crimson-text header">My skills</h2>
          <div className="skills-descriptions">
            <div>
              <h3 className="font-prompt-thick subheader">
                Diverse Management <br />
                Experience
              </h3>
              <p className="font-prompt-thin">
                I've had the opportunity to work with teams of all sizes, in
                different languages and in different parts of the world. No
                matter the team dynamic, I am able to adapt myself and my
                leadership to contribute to a good team.
              </p>
            </div>
            <div>
              <h3 className="font-prompt-thick subheader">
                Continuous Learner
              </h3>
              <p className="font-prompt-thin">
                The technology industry is constantly changing and evolving,
                which makes continuous learning a big part of the job. Getting
                out of my comfort zone and trying new things is where I learn
                best.
              </p>
            </div>
            <div>
              <h3 className="font-prompt-thick subheader">People person</h3>
              <p className="font-prompt-thin">
                Working in different service industries since the age of 14,
                I've always loved helping people acheive their goals. I feel a
                great sense of accomplishment when I'm able to contribute to
                someone's success, be that a team member or a client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
