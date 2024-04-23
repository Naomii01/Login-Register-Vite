// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import "./App.css";
import NavBar from "./page/NavBar"
import { Link } from "react-router-dom";

import Title from "./page/Title";

const App = () => {
  return (
    <Router>
      <Title />
      <div className="body">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
