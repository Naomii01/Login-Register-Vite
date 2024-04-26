// NavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active-link" className="menu-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link" className="menu-item">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link" className="menu-item">
            Contact me
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
