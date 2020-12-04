import React from "react";
import "../styles/navbar.css";

function Navbar() {
  return (
    <div className='topnav' id='myTopnav'>
      <a href='/' className='active'>
        Home
      </a>
      {/* <a href="#news">News</a> */}
      <a href='/sponsors'>Sponsors</a>
      <div className='dropdown'>
        <button className='dropbtn'>
          About
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='/about-our-team'>Our Team</a>
          <a href='/who-we-are'>Who we are</a>
          <a href='/history'>History</a>
        </div>
      </div>
      <div className='dropdown'>
        <button className='dropbtn'>
          Updates
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='/calendar'>Calendar</a>
          <a href='/who-we-are'>Announcements</a>
          <a href='/history'>Gallery</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
