import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await axios.post(`${API}/auth/forgetpwd`, { email });

      if (response.data.success) {
        setSuccessMessage(
          response.data.message || "Reset instructions sent!"
        );
      } else {
        if (response.data.message === "Email not found") {
          setErrorMessage("Email not found. Please try again.");
        } else {
          setErrorMessage(
            response.data.message ||
              "Could not send reset instructions. Please try again later."
          );
        }
      }
    } catch (err) {
      console.error("Forgot Password Error:", err.message);
      setErrorMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1 className="logo">LOGO HERE</h1>
      </div>
      <div className="signInContainer">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="signInTitle">Forgot Password</h2>
          <div className="inputContainer">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}
          {successMessage && <p className="success">{successMessage}</p>}
          <button
            type="submit"
            className="signInButton"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Reset Password"}
          </button>
          <div className="signInLink">
            Remembered your password?{" "}
            <Link to="/signin" className="signIn">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
