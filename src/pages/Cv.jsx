import React from "react";
import { NavLink } from "react-router-dom";
import ColorGrid from "../components/ColorGrid";
import Footer from "../components/Footer";
import "../styles/cv.scss";

const Cv = (props) => {
  return (
    <div className="body cv-body">
      <header className="header" style={{ backgroundColor: "#F2545B" }}>
        {" "}
        <h1 className="text-header">Jacqueline Jumaga</h1>
        <h2 className="text-sub-header">CV</h2>
      </header>

      <section className="section-flex">
        <ColorGrid />
        <div className="cv-education page-sections">
          <h2 className="text-header">Education</h2>
          <h3 className="prompt-font-bold">
            2021 Ironhack, Paris - Web Development Bootcamp, BAC +4
          </h3>
          <div id="education-list">
            <ul className="prompt-font-thin">
              <li>Javascript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS/SCSS</li>
            </ul>
            <ul className="prompt-font-thin">
              <li>Express.js</li>
              <li>Axios</li>
              <li>Mongoose</li>
              <li>MongoDB</li>
            </ul>
            <ul className="prompt-font-thin">
              <li>Node.js</li>
              <li>Git</li>
              <li>Github</li>
              <li>Postman</li>
            </ul>
          </div>
          <hr />
          <h3 className="prompt-font-bold">2017 Alliance Française, Paris</h3>
          <p>> French language school</p>
          <hr />
          <h3 className="prompt-font-bold">
            2013 - 2015 Mount Royal University
          </h3>
          <p>> Event Management Program, BAC +3</p>
          <hr />
          <h3 className="prompt-font-bold">
            2011 Sir Winston Churchill High School
          </h3>
          <p>> Canadian Baccalaureate Honor Program</p>
        </div>
      </section>

      <section className="section-flex">
        <div className="cv-work-exp page-sections">
          <h2 className="text-header">Work</h2>
          <h3 className="prompt-font-bold">
            Store Manager, Lululemon Athletica <br /> 2011 – 2020 Paris, France
            and Calgary, Canada
          </h3>
          <p>> Store management from 6 - 90 employees - 5 years experience</p>
          <p>> Training manager - 5 years experience</p>
          <p>
            >>>Developed Europe wide training and coaching program in
            collaboration with other European training managers
          </p>
          <p>> Visual merchandising - 9 years experience</p>
          <p>> Stock and delivery management - 9 years experience</p>
          <p>
            >>>Led implementation of new inventory system, increasing on-hand
            inventory accuracy by 30%
          </p>
          <hr />
          <h3 className="prompt-font-bold">
            Entrepreneur Wedding Planner, Luna Events
            <br />
            2013 - 2017 Calgary, Canada
          </h3>
          <p>
            > Custom planning and execution of custom weddings in Calgary and
            the Canadian Rocky Mountains between 100-300 people
          </p>
          <p>
            > Strong marketing strategy - 23 weddings planned and executed in
            first 2 years of business
          </p>
          <p>> Strong connection with over 40 local vendors </p>
        </div>
        <ColorGrid />
      </section>

      <section className="section-flex">
        <ColorGrid />
        <div className="cv-volunteer page-sections">
          <h2 className="text-header">Awards and Volunteering</h2>
          <h3 className="prompt-font-bold">
            Sous Chef @ S.A.L.T.S., Victoria Canada
            <br />
            2010 - 2015
          </h3>
          <p>
            > Volunteer 2nd in cuisine on a tall ship 10 day summer camp for
            kids and young adults, preparing 4 meals a day for 40 kids and crew.
          </p>
          <hr />
          <h3 className="prompt-font-bold">
            Duke of Edinburgh Award, Gold level <br />
            2011
          </h3>
          <p>
            > Founded by Prince Philip, Duke of Edinburgh. Recognizes young
            adults for their achievements in personal development (volunteering,
            physical activity, community service, outdoor expedition)
          </p>
        </div>
      </section>

      <section className="section-flex">
        <div className="cv-interests page-sections">
          <h2 className="text-header">
            Languages <br />
            and Interests
          </h2>
          <div className="interests-descriptions">
            <div>
              <h3 className="roboto-mono-font-bold">Languages</h3>
              <br />
              <p>
                English - maternal
                <br />
                French - fluent
              </p>
            </div>
            <div>
              <h3 className="roboto-mono-font-bold">Interests</h3>
              <br />
              <p>
                Languages <br />
                Jazz <br />
                Dance <br />
                Photography
              </p>
            </div>
            <div>
              <h3 className="roboto-mono-font-bold">Fun Fact</h3>
              <br />
              <p>I tap dance!</p>
            </div>
          </div>
          <NavLink className="nav-link" to="/">
            <span>Homepage ></span>
          </NavLink>
        </div>
        <ColorGrid />
      </section>

      <Footer />
    </div>
  );
};

export default Cv;
