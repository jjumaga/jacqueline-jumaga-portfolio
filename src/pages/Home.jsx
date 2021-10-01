import React from "react";
import { NavLink } from "react-router-dom";
import ColorGrid from "../components/ColorGrid";
import Footer from "../components/Footer";
import "../styles/home.scss";
//import { Document } from "react-pdf";
//import cvPdf from "../cv-jacqueline-jumaga-en .pdf";

//const handleClick = (e) => {
//
//}

const Home = (props) => {
  return (
    <div className="body">
      <header className="header">
        <h1 className="text-header">Jacqueline Jumaga</h1>
        <h2 className="text-sub-header">Frontend Web Developper</h2>
      </header>

      <section className="section-flex">
        <div className="home-about page-sections">
          <div>
            <h2 className="text-header">Hello,</h2>
            <h3 className="text-sub-header">I'm Jacqueline.</h3>
          </div>
          <p className="descriptions">
            I was born and raised in Calgary, Canada, but have been living in
            Paris since January 2017. After over 13 years in business management
            and client relations (events, retail and the restaurant industry), I
            decided it was time to change my career path. I chose the tech
            industry because it's an ever-growing part of how we communicate
            with each other and the world around us, which has always fascinated
            me. In 2021 I completed a full stack web development bootcamp with
            Ironhack Paris. I am now looking for a job that will allow me to
            continue my professional journey.
          </p>
          <React.Fragment>
            <NavLink className="learn-more-btn nav-link" to="/Cv">
              <span>CV ></span>
            </NavLink>
          </React.Fragment>
        </div>
        <ColorGrid />
      </section>

      <section className="section-flex">
        <ColorGrid />
        <div className="home-skills page-sections">
          <h2 className="text-header">My skills</h2>
          <div className="skills-descriptions">
            <div>
              <h3 className="prompt-font-bold">
                Diverse Management
                <br />
                Experience
              </h3>
              <h3 className="prompt-font-bold">Continuous Learner</h3>
              <h3 className="prompt-font-bold">People person</h3>
            </div>

            <div>
              <p>
                I've had the opportunity to work with teams of all sizes, in
                different languages and in different parts of the world. No
                matter the team dynamic, I am able to adapt myself and my
                leadership to positively contribute to the team.
              </p>
              <p>
                Part of what pushes me professionally is the desire for
                continued growth. Getting out of my comfort zone and trying new
                things is where I learn best. Technology is constantly evolving,
                which makes continuous learning an important part of the job.
              </p>
              <p>
                Working in different service industries since the age of 14,
                I've always loved helping people acheive their goals. I feel a
                great sense of accomplishment when I'm able to contribute to
                someone's success, be that a team member or a client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-flex">
        <div className="home-work page-sections">
          <div>
            <h2 className="text-header">My Work</h2>
            <h3 className="text-sub-header">Portfolio</h3>
          </div>
          <p className="descriptions">
            My studies include full stack development with JavaScript,
            Express.js, React.js, Node.js, and MongoDB. I am particularly
            interested in front end development and design.
            <br />
            <b>On my projects:</b>
            <br />
            - Far Out Traveller was my first web development project. I focussed
            on practicing the core of javascript concepts while getting familiar
            with single page rendering.
            <br />- Health Hub is a fullstack web application that I completed
            at the end of my bootcamp. I used React classes and my focus was to
            better understand the relationship between front and backend
            management during development.
          </p>
          <NavLink className="nav-link" to="/MyWork">
            <span>Learn more ></span>
          </NavLink>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
