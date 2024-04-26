
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/Signup";
import Forget from "./page/Forget";
import Reset from "./page/Reset"
import NavBar from "./page/NavBar";
import Title from "./page/Title";
import "./App.css";
import Confirmation from "./page/Confirmation";



const App = () => {
  return (
    <Router>
      <Title />
      <NavBar />
      <div className="body">
        <div className="content-wrapper"> 
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={<SignIn />} /> 
              <Route path="/signup" element={<SignUp />} /> 
              <Route path="/forgot-password" element={<Forget />} /> 
              <Route path="/reset-password" element={<Reset/>}/>
              <Route path="/confirmation" element={<Confirmation/>}/>
            </Routes>
          </div> 
        </div>
      </div>
    </Router>
  );
};

export default App;
