import React from "react";
import { NavLink } from "react-router-dom";

const Cv = (props) => {
  return (
    <div>
      <div>My cv paaaaggggeeee</div>
      <NavLink className="nav-link" to="/">
        <span>Homepage</span>
      </NavLink>
    </div>
  );
};

export default Cv;
