import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [formErrors, setFormErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API = "https://contact-app-server-nxgi.onrender.com/api/v1/contactapp";

  const validateForm = () => {
    const errors = {};

    if (!fullName.trim()) {
      errors.fullName = 'Please enter your Full Name.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fullName)) {
      errors.fullName = 'Please enter your Full Name.';
    }

    if (!username.trim()) {
      errors.username = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(username)) {
      errors.username = 'Please enter a valid email address.';
    }

    if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }

    if (confirmPassword !== password) {
      errors.confirmPassword = 'Passwords do not match.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const signUpData = {
      email: username,
      password,
      confirmPassword,
      fullName,
    };

    try {
      const response = await axios.post(`${API}/auth/signup`, signUpData);
      console.log('Signup Success:', response.data);
      setErrorMessage('You Have Successfully Registered!!');
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setFullName('');
      setFormErrors({
        username: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error('Signup Error:', err.message);
      setErrorMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {errorMessage ? (<div className="flex flex-col items-center pt-10 gap-3 text-2xl">
  <span className="text-1971C2 font-semibold">
    You Have Successfully Registered!!
  </span>
  <span>
    Click on the button below to Continue to the Sign In page to Log in
  </span>
  <button className="py-3 px-9 bg-a6d8ff text-1971C2 font-bold rounded-2xl border-2 border-1971C2">
    <Link to="/signin">Sign in</Link>
  </button>
</div>

        
      ) : (
        <div className="container">
          <div className="header">
            <h1 className="logo">LOGO HERE</h1>
          </div>
          <div className="body">
            <div className="signUpContainer">
              <div className="signUpTitle">Sign Up</div>
              <form className="form" onSubmit={handleSubmit}>
                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="inputContainer">
                  <input
                    type="text"
                    placeholder="Email"
                    className={`input ${
                      formErrors.username ? 'border border-red-500' : ''
                    }`}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {formErrors.username && (
                    <span className="text-red-500 text-sm">
                      {formErrors.username}
                    </span>
                  )}
                </div>

                <div className="inputContainer">
                  <input
                    type="password"
                    placeholder="Password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {formErrors.password && (
                    <span className="text-red-500 text-sm">
                      {formErrors.password}
                    </span>
                  )}
                </div>

                <div className="inputContainer">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {formErrors.confirmPassword && (
                    <span className="text-red-500 text-sm">
                      {formErrors.confirmPassword}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="signUpButton"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Loading...' : 'Sign Up'}
                </button>
              </form>
              <div className="signInLink">
                Already have an account?{' '}
                <Link to="/" className="signIn">
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpPage;
