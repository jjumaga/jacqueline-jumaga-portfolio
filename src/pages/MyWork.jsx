import React from "react";
import { NavLink } from "react-router-dom";

const MyWork = (props) => {
  return (
    <div>
      <h1>Work work work</h1>
      <NavLink className="nav-link" to="/">
        <span>Homepage</span>
      </NavLink>
    </div>
  );
};

export default MyWork;
