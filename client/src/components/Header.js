import React from "react";
import { Link } from "react-router-dom";
import './css/header.css';
import Logout from "./Logout";


function Header() {
  return (
    <header>
        <div className='header__wrapper container'>
          <div>
          <Link to="/dashboard" className="link">
            {" "}
            <h2 className="header__title">myEHR</h2>{" "}
          </Link>
          </div>
            {/* <Link to="/logout" >Logout</Link> */}
            {/* <nav>
              <ul>
                <li><Logout/></li>
              </ul>
            </nav> */}
          
        </div>
    </header>
  )
}

export default Header