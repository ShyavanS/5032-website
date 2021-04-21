import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png"

var click = true;

function Navbar() {
  return (
    <div className='topnav' id='myTopnav'>
      <a href='/' className='active'>
        {/* <i className="fa fa-home" aria-hidden="true"></i> */}
        <img src={logo} alt="logo" height="35px"></img>
      </a>
      <div className='icon'>
        <button onClick={mobileNav} className='dropbtn'>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <a href='/sponsors' className="spon">
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
          <a href='/who-we-are'>Who We Are</a>
          <a href='https://www.thebluealliance.com/team/5032' target="_blank" rel="noreferrer">History</a>
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
          {/* <a href='/announcements'>Announcements</a> */}
          <a href='https://photos.app.goo.gl/Ejxi6MULa1xhBurbA' target="_blank" rel="noreferrer">Gallery</a>
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
