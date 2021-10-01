import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/about.scss";

import Footer from "../components/Footer";

const About = (props) => {
  return (
    <div id="about-page">
      <header className="header" style={{ backgroundColor: "#FFAF47" }}>
        <h1 className="text-header">About Me</h1>
      </header>
      <p>
        {" "}
        How we communicate has always fascinated me - what we say, how we say
        it, who we say it to, and why we do it. I moved to Paris from my home
        town Calgary, Canada 5 years ago. Learning a new language and culture
        (while sometimes challenging and frustrating) was an incredibly
        rewarding experience. I have over 13 years experience in management and
        client relations in French and English (events, retail and the
        restaurant industry), but at the end of 2020 I decided that it was time
        to change my path and learn a different type of language and culture,
        web development. I’m passionate about how we use tech to communicate
        with the world and people around us. My mission is to find a junior web
        development role that maximizes opportunities for growth and skill
        development through working with an outstanding team!
      </p>
      <NavLink className="nav-link" to="/">
        <span>Homepage</span>
      </NavLink>
      <Footer />
    </div>
  );
};

export default About;
