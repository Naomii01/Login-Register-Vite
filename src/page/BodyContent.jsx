
import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./BodyContent.css";

const BodyContent = () => {
  const location = useLocation();

  return (
    <div className="body-container">
      {location.pathname === "/" && <Home />}
      {location.pathname === "/about" && <About />}
      {location.pathname === "/contact" && <Contact />}
    </div>
  );
};

export default BodyContent;
