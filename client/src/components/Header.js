import React from "react";
import { Link } from "react-router-dom";
import './css/header.css';

function Header() {
  return (
    <header>
        <div className='header__wrapper container'>
        <Link to="/dashboard" className="link">
          {" "}
          <h2 className="header__title">myEHR</h2>{" "}
        </Link>
        </div>
    </header>
  )
}

export default Header