import React from 'react';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="topnav" id="myTopnav">
      <a href="/" className="active">Home</a>
      <a href="#news">News</a>
      <a href="/sponsors">Sponsors</a>
      <div className="dropdown">
        <button className="dropbtn">About
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/about-our-team">Our Team</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </div>
  );
}


export default Navbar;
