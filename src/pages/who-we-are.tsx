import React from "react";
import mechlead from "../assets/mechlead.jpg";
import teamcap from "../assets/teamcap.jpg";
import buslead from "../assets/buslead.jpg";
import proglead from "../assets/proglead.jpg";
import eleclead from "../assets/eleclead.jpg";
import deslead from "../assets/deslead.jpg";
import leadmentor from "../assets/leadmentor.jpg";
import engmentor from "../assets/engmentor.jpg";
import busmentor from "../assets/busmentor.jpg";
import "../styles/who-we-are.css";

function WhoWeAre(): JSX.Element {
  return (
    <div className='WhoWeAre'>
      <h1>Team Captain - Aidon McComb</h1>
      <img src={teamcap} width="30%" alt="Team Captain - Aidon McComb" />
      <p>Hi my name is Aidon. I've been a member of team 5032 for 3 years. In the past 3 years I've been passionate about design and learning about the various subdivisions in robotics. Specifically in the club I began outreach at Edenwood Middle School and worked on designing the chassis. As team captain I'm going to make sure this team will run smoothly.</p>
      <h1>Mechanical Lead - Saaiq Rafid</h1>
      <img src={mechlead} width="30%" alt="Mechanical Lead - Saaiq Rafid" />
      <p>Hey my name is Saaiq. I have been a member of team 5032 for 2 years. In my 2 years, I have helped team 5032 by offering my insight in areas such as machining and shop knowledge. As the mechanical lead, I will ensure that team members will improve their skills, regardless of their skill level, in CAD, machining, and prototyping, in order to help build better robots in the future.</p>
      <h1>Design Lead - Mircea Preotesoiu</h1>
      <img src={deslead} width="30%" alt="Design Lead - Mircea Preotesoiu" />
      <p>Hi my name is Mircea. I have been a member of this team for three years now. As design lead I am happy to be working with all of you. My goal is to teach people about design and robotics. Looking forward to a fun year.</p>
      <h1>Electrical Lead - Jack Markowski</h1>
      <img src={eleclead} width="30%" alt="Electrical Lead - Jack Markowski" />
      <p>Hello, my name is Jack. During the last few years that I've been apart of this team, robotics has grown to become one of my greatest passions. As electrical lead I strive to help others understand the electrical subdivision and why it's important. I look forward to the year ahead!</p>
      <h1>Programming Lead - Shyavan Sridhar</h1>
      <img src={proglead} width="30%" alt="Programming Lead - Shyavan Sridhar" />
      <p>Hello, I'm Shyavan, the Programming Lead of FRC Team 5032. This is my third year being a part of this team although I have been involved with FIRST for over 8 years. Since I started with FLL in grade 4 I have always been involved with programming and when I began on this team, I naturally chose the same. I started out doing some work on computer vision for our robot, working my way up to understand how the whole of FRC robots are programmed, constructed, and designed. I have been working very closely with my fellow team members to help get our team up and running and better understand the processes of the other subdivisions within the team. I have also been actively providing some outreach on my own through STEM and Robotics education/mentoring to my old school, Ruth Thompson Middle School. With a new year and a new method of learning, I aim to use the situation to our advantage and get our programming subteam ready for anything this season has in store for us!</p>
      <h1>Business Lead - Arnav Chaturvedi</h1>
      <img src={buslead} width="30%" alt="Business Lead - Arnav Chaturvedi" />
      <p>Hello everyone, my name is Arnav. Robotics has been something that I am very passionate about for the last 2 years, and one of my goals as business lead this year is to make our team more organized. Our situation may be kinda wacky right now, but I'm excited to work with you guys to make this the best year possible.</p>
      <h1>Lead Mentor - Godofredo Balcita</h1>
      <img src={leadmentor} width="30%" alt="Lead Mentor - Godofredo Balcita" />
      <p>Hi my name is Godofredo Balcita and I am the lead mentor for Team 5032. I am excited to have a Robotics Team this year in spite of our current situation. I am looking forward to having a great year alongside the other mentors. Go Team!</p>
      <h1>Engineering Mentor - Chris Wilson</h1>
      <img src={engmentor} width="30%" alt="Engineering mentor - Chris Wilson" />
      <p>My name is Chris and I have been working as a mechanical engineer in the automation and robotics industry for almost 25 years. Last year was my first experience as a full-time mentor and I came away with a deep appreciation of the knowledge and enthusiasm that the students bring to their projects. This season is obviously a huge challenge, but I have no doubt that as a team, we will prevail and grow. I look forward to continuing to learn and contribute as we design and build new robots.</p>
      <h1>Business Mentor - Harpreet Bhamra</h1>
      <img src={busmentor} width="30%" alt="Business Mentor - Harpreet Bhamra" />
      <p>Hey! Like many students on the team, I've loved STEM fields since I was a kid. Many of my favourite memories of high school are with my FRC team, and now I'm able to give back to that community by being The Falcon's business mentor. Outside of robotics, I love to learn about elasmobranch behaviour atmospheric chemistry, and the anthropology of humans going to outer space.</p>
    </div>
  );
}

export default WhoWeAre;
