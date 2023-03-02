import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import './css/dashboard.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Dashboard = () => {

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = axios.get(`${URL}/users/detail`, {
          headers: {
            Token: `Bearer ${token}`
          }
        });
        
        if (response.status === 200) {
          console.log(response.data);
          toast.success(response.data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }

  }, []);

  return (
    <div>
    <section className='dashboard__left'>
       <Sidebar />
    </section>
    <section className='dashboard__right'></section>
    <ToastContainer />
    </div>
  )
}

export default Dashboard
