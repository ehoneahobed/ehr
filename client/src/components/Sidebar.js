import React from 'react';
import { Link } from 'react-router-dom';
import './css/sidebar.css';

const Sidebar = () => {
  return (
    <nav className='container'>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/allergies">Allergies</Link>
        </li>
        <li>
          <Link to="/conditions">Conditions</Link>
        </li>
        <li>
          <Link to="/emergency-contact">Emergency Contact</Link>
        </li>
        <li>
          <Link to="/insurance">Insurance</Link>
        </li>
        <li>
          <Link to="/transfusion">Transfusion</Link>
        </li>
        <li>
          <Link to="/vaccinations">Vaccinations</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
