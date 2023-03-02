import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/signup.css";
import { URL } from "../App";
// import { login } from '../redux/authslice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useDispatch } from "react-redux";


function Login({ setAuth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`${URL}/users/login`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        setAuth(true);
        // dispatch(login(response.data));
        toast.success('Login successful! Redirecting to dashboard...');
        
        // setTimeout(() => navigate('/dashboard'), 3000);
        navigate('/dashboard');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      setError(error.message);
    }
  };
  return (
    <div className="signup">
      <section className="signup__left">
        <div className="signup__left-top">
          <h1>Sign In</h1>
          <div>
            <p>Don't have an Account?</p>
            <Link to="/">Register</Link>
          </div>
        </div>
        <form onSubmit={handleSubmit}>

          <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
        {error && <p className="error">{error}</p>}
      </section>
      <section>
        <img src="/images/signup.png" alt="Signup" />
      </section>
      <ToastContainer/>
    </div>
  )
}

export default Login
