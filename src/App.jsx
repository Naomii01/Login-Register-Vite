import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";

const App = () => {
  return (
    <Router>
      <Routes> 
      < Route path="/" element= {<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
