import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.scss";

const NavBar = (props) => {
  return (
    <nav id="nav-bar">
      <div>
        <NavLink exact to="/" style={{ textDecoration: "none" }}>
          <h3 className="logo">JJ</h3>
        </NavLink>
      </div>
      <ul id="nav-bar-ul">
        <li>
          <NavLink className="nav-link" to="/About">
            <span>About</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/MyWork">
            <span>My Work</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="nav-link" to="/Contact">
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
