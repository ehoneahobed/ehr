import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './css/dashboard.css';
import { URL } from "../App";

// import {
//   useLocation
// } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
// import Allergies from './Allergies';
import Header from './Header';

const Dashboard = () => {

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const navigate = useNavigate();
  // const location = useLocation();
  
  useEffect(() => {
    let cancelRequest = false;
    
    async function fetchUserData(token) {
      try {
        const response = await axios.get(`${URL}/users/detail`, {
          headers: {
            Token: `Bearer ${token}`
          }
        });
        
        if (!cancelRequest && response.status === 200) {
          console.log(response.data);
          toast.success(response.data);
        }
      } catch (error) {
        if (!cancelRequest && error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error('Network error');
        }
      }
    }
  
    const token = localStorage.getItem('token');
  
    if (token) {
      fetchUserData(token);
    }
  
    return () => {
      cancelRequest = true;
    };
  }, []);
  

  return (
    <>
    <Header/>
    <div className='main'>
    <section className='dashboard__left'>
       <Sidebar />
    </section>
    <section className='dashboard__right'>

        <section className="dashboard__right-content">
        {/* {location.pathname === '/allergies' ? <Allergies /> : null} */}
        </section>
    </section>
    <ToastContainer />
    </div>
    </>
  )
}

export default Dashboard
