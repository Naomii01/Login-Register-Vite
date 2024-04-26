import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SignIn from "./page/SignIn";
import SignUp from "./page/Signup";
import Forget from "./page/Forget";
import Reset from "./page/Reset";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Confirmation from "./page/Confirmation";
import Success from "./page/Success";
import AuthPages from "./page/AuthPages";
import Layout from "./components/Layout";




const App = () => {
  return (
    <Router>
      <div className="body">
        <div className="content-wrapper">
          <div className="content">
            <Routes>
              {/* Routes for authenticated pages */}
              <Route element={<AuthPages />}>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<Forget />} />
                <Route path="/reset-password" element={<Reset />} />
                <Route path="/confirmation" element={<Confirmation />} />
              </Route>

              {/* Routes for other pages */}
              <Route element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
