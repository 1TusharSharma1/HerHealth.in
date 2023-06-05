import React from 'react';
import '../Components/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <span style={{fontSize: 'larger', color:'white'}} className="navbar__logo"><span style={{color: '#f1ba04'}}>Her</span>Health.in</span>
      </div>
      <div className="navbar__right">
        <ul className="navbar__list">
        <Link className="navbar__item" to={"/"}>
          <li style={{color:"whitesmoke"}}>Home </li></Link>
          <li className="navbar__item">Services</li>
          <li className="navbar__item">Donate</li>
          <li className="navbar__item">FAQs</li>
          <li className="navbar__item">Book Appointment</li>
        </ul>
        <button className="navbar__login-button">
              <FontAwesomeIcon icon={faSignInAlt} className="navbar__login-icon" />
              Login
            </button>
      </div>
     
    </nav>
  );
};

export default Navbar;
