import React from "react";
import "./navbar.css";

var click = true;

function Navbar() {
  return (
    <div className='topnav' id='myTopnav'>
      <div className='icon'>
        <button onClick={mobileNav} className='dropbtn'>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <a href='/' className='active'>
      <i className="fa fa-home" aria-hidden="true"></i>
        Home
      </a>
      <a href='/sponsors'>
      <i className="fa fa-star" aria-hidden="true"></i>
        Sponsors
      </a>
      <div className='dropdown'>
        <button className='dropbtn'>
          <i className="fa fa-info-circle" aria-hidden="true"></i>
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
          <i className="fa fa-newspaper-o" aria-hidden="true"></i>
          Updates 
          <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content'>
          <a href='/calendar'>Calendar</a>
          <a href='/announcements'>Announcements</a>
          <a href='/gallery'>Gallery</a>
        </div>
      </div>
    </div>
  );
}

function mobileNav() {
  var nav = document.getElementById('myTopnav')
  if (click) {
    nav?.classList.add('responsive')
    click = false;
  } else {
    nav?.classList.remove('responsive')
    click = true;
  }
}

export default Navbar;
