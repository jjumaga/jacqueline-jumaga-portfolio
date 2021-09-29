import React from "react";
import { NavLink } from "react-router-dom";

const Contact = (props) => {
  return (
    <div>
      <h1> Pick up the phone!</h1>
      <NavLink className="nav-link" to="/">
        <span>Homepage</span>
      </NavLink>
    </div>
  );
};

export default Contact;
