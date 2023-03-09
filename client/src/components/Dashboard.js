import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/dashboard.css";
import { URL } from "../App";

// import {
//   useLocation
// } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import Allergies from './Allergies';
import Header from "./Header";

const Dashboard = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const navigate = useNavigate();
  // const location = useLocation();

  const [user, setUser] = useState();

  useEffect(() => {
    let cancelRequest = false;

    async function fetchUserData(token) {
      try {
        const response = await axios.get(`${URL}/users/detail`, {
          headers: {
            Token: `Bearer ${token}`,
          },
        });

        if (!cancelRequest && response.status === 200) {
          
          setUser(response.data);
          // console.log(user);
          // user = response.data;
          toast.success(response.data);
        }
      } catch (error) {
        if (!cancelRequest && error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Network error");
        }
      }
    }

    const token = localStorage.getItem("token");

    if (token) {
      fetchUserData(token);
    }

    return () => {
      cancelRequest = true;
    };
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);
  
//   const dob = new Date(user.healthData.dateOfBirth);
// const ageInMs = Date.now() - dob.getTime();
// const ageInYears = Math.floor(ageInMs / 31557600000); // 31557600000 is the number of milliseconds in a year

const dob = user?.healthData?.dateOfBirth ? new Date(user.healthData.dateOfBirth) : null;
const ageInMs = dob ? Date.now() - dob.getTime() : null;
const ageInYears = ageInMs ? Math.floor(ageInMs / 31557600000) : null;


// Update the text content of the <span> element
// document.querySelector('p span').textContent = `${ageInYears} years`;

  return (
    <>
      <Header />
      <div className="main dashboard">
        <section className="dashboard__left">
          <Sidebar />
        </section>
        <section className="dashboard__right">
          <h2>Personal Health Data</h2>
          <section className="dashboard__right-main">
            <div className="dashboard__main-left">
              <div>
                <p>Welcome</p>
                <h4>{user?.name? user.name : "-"}</h4>
              </div>
              <div>
                <p>
                  Age: <span>{ageInYears ? ageInYears + " years" :"-"}</span>
                </p>
              </div>
            </div>
            <div className="dashboard__main-right">
              <article>
                <div>
                  <p>Weight</p>
                  <h4>{user?.healthData.weight ? user.healthData.weight :"-"} Kg</h4>
                </div>
                <div>
                  <p>Height</p>
                  <h4>{user?.healthData.height ? user.healthData.height :"-"} cm</h4>
                </div>
              </article>
              <article>
                <div>
                  <p>Sickling Status</p>
                  <h4>{user?.healthData.sicklingStatus ? user.healthData.sicklingStatus :"-"}</h4>
                </div>
                <div>
                  <p>Blood Type</p>
                  <h4>{user?.healthData.bloodType ? user.healthData.bloodType :"-"}</h4>
                </div>
              </article>
              <article>
                <div>
                  <p>G6PD Status</p>
                  <h4>{user?.healthData.g6pdStatus ? user.healthData.g6pdStatus :"-"}</h4>
                </div>
              </article>
            </div>
          </section>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default Dashboard;
