import React from "react";
// import logo from "../assets/logo.svg";
import team from "../assets/teamphoto.jpg"
import "../styles/home.css";
import "../components/navbar.css";
// import "@nilevia/count-down-timer-react/dist/index.css";
// const { CountDownDaily } = require("@nilevia/count-down-timer-react");

function Home() {
  return (
    <div className='Home'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Coming Soon!</p>
        <p className='Countdowns'>
          Website's first release in...
          <CountDownDaily
            endDate={"2021-02-28T00:00:00.000-05:00"}
            dayAffix='day(s)'
            hourAffix='hr(s)'
            minutesAffix='min(s)'
            secondAffix='sec(s)'
            className='light-blue bold font-muli-20'
          />
        </p>
      </header> */}
      <h1>TEAM 5032</h1>
      <img src={team} width="50%" alt="The Team"></img>
      <p>
        Team 5032 annually competes in the First Robotics competition where we build a 57 kg robot over a 6 week period to compete in the year’s game. The game and its theme changes annually, however, it usually contains an autonomous and teleoperated period.
      </p>
      <h2>About FIRST</h2>
      <p>
        FIRST, which stands For Inspiration and Recognition of Science and Technology, is an international non-profit organization that provides children, youth, and adults the opportunity to experience various STEM fields in an inclusive environment. The organization encourages children and youth to become leaders and innovators within the STEM community while following Gracious Professionalism. FIRST comprises 5 different programs: FIRST Lego League Discover (ages 4-6), FIRST Lego League Explore (ages 6-10), FIRST Lego League Challenge (ages 9-14), FIRST Tech Challenge (grades 7-12), and FIRST Robotics Competition (grades 8-12).
      </p>
      <p>Learn more about FIRST at <a className="Links" href="https://www.firstinspires.org">https://www.firstinspires.org</a>.</p>
      <p>Learn more about FRC at <a className="Links" href="https://www.firstinspires.org/robotics/frc">https://www.firstinspires.org/robotics/frc</a>.</p>
      <br></br>
      <p></p>
      <br></br>
      <p></p>
      <br></br>
    </div>
  );
}

export default Home;
