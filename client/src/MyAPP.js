import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import { useSelector } from "react-redux";
// import { store } from "./redux/store";

// import components
import Signup from "./components/Signup";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";
import Allergies from "./components/Allergies";
import Home from "./components/Home";
import Insurance from "./components/Insurance";

export const URL = process.env.REACT_APP_API_URL;

function MyApp() {
//   const [isauthenticated, setAuthenticated] = useState(false);
  const authenticated = useSelector(state => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      axios
        .get(`${URL}/users/check-auth`, {
          headers: {
            Token: `Bearer ${token}`,
          },
        })
        .then((response) => {
        //   setAuthenticated(true);
          setLoading(false);
        })
        .catch((error) => {
          localStorage.removeItem("token");
        //   setAuthenticated(false);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
      <Router className="App">
        {/* <Header /> */}
        <section className="App__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Signup />} />

            {/* for login route */}
            <Route
              path="/login"
              element={
                authenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                //   <Login setAuth={setAuthenticated} />
                <Login />
                )
              }
            />

            {/* for dashboard route */}
            <Route
              path="/dashboard"
              element={authenticated ? <Dashboard /> : <Navigate to="/login" />}
            />

            {/* for logout */}
            {/* for dashboard route */}
            <Route
              path="/logout"
              element={authenticated ? <Logout /> : <Navigate to="/login" />}
            />
            <Route path="/allergies" element={<Allergies />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/logout" element={<Logout/>} />
          </Routes>
        </section>
      </Router>
  );
}

export default MyApp;
