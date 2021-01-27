import React from "react";
import logo from "../assets/logo.svg";
import team from "../assets/teamphoto.jpg"
import "../styles/home.css";
import "../components/navbar.css";
import "@nilevia/count-down-timer-react/dist/index.css";
const { CountDownDaily } = require("@nilevia/count-down-timer-react");

function Home() {
  return (
    <div className='Home'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Coming Soon!</p>
        <p className='Countdowns'>
          FRC Kickoff in...
          <CountDownDaily
            endDate={"2021-01-04T12:00:00.000-05:00"}
            dayAffix='day(s)'
            hourAffix='hr(s)'
            minutesAffix='min(s)'
            secondAffix='sec(s)'
            className='light-blue bold font-muli-20'
          />
          Website's first release in...
          <CountDownDaily
            endDate={"2021-01-29T00:00:00.000-05:00"}
            dayAffix='day(s)'
            hourAffix='hr(s)'
            minutesAffix='min(s)'
            secondAffix='sec(s)'
            className='light-blue bold font-muli-20'
          />
        </p>
        <p></p>
        <br></br>
      </header>
      <h1>TEAM 5032</h1>
      <img src={team} width="50%" alt="Team Photo"></img>
      <h2>About FIRST</h2>
      FRC Team 5032 is Meadowvale Secondary School’s robotics team, located in Mississauga, Ontario. Since our establishment in 2014, we annually compete in the First Robotics Competition. Our continued growth and success over the past seven years is a reflection of the unquantifiable effort put forth by our members, mentors, and sponsors. Their support allows the team to create a positive environment for students to participate in STEM. 

      The team continues to work on our short and long term goals by assisting our local middle school’s FIRST Lego League Team and engaging with our school’s student body. Our beliefs reflect FIRST’s mission as we work towards providing children and youth the opportunity to experience the creative world of STEM.
    </div>
  );
}

export default Home;
