import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Confirmation from './Confirmation';
import './SignIn.css';

function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking login status

  const API = "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const signInData = {
      email: username,
      password: password,
    };

    try {
      const response = await axios.post(`${API}/auth/signin`, signInData);
      console.log("Signin Success:", response.data);
      setIsLoggedIn(true); // Set isLoggedIn to true on successful sign-in
    } catch (err) {
      console.error("Signin Error:", err.message);
      if (err.response) {
        switch (err.response.status) {
          case 401:
            setErrorMessage("Invalid username or incorrect password");
            break;
          default:
            setErrorMessage(
              "User not found. Please check your username and try again."
            );
        }
      } else {
        setErrorMessage(
          "Network error. Please check your connection and try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // If logged in, display success message and redirect to home page
  if (isLoggedIn) {
    return (
      <div className="flex flex-col items-center pt-10 gap-3 text-2xl">
        <span className="font-semibold">THANK YOU!!</span>
        <span className="text-[blue] font-semibold">
          YOU HAVE SUCCESSFULLY LOGGED IN.!!
        </span>
        <span className="text-xl">
          Please click the button below to return to the homepage
        </span>
        <button className="py-3 px-9 bg-sky-500 text-black font-bold rounded-2xl hover:bg-[#0b8bb2] transition-all duration-500">
          <Link to="/">GO TO HOME</Link>
        </button>
      </div>
    );
  }

  // If not logged in, display the sign-in form
  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">LOGO HERE</h1>
      </div>
      <div className="body">
        <div className="signInContainer">
          <div className="signInTitle">Sign In</div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="inputContainer">
              <input
                type="email"
                required
                placeholder="Enter Email"
                className="input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="inputContainer">
              <input
                type="password"
                required
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && (
              <p className="text-[#ea3b35]">{errorMessage}</p>
            )}
            <div className="resetPasswordLink">
              <Link to="/reset-password" className="resetPassword">
                Reset Password
              </Link>
            </div>
            <button
              type="submit"
              className="signInButton"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Sign In"}
            </button>
          </form>
          <div className="linksContainer">
            <div className="signUpLink">
              Already do not have an account?{" "}
              <Link to="/signup" className="signUp">
                Sign Up
              </Link>
            </div>
            <div className="forgotPasswordLink">
              <Link to="/forgot-password" className="forgotPassword">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Display Confirmation page if isLoggedIn is true */}
      {isLoggedIn && <Confirmation />}
    </div>
  );
}

export default SignInPage;
