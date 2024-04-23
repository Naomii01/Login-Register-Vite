import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar= () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/" className="menu-item">Home</Link>
        </li>
        <li>
          <Link to="/about" className="menu-item">About</Link>
        </li>
        <li>
          <Link to="/contact" className="menu-item">Contact</Link>
        </li>
      </ul>
    </div>
    
  );
};

export default NavBar;
