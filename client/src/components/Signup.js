import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/signup.css";
import { URL } from "../App";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./Header";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  // const [role, setRole] = useState('');
  const role = "patient";
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      toast.error('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${URL}/users`, {
        fullName,
        email,
        password,
        role,
      });

      if (response.status === 201) {
        // Handle successful signup
        console.log(response.data);
        
        toast.success('Signup successful! Redirecting to login page...');
        setTimeout(() => navigate('/login'), 3000);
      } else {
        // Handle signup failure
        console.log("Sorry, something went wrong");
        toast.error("Sorry, something went wrong");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
    <Header/>
    <div className="signup container">
      <section className="signup__left">
        <div className="signup__left-top">
          <h1>Register an Account</h1>
          <div>
            <p>Already have an Account?</p>
            <Link to="/login">Sign In</Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          {/* <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      /> */}
          <button type="submit">Sign up</button>
        </form>
        <ToastContainer />
        {error && <p className="error">{error}</p>}
      </section>
      <section>
        <img src="/images/signup.png" alt="Signup" />
      </section>
    </div>
    </>
  );
}

export default Signup;
