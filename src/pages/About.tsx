import React from 'react';
import './About.css';
import logo from '../Falcons.svg'

function About(){
  return(
    <div className="about">
      <img src={logo} className='about-logo'/>
      <h1 className="Title">About Us</h1>
      <hr className="ruler"></hr>
      <p className="description">
        5032 is a robotics team based in Mississauga, Ontario, Canada, affiliated with Meadowvale Secondary School.
        Here at 5032, we aim to bring our members into the world of robotics and teach them the fundamental skills 
        they need to master robotics, contributing to the team and putting in the hard work to create a robot fit for the FIRST 
        Robotics Competition, hosted by universities across the world.
        </p>
    </div>
  );
}

export default About;