import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import axios from "axios";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

// import components
import Signup from "./components/Signup";
import Header from "./components/Header";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export const URL = process.env.REACT_APP_API_URL;

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  // const authenticated = useSelector((state) => state.auth.isAuthenticated);
  const [loading, setLoading] = useState(true);
  // const token = useSelector((state) => state.auth.token);

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
          setAuthenticated(true);
          setLoading(false);
        })
        .catch((error) => {
          localStorage.removeItem("token");
          setAuthenticated(false);
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
    // <Provider>
      <Router className="App">
        <Header />
        <section className="App__content">
          <Routes>
            <Route path="/" element={<Signup />} />

            {/* for login route */}
            <Route
              path="/login"
              element={
                authenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login setAuth={setAuthenticated} />
                )
              }
            />

            {/* for dashboard route */}
            <Route
              path="/dashboard"
              element={authenticated ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </section>
      </Router>
    // </Provider>
  );
}

export default App;
