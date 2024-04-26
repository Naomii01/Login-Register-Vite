import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API = "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${API}/auth/reset-password`, {
        token: "your_token_value_here", // Replace with your token value
        password,
      });
      console.log("Reset Password Success:", response.data);
      setSuccessMessage("Password successfully reset.");
    } catch (err) {
      console.error("Reset Password Error:", err.message);
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
          <h2 className="signInTitle">Reset Password</h2>
          <div className="inputContainer">
            <input
              type="password"
              required
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </div>
          <div className="inputContainer">
            <input
              type="password"
              required
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>
          <div className="signInLink">
            Back to <Link to="/signin" className="signIn">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
